import React from 'react';
import {NavLink} from 'react-router-dom';
import Signout from './Auth/Singnout'

const Navbar = ({session}) => {
    return(
    <nav>
        {session && session.getCurrentUser ? <NavbarAuth session={session}/> : <NavbarUnAuth />}
    </nav>
    )
}
const NavbarAuth = ({session}) => {
    return(
        <React.Fragment>
            <ul>
        <li>
            <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
            <NavLink to="/search">Searh</NavLink>
        </li>
        <li>
            <NavLink to="/articles/add">Add Recipe</NavLink>
        </li>
        <li>
            <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
           <Signout />
        </li>
    </ul>
             <h2>Welcome, {session.getCurrentUser.username}</h2>
        </React.Fragment>
    
    )
    
};
const NavbarUnAuth = () => {
    return(
        <ul>
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/search">Searh</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Signin</NavLink>
            </li>
            <li>
                <NavLink to="/signup">Signup</NavLink>
            </li>
        </ul>
    )
   
}


export default Navbar;