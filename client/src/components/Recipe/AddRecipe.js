import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {ADD_RECIPE, GET_ALL_RECIPES} from '../../queries';
import  Error from '../Error';
import {withRouter} from 'react-router-dom'

const initialState = {
    name: '',
    instructions: '',
    category: 'JavaScript',
    description: '',
    username: ''
 }

class AddRecipe extends Component{

    state = {...initialState};
    clearState = () => {
        this.setState({...initialState})
    }

    componentDidMount(){
        this.setState({
            username: this.props.session.getCurrentUser.username
        })
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    validateForm = () => {
        const {name, category, description, instructions} = this.state;
        const isInvalid = !name || !category || !description || !instructions;
        return isInvalid;
    }
    handleSubmit = (event, addRecipe) => {
        event.preventDefault();
        addRecipe().then(({data}) => {
            console.log(data);
            this.clearState();
            this.props.history.push('/');
        })
    }
    updateCache = (cache, {data: {addRecipe}}) => {
        const {getAllRecipes}= cache.readQuery({query: GET_ALL_RECIPES});
        cache.writeQuery({
            query: GET_ALL_RECIPES,
            data: {
                getAllRecipes: [addRecipe, ...getAllRecipes]
            }
        })
    }
    render(){
        const {name, category, description, instructions, username} = this.state;
        return(
            <Mutation
                mutation={ADD_RECIPE} 
                variables={{name, category, description, instructions, username}}
                update={this.updateCache}
                >
            {(addRecipe, {data, loading, error})=>{
            return(
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h2>Add Recipe</h2>
                <form onSubmit={(event)=> this.handleSubmit(event, addRecipe)}>
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
                        <textarea
                            value={instructions}
                            className="form-control" rows="10" placeholder="instructions" name="instructions" onChange={this.handleChange}/>
                    </div>
                    <button disabled={loading || this.validateForm()} type="submit" className="btn btn-primary">Submit</button>
                    {error && <Error error={error} />}
                </form>
                </div>
            </div>
            </div>
        )
        }}
        </Mutation>
        )
        
        
    }
   
}
export default withRouter(AddRecipe)