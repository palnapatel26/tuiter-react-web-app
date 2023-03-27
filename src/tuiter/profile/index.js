import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    console.log(profile);
    return(
        <>
            <div className="row">
                <img src={profile.bannerPicture} className="wd-banner"/>
                <div className="col-5">
                    <img src={profile.profilePicture} className="wd-avatar"/>
                </div>
                <div className="col-4">
                </div>
                    <div className="col-3">
                        <a href="../tuiter/edit-profile" className="btn rounded-pill btn-outline-dark float-end" role="botton">Edit Profile</a>
                    </div>
            </div>
            <div className="row">
                <p> </p>
                <p> </p>
                <h1>{profile.firstName} {profile.lastName}</h1>
                <p>@palnapatel26</p>
            </div>
            <div className="row">
                <p>{profile.bio}</p>
            </div>
            <div className="row">
                <div className="col-4">
                    <i className="fa fa-map-pin"></i> {profile.location}
                </div>
                <div className="col-4">
                    <i className="fa fa-globe"></i> {profile.dateOfBirth}
                </div>
                <div className="col-4">
                    <i className="fa fa-calendar"></i> {profile.dateJoined}
                </div>
            </div>

            <div className="row">
                <p>
                </p>
               <p> <b>{profile.followingCount}</b> Following     <b>      {profile.followersCount}</b> Followers</p>

            </div>
        </>
    );
};
export default ProfileComponent;