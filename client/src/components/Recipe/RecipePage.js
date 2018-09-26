import React from 'react';

import { withRouter } from 'react-router-dom';
import { Query } from 'react-apollo';
import { GET_RECIPE } from '../../queries/index';

const formatDate = date => {
    const newDate = new Date(date).toLocaleDateString('ru-Ru');
    const newTime = new Date(date).toLocaleTimeString('ru-Ru');
    return `${newDate} в ${newTime}`

}

function RecipePage({ match }) {
    const { _id } = match.params;
    return (
        <Query query={GET_RECIPE} variables={{ _id }}>
            {({ data, loading, error }) => {
                if (loading) return <div>loading</div>
                if (error) return <div>error</div>
                console.log(data)
                return (
                    <div className="page-content">
                        <div className="container">
                            <div className="article">
                                <h1 className="article__title">{data.getRecipe.name}</h1>
                                <div className="article__img"
                                    style={{background: `url(${data.getRecipe.imageUrl}) center center / cover no-repeat`}}/>
                                <div className="article__category"><span className="article__label">Категория:</span> {data.getRecipe.category}</div>

                                <div className="article__text" dangerouslySetInnerHTML={{__html: data.getRecipe.instructions}}></div>

                                <div className="article__user">Автор: {data.getRecipe.username}</div>
                                <div className="article__date">Дата: {formatDate(data.getRecipe.createdDate)}</div>
                                </div>
                        </div>
</div>
                        )
                    }}
        </Query>
                )
            }
export default withRouter(RecipePage)