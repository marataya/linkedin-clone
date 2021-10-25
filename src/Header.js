import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {ReactComponent as LinkedinLogo} from './logo.svg';
// import { AudiotrackSharp } from '@material-ui/icons';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice'

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className="header__left">
                <LinkedinLogo className='header__logo'/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar={true}
                title='User'
                onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header

