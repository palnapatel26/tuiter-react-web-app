import React from "react";
const PostItem = (
    {
        post = {
            "userName": "New York Post",
            "handle": "nypost",
            "time": "23h",
            "title": "Major earthquake in the sahara desert shakes up 100s",
            "avatarIcon": "nypost.png",
            "image": "sahara.jpg",
            "comments": "12K",
            "reposts": "123",
            "likes": "23K"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`/images/${post.avatarIcon}`}/>
                </div>
                <div className="col-11">
                    <div>{post.userName} <i className="fa fa-check-circle fa-1x"></i> {post.handle} - {post.time}</div>
                    <div>{post.title}</div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-1">

                </div>
                <div className="col-11">
                    <img className="w-100 rounded-3" src={`/images/${post.image}`}/>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-1">

                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="col">
                            <i className="fa fa-heart"> {post.likes}</i>
                        </div>
                        <div className="col">
                            <i className="fa fa-reply"> {post.reposts}</i>
                        </div>
                        <div className="col">
                            <i className="fa fa-comment"> {post.comments}</i>
                        </div>
                        <div className="col">
                            <i className="fa fa-save"></i>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default PostItem;