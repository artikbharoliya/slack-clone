import React from 'react';
import './Header.css';
import {Avatar} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
function Header(){
    const [{user}] = useStateValue();
    return(
        <div className="header">
            <div className="header_left">
                    

                    <Avatar classname="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                    />

                    <AccessTimeIcon />


                    {/* time icon */}

            </div>

            <div className="header_search">
                {/* Search icon */}
                <SearchIcon />
                {/* Input */}
                <input placeholder="Search Channels" />

            </div>
            
            <div className="header_right">
                <HelpOutlineIcon/>
                {/* help icon */}

            </div>
        </div>
    )
}


export default Header;