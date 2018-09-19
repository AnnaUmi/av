import React from 'react';
import UserInfo from './UserInfo';
import UserRecipes from './UserRecipes'

export default function Profile({ session }) {
    return (
        <div>
            <UserInfo session={session} />
            <UserRecipes username={session.getCurrentUser.username} />
        </div>
    )
}