import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
const TuitItem = (
    {
        post: tuit = {
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
    const liked = tuit.liked ? "red":" ";
    const heartIcon = tuit.liked? 'fa-heart':'fa-heart-o';
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));

    }
    return (
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-1">
                    <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div><b>{tuit.userName}</b> <i className="fa fa-check-circle fa-1x text-primary"></i> {tuit.handle} - {tuit.time}
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-1">

                </div>
                <div className="col-11">
                    <div>{tuit.tuit}</div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-1">

                </div>
                <div className="col-11">
                    <div className="row">
                        <div className="col">
                            <i className={`fa ${heartIcon}`} style={{color: liked}}></i> {tuit.likes}
                        </div>
                        <div className="col">
                            <i className="fa fa-reply"> {tuit.reposts}</i>
                        </div>
                        <div className="col">
                            <i className="fa fa-comment-o"> {tuit.comments}</i>
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

export default TuitItem;