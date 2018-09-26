import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { ADD_RECIPE, GET_ALL_RECIPES, GET_USER_RECIPES } from '../../queries';
import Error from '../Error';
import { withRouter } from 'react-router-dom';
import withAuth from '../withAuth';
import CKEditor from 'react-ckeditor-component';

const initialState = {
    name: '',
    imageUrl: '',
    instructions: '',
    category: 'JavaScript',
    description: '',
    username: ''
}

class AddRecipe extends Component {

    state = { ...initialState };
    clearState = () => {
        this.setState({ ...initialState })
    }

    componentDidMount() {
        this.setState({
            username: this.props.session.getCurrentUser.username
        })
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleEditorChange = event =>{
        const newContent = event.editor.getData();
        this.setState({instructions: newContent});
    }
    validateForm = () => {
        const { name, imageUrl, category, description, instructions } = this.state;
        const isInvalid = !name || !imageUrl || !category || !description || !instructions;
        return isInvalid;
    }
    handleSubmit = (event, addRecipe) => {
        event.preventDefault();
        addRecipe().then(({ data }) => {
            this.clearState();
            this.props.history.push('/');
        })
    }
    updateCache = (cache, { data: { addRecipe } }) => {
        const { getAllRecipes } = cache.readQuery({ query: GET_ALL_RECIPES });
        cache.writeQuery({
            query: GET_ALL_RECIPES,
            data: {
                getAllRecipes: [addRecipe, ...getAllRecipes]
            }
        })
    }
    render() {
        const { name, imageUrl, category, description, instructions, username } = this.state;
        return (
            <Mutation
                mutation={ADD_RECIPE}
                variables={{ name, imageUrl, category, description, instructions, username }}
                refetchQueries={() => [
                    { query: GET_USER_RECIPES, variables: { username } }
                ]}
                update={this.updateCache}
            >
                {(addRecipe, { data, loading, error }) => {
                    return (
                        <div className="page-content">
                                    <h2>Add Recipe</h2>
                                    <form onSubmit={(event) => this.handleSubmit(event, addRecipe)}>
                                        <div className="form-group">
                                            <input
                                                value={name}
                                                className="form-control"
                                                type="text"
                                                name="name" placeholder="name"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                value={imageUrl}
                                                className="form-control"
                                                type="text"
                                                name="imageUrl" placeholder="imageUrl"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <select name="category" value={category} onChange={this.handleChange}>
                                                <option value="JavaScrtip"> Java Scrtip</option>
                                                <option value="CSS">CSS</option>
                                                <option value="HTML">HTML</option>
                                                <option value="React">React</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                value={description}
                                                className="form-control"
                                                type="text"
                                                name="description" placeholder="desctiption"
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                        <label htmlFor="instructions">Написать статью</label>
                                        <CKEditor 
                                            name="instructions"
                                            content={instructions}
                                            events={{change: this.handleEditorChange}}
                                        />
                                            </div>
                                        <button disabled={loading || this.validateForm()} type="submit" className="btn btn-primary">Submit</button>
                                        {error && <Error error={error} />}
                                    </form>
                                </div>
                    )
                }}
            </Mutation>
        )


    }

}
export default withAuth(session => session && session.getCurrentUser)(withRouter(AddRecipe))