import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { SEARCH_RECIPES } from '../../queries';
import SearchItem from './SearchItem';


class Search extends Component {
    state = {
        searchResults: []
    }
    handleChange = ({ searchRecipes }) => {
        this.setState({
            searchResults: searchRecipes
        })
    }
    render() {
        const { searchResults } = this.state;
        return (
            <ApolloConsumer>
                {client => (
                    <React.Fragment>
                        <div className="container">
                            <input type="search"
                                onChange={async event => {
                                    event.persist();
                                    const { data } = await client.query({
                                        query: SEARCH_RECIPES,
                                        variables: { searchTerm: event.target.value }
                                    });
                                    this.handleChange(data)
                                }}
                            />
                            <ul>
                                {searchResults.map(recipe =>
                                    <SearchItem key={recipe._id} {...recipe}/>
                                )}
                            </ul>
                        </div>

                    </React.Fragment>
                )}

            </ApolloConsumer>
        )
    }
}
export default Search;