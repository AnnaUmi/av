import React from 'react';
import {Link} from 'react-router-dom';

export default function RecipeItem({_id, name, category}){
    return(
        <li>
              <Link to={`/articles/${_id}`}><h4>{name}</h4></Link>
              <p>{category}</p>
        </li>
    )
}