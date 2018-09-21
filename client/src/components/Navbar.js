import React from 'react';
import { NavLink } from 'react-router-dom';
import Signout from './Auth/Singnout'

const Navbar = ({ session }) => {
    return (
        <header className="header header-fixed menu" >
            <div className="container">
                <div className="header__wrapper">
                    <nav className="nav">
                        {session && session.getCurrentUser ? <NavbarAuth session={session} /> : <NavbarUnAuth />}
                    </nav>
                </div>
            </div>
        </header>
    )
}
const NavbarAuth = ({ session }) => {
    return (
        <React.Fragment>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink className="nav__link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/search">Searh</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/articles/add">Add Recipe</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/profile">Profile</NavLink>
                </li>
                <li className="nav__item">
                    <Signout />
                </li>
                <li className="nav__item">
                    <NavLink className="nav__link" to="/blog" >Blog ru</NavLink>
                </li>
            </ul>
            <h2>Welcome, {session.getCurrentUser.username}</h2>
        </React.Fragment>

    )

};
const NavbarUnAuth = () => {
    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink className="nav__link" to="/" exact>Home</NavLink>
            </li>

            <li className="nav__item">
                <NavLink className="nav__link" to="/search">Searh</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className="nav__link" to="/signin">Signin</NavLink>
            </li>
            <li className="nav__item">
                <NavLink className="nav__link" to="/blog" >Blog ru</NavLink>
            </li>
        </ul>
    )

}


export default Navbar;