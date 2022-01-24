import React from 'react';
import '../css/Header.css'
import HeaderOptions from './HeaderOptions'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () =>
{
    return (
        <div className="header">
            <div className="headerLeft">
                <img src="https://www.keesingtechnologies.com/wp-content/uploads/2018/07/Linkedin-Icon.png" alt="" />
            </div>
            <div className="headerSeach">
                <SearchIcon />
                <input type="text" name="" placeholder="Search"/>
            </div>
            <div className="headerRight">
                <HeaderOptions Icon= {HomeIcon} title="Home"/>
                <HeaderOptions Icon={PeopleIcon} title="My Network"/>
                <HeaderOptions Icon={WorkIcon} title="Jobs" />
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
                <HeaderOptions avatar="https://diallo.oss-cn-shanghai.aliyuncs.com/photos/diallo.jpg"/>

            </div>
        </div>
    );
}

export default Header;
