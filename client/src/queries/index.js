import { gql } from 'apollo-boost';
import {recipeFragments} from './fragments';

export const GET_ALL_RECIPES = gql`
    query {
        getAllRecipes{
            _id
            imageUrl
            name
            category
            description
        }
    }
`;
export const GET_RECIPE = gql`
    query($_id: ID!) {
        getRecipe(_id: $_id){
        ...CompleteRecipe
    }
    }
    ${recipeFragments.recipe}
`;

//User Queries

export const GET_CURRENT_USER = gql`
    query{
        getCurrentUser{
            username
            joinDate
            email
            favorites {
                _id
                name
            }
        }
    }
`;
export const GET_USER_RECIPES = gql`
    query($username: String!){
        getUserRecipes(username: $username){
            _id
            imageUrl
            name
            likes
            category
            description
            instructions 
        }
    }
`;
export const LIKE = gql`
    mutation($_id: ID!, $username: String!){
        like(_id: $_id, username: $username){
            _id
            likes
        }
    }
`;
export const UNLIKE = gql`
    mutation($_id: ID!, $username: String!){
        unlike(_id: $_id, username: $username){
            _id
            likes
        }
    }
`;
export const DELETE_USER_RECIPE = gql`
    mutation($_id: ID!) {
        deleteUserRecipe(_id: $_id){
            _id
        }   
    }
`;
export const UPDATE_USER_RECIPE = gql`
    mutation($_id: ID!, $name: String!, $imageUrl: String!, $description: String!, $category: String!, $instructions: String!){
        updateUserRecipe(_id: $_id, name: $name, imageUrl: $imageUrl, description: $description, category: $category, instructions: $instructions){
            _id
            name
            likes
            imageUrl
            category
            description
            instructions  
        }
    }
`;
export const SIGNIN_USER = gql`
    mutation($username: String!, $password: String!){
        signinUser(username: $username, password: $password){
        token
        }
    }
`;

export const SIGNUP_USER = gql`
    mutation($username: String!, $email: String!, $password: String!){
        signupUser(username: $username, email: $email, password: $password){
        token
        }
    }
`;

export const SEARCH_RECIPES = gql`
    query($searchTerm: String){
        searchRecipes(searchTerm: $searchTerm){
            _id
            name
            likes
        }
    }
`;
export const ADD_RECIPE = gql`
    mutation($name: String!, $imageUrl: String!, $description: String!, $category: String!,
        $instructions: String!, $username: String){
        addRecipe(name: $name, imageUrl: $imageUrl, description: $description, category: $category,
        instructions: $instructions, username: $username){
            ...CompleteRecipe
            
        }
    }
    ${recipeFragments.recipe}
`