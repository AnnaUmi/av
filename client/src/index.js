import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog'
import Search from './components/Recipe/Search';
import AddRecipe from './components/Recipe/AddRecipe';
import Profile from './components/Profile/Profile'
import App from './components/App';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import RecipePage from './components/Recipe/RecipePage';
import withSession from './components/withSession';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const client = new ApolloClient({
    //uri: 'http://localhost:4444/graphql',
    uri: 'https://annavlasenko.herokuapp.com/graphql',
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network Error', networkError);
        }
    }
})

class Root extends Component {
    render() {
        const { refetch, session } = this.props;
        return (
            <Router>
                <Fragment>
                    <Header session={session} />
                    <Switch>
                        <Route path="/" exact component={App} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/search" component={Search} />
                        <Route path="/signin" render={() => <Signin refetch={refetch} />} />
                        <Route path="/signup" render={() => <Signup refetch={refetch} />} />
                        <Route path="/articles/add" render={() => <AddRecipe session={session} />} />
                        <Route path="/profile" render={() => <Profile session={session} />} />
                        <Route path="/articles/:_id" component={RecipePage} />
                        <Redirect to="/" />
                    </Switch>
                </Fragment>
            </Router>
        )
    }

};
const RootWithSession = withSession(Root);

ReactDOM.render(
    <ApolloProvider client={client}>
        <RootWithSession />
    </ApolloProvider>
    , document.getElementById('root'));

