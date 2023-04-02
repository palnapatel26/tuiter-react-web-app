import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";
import TuitStats from "./tuit-stats";
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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));

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
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};

export default TuitItem;