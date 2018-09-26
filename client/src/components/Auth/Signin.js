import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { SIGNIN_USER } from '../../queries';
import Error from '../Error';
import Title from '../utiles/Title';

const initialState = {
    username: "",
    password: "",
};

class Signin extends React.Component {

    state = { ...initialState }

    clearState = () => {
        this.setState({ ...initialState })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (event, signinUser) => {
        event.preventDefault();
        signinUser().then(async ({ data }) => {
            localStorage.setItem('token', data.signinUser.token);
            await this.props.refetch();
            this.clearState();
            this.props.history.push('/')
        })
    }

    validateForm = () => {
        const { username, password } = this.state;
        const isInvalid = !username || !password;
        return isInvalid;

    }

    render() {
        const { username, password } = this.state;
        return (
            <div className="page-content">
                <div className="container">
                <Title title={"{ Sign in }"} />
                    <Mutation mutation={SIGNIN_USER} variables={{ username, password }}>
                        {(signinUser, { data, loading, error }) => {
                            return (
                                <form className="form" onSubmit={event => this.handleSubmit(event, signinUser)}>
                                    <input className="form__input" type="text" name="username" placeholder="User name"
                                        value={username}
                                        onChange={this.handleChange}
                                    />
                                    <input className="form__input" type="password" name="password"
                                        value={password}
                                        placeholder="Password" onChange={this.handleChange}
                                    />

                                    <button className="formSubmit" disabled={loading || this.validateForm()} >Submit</button>
                                    {error && <Error error={error} />}
                                </form>
                            )
                        }}

                    </Mutation>
                </div>

            </div>

        )
    }
}
export default withRouter(Signin);