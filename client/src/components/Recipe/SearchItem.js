import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({_id, name, likes}) => {
    return (
        <li>
            <Link to={`/articles/${_id}`}><h4>{name}</h4></Link>
            <div>Likes:{likes}</div>
        </li>
    );
}

export default SearchItem;
