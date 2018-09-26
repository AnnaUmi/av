import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_RECIPES } from '../queries';
import RecipeItem from './Recipe/RecipeItem';
import Title from './utiles/Title'

class App extends Component {
  render() {
    return (
      <div>
      <Title title={"{Blog}"} />
        <Query query={GET_ALL_RECIPES}>
          {({ data, loading, error }) => {
            if (loading) return <div>loading</div>
            if (error) return <div>error</div>
            return (
              <ul className="articles__list">
                {data.getAllRecipes.map(recipe => {
                  return <RecipeItem key={recipe._id} {...recipe} />
                })}
              </ul>
            )
          }}
        </Query>
      </div>
    );
  }
}

export default App;
