import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { SEARCH_RECIPES } from '../../queries';
import SearchItem from './SearchItem';


class Search extends Component {
    state = {
        searchResults: []
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleChange = ({ searchRecipes }) => {
        this.setState({
            searchResults: searchRecipes
        })
    }
    render() {
        const { searchResults } = this.state;
        return (
            <div className="page-content">
                <div class="container">
                    <ApolloConsumer>
                        {client => (
                            <React.Fragment>
                                <input className="search-input" type="search"
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
                                        <SearchItem key={recipe._id} {...recipe} />
                                    )}
                                </ul>
                            </React.Fragment>
                        )}

                    </ApolloConsumer>
                </div>

            </div>

        )
    }
}
export default Search;