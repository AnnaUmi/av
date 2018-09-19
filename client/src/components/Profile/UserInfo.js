import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = date => {
    const newDate = new Date(date).toLocaleDateString('ru-Ru');
    const newTime = new Date(date).toLocaleTimeString('ru-Ru');
    return `${newDate} в ${newTime}`

}

const UserInfo = ({ session }) => {
    return (
        <div>
            <h2>User info</h2>
            <p>username: {session.getCurrentUser.username}</p>
            <p>email: {session.getCurrentUser.email}</p>
            <p> join date: {formatDate(session.getCurrentUser.joinDate)}</p>
            <p>{session.getCurrentUser.username}'s Favorites</p>
            <ul>
                {session.getCurrentUser.favorites.map(favorite => {
                    <li key={favorite._id}>
                        <Link to={`/articles/${favorite._id}`}><p>{favorite.name}</p></Link>
                    </li>
                })}
                {!session.getCurrentUser.favorites.length && <p>You dont have any favorits yet!</p>}
            </ul>
        </div>
    );
}

export default UserInfo;
