import React from 'react';
import { Query } from 'react-apollo'
import { GET_USER_RECIPES } from '../../queries';


const UserRecipes = ({ username }) => (
    <Query query={GET_USER_RECIPES} variables={{ username }}>
        {(data, loading, error) => {
            if (loading) return <div>Loading</div>
            if (error) return <div>Error</div>
            console.log(data)
            return (
                <p>hehe</p>
            )
        }}
    </Query>
    )

export default UserRecipes;
