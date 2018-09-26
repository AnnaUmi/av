import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Navbar from './Navbar'

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <Navbar session={props.session}

            />
        </Drawer>
    );
};

export default SideDrawer;