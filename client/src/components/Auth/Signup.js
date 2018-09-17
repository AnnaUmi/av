import React from 'react';
import {withRouter} from 'react-router-dom';
import {Mutation} from 'react-apollo';
import {SIGNUP_USER} from '../../queries';
import Error from '../Error'

const initialState = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
};

class Signup extends React.Component{
    
    state = {...initialState}

    clearState = () => {
        this.setState({...initialState})
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }
    handleSubmit = (event, signupUser) => {
        event.preventDefault();
        signupUser().then(async({data})=>{
            console.log(data);
            localStorage.setItem('token', data.signupUser.token);
            await this.props.refetch();
            this.clearState();
            this.history.push('/');
        })
    }

    validateForm = () => {
        const {username, email, password, passwordConfirmation} = this.state;
        const isInvalid = !username || !email || !password || password !== passwordConfirmation;
        return isInvalid;

    }

    render(){
        const {username, email, password, passwordConfirmation} = this.state;
        return(
            <div className="App">
                <div className="container">
                <div className="row">
                <h2 className="component-title">Signup</h2>
                <Mutation mutation={SIGNUP_USER} variables={{username, email, password}}>
                    {(signupUser, {data, loading, error}) => {
                        return(
                            <form onSubmit={event => this.handleSubmit(event, signupUser)}>
                                <input className="form-control" type="text" name="username" placeholder="User name" 
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                <input className="form-control" type="email" name="email" placeholder="Email"
                                    value={email}
                                    onChange={this.handleChange}
                                />
                                <input className="form-control" type="password" name="password" 
                                    value={password}
                                    placeholder="Password" onChange={this.handleChange}
                                />
                                <input className="form-control" type="password" name="passwordConfirmation" 
                                value={passwordConfirmation}
                                onChange={this.handleChange} placeholder="Confirm Password" 
                                />
                                <button disabled={loading || this.validateForm()} className="btn btn-primary">Submit</button>
                                {error && <Error error={error} />}
                            </form>
                        )
                    }}
                    
                </Mutation>
            </div>
                </div> 
            </div>
        )
    }
}
export default withRouter(Signup);