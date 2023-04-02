import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
const TuitStats = (
    {
        tuit
    }
) => {
    const liked = tuit.liked ? "red":" ";
    const heartIcon = tuit.liked? 'fa-heart':'fa-heart-o';
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));

    }
    return (
        <div className="row">

            <div className="col">
                <i onClick={() => { console.log("clicked"); dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} }className={`fa ${heartIcon}`} style={{color: liked}}></i> {tuit.likes}
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
    );
};

export default TuitStats;