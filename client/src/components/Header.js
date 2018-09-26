import React, { Component } from 'react';
import Navbar from './Navbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import ListLinkIcon from './ListLinkIcon';

class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }
    render() {
        const { session } = this.props;
        const logo = '{ Anna } Vlasenko'
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor: this.state.headerShow ? 'rgba(255,255,255, .5)' : 'transparent',
                    padding: '10px 0',
                    boxShadow: 'none'
                }}
            >
                <Toolbar>
                
                    <div className="header_logo">
                        {logo}
                       
                    </div>
                    <div className="contacts">
                        <div className="tel">+38063 590 15 39</div>
                        <div className="email">anna.a.vlasenko@yandex.ua</div>
                    </div>
                    <ListLinkIcon />
                    <IconButton
                        aria-label="Menu"
                        onClick={() => this.toggleDrawer(true)}>
                        <MenuIcon


                        />
                    </IconButton>
                    <Navbar session={session}
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>

        );
    }
}

export default Header;