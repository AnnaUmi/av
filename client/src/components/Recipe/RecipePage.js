import React from 'react';

import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries/index';

function RecipePage({ match }) {
    const { _id } = match.params;
    return (
        <Query query={GET_RECIPE} variables={{ _id }}>
            {({ data, loading, error }) => {
                if (loading) return <div>loading</div>
                if (error) return <div>error</div>
                return (
                    <div className="container">
                        <h1>{data.getRecipe.name}</h1>
                        <div>Category: {data.getRecipe.category}</div>
                        <div>Description: {data.getRecipe.description}</div>
                        <div>Instructions: {data.getRecipe.instructions}</div>

                        <div>Created by: {data.getRecipe.username}</div>
                       
                    </div>
                )
            }}
        </Query>
    )
}
export default withRouter(RecipePage)