import React from 'react';
import { NavLink } from 'react-router-dom';
import Signout from './Auth/Singnout';
import Drawer from '@material-ui/core/Drawer';

const Navbar = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <nav className="nav">
                {props.session && props.session.getCurrentUser ? <NavbarAuth onClose={props.onClose} session={props.session} /> : <NavbarUnAuth onClose={props.onClose} />}
            </nav>
        </Drawer>
    )
}

const NavbarAuth = (props) => {
    const removeMenu = () => {
        props.onClose(false)
    }
    const { session } = props;
    return (
        <React.Fragment>
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/cv" exact>Cv</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/portfolio" exact>Portfolio</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/search">Searh</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/articles/add">Add Article</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/profile">Profile</NavLink>
                </li>
                <li onClick={removeMenu} className="nav__item">
                    <Signout />
                </li>
                <li onClick={removeMenu} className="nav__item">
                    <NavLink className="nav__link" to="/blog" >Blog ru</NavLink>
                </li>
            </ul>
            <h2>Welcome, {session.getCurrentUser.username}</h2>
        </React.Fragment>

    )

};
const NavbarUnAuth = (props) => {
    const removeMenu = () => {
        props.onClose(false)
    }
    return (
        <ul className="nav__list">
            <li className="nav__item">
                <NavLink onClick={removeMenu} className="nav__link" to="/" exact>Home</NavLink>
            </li>
            <li className="nav__item">
                <NavLink onClick={removeMenu} className="nav__link" to="/cv" exact>Cv</NavLink>
            </li>
            <li className="nav__item">
                    <NavLink onClick={removeMenu} className="nav__link" to="/portfolio" exact>Portfolio</NavLink>
                </li>
            <li className="nav__item">
                <NavLink onClick={removeMenu} className="nav__link" to="/search">Searh</NavLink>
            </li>
            <li className="nav__item">
                <NavLink onClick={removeMenu} className="nav__link" to="/signin">Signin</NavLink>
            </li>
            <li className="nav__item">
                <NavLink onClick={removeMenu} className="nav__link" to="/blog" >Blog ru</NavLink>
            </li>
        </ul>
    )

}


export default Navbar;