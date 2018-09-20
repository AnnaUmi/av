import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_USER_RECIPES, DELETE_USER_RECIPE, GET_ALL_RECIPES } from '../../queries';
import { Link } from 'react-router-dom';

const handleDelete = deleteUserRecipe => {
    const confirmDelete = window.confirm('Вы уверенны что хотите удалить статью?');
    if (confirmDelete) {
        deleteUserRecipe().then(({ data }) => {
            console.log(data)
        })
    }
}

const UserRecipes = ({ username }) => (
    <Query query={GET_USER_RECIPES} variables={{ username }}>
        {({ data, loading, error }) => {
            if (loading) return <div>Loading</div>
            if (error) return <div>error</div>
            console.log(data)
            return (
                <div className="container">
                    <div className="row">
                        {!data.getUserRecipes.length && <p>У вас нет статей. </p>}
                        <ul>
                            {data.getUserRecipes.map(recipe => (
                                <li key={recipe._id}>
                                    <Link to={`/articles/${recipe._id}`}><h4>{recipe.name}</h4></Link>
                                    <div>Likes: {recipe.likes}</div>
                                    <Mutation
                                        mutation={DELETE_USER_RECIPE}
                                        variables={{ _id: recipe._id }}
                                        refetchQueries={() => [
                                            { query: GET_ALL_RECIPES },
                                            { query: GET_USER_RECIPES }
                                        ]}
                                        update={(cache, { data: { deleteUserRecipe } }) => {
                                            const { getUserRecipes } = cache.readQuery({
                                                query: GET_USER_RECIPES,
                                                variables: { username }
                                            });
                                            cache.writeQuery({
                                                query: GET_USER_RECIPES,
                                                variables: { username },
                                                data: {
                                                    getUserRecipes: getUserRecipes.filter(recipe => recipe._id !== deleteUserRecipe._id
                                                    )
                                                }
                                            })
                                        }}
                                    >
                                        {(deleteUserRecipe, attrs = {}) => (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(deleteUserRecipe)}
                                            >{attrs.loading ? 'deleting...' : 'Delete'}</button>
                                        )
                                        }
                                    </Mutation>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            )
        }}
    </Query>

);
export default UserRecipes;

