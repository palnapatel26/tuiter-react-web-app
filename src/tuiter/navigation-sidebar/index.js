import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item">Tuiter</Link>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home fa-1x"></i> Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag fa-1x"></i> Explore
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fa fa-bell fa-1x"></i> Notifications
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fa fa-envelope"></i> Messages
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fa fa-bookmark fa-1x"></i> Bookmarks
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fa fa-list fa-1x"></i> Lists
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fa fa-user fa-1x"></i> Profile
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="fas fa fa-ellipsis-h 1x"></i> More
            </Link>
        </div>

    );
};
export default NavigationSidebar;