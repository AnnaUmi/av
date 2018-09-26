import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({_id, name}) => {
    return (
        <li className="search__item">
            <Link to={`/articles/${_id}`}><h4>{name}</h4></Link>

        </li>
    );
}

export default SearchItem;
