import React from 'react';
import { Link } from 'react-router-dom';

export default function RecipeItem({ _id, imageUrl, description, name, category }) {
    return (
        <li className="articles__item">
            <Link className="articles__link" to={`/articles/${_id}`}>
                <div className="articles__header">
                    <div className="articles__img" style={{background: `url(${imageUrl}) center center / cover no-repeat`}} />
                </div>
                <div className="articles__body">
                    <h4 className="articles__title" >{name}</h4>
                    <div className="articles__category">{category}</div>
                    <div className="articles__description">{description}</div>
                </div>
            </Link>

        </li>
    )
}