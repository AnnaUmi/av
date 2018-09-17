import React, {Component} from 'react';
import {ApolloConsumer} from 'react-apollo';
import {SEARCH_RECIPES} from '../../queries';
import {Link} from 'react-router-dom';

export default class Search extends Component {
    handleChange = data => {
        console.log(data)
    }
    render(){
        return(
            <ApolloConsumer>
                {client=> (
                        <div>
                            <input type="search" 
                                onChange={async (event)=> {
                                    event.persist();
                                    const {data} = await client.query({
                                        query: SEARCH_RECIPES,
                                        variables: {searchTerm: event.target.value}
                                    });
                                    this.handleChange(data)
                                }}/>
                            <ul>
                                {[].map(recipe => {
                                   return(
                                   <li key={recipe._id}>
                                        <Link to={/articles/`${recipe._id}`}><h4>{recipe.name}</h4></Link>
                                        <p>{recipe.likes}</p>
                                    </li>
                                   ) 
                                })}
                            </ul>
                        </div>
                    )
                }
            </ApolloConsumer>
            
        )
    }
    
}