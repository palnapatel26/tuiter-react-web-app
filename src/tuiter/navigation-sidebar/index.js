import React from "react";
import {Link, NavLink} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <Link to="#" className="list-group-item">Tuiter</Link>
            <Link to="#" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="fa fa-home fa-1x"></i>
                Home
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="fa fa-hashtag fa-1x"></i>
                Explore
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </Link>
            <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </Link>
        </div>

    );

};
export default NavigationSidebar;