import React, {useState} from "react";
import {useSelector} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";

const EditProfile = () => {
    const defaultProfile = useSelector(state => state.profile)
    const [profile, setProfile] = useState(defaultProfile)
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDob] = useState(profile.dateOfBirth);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
            ...profile,
            firstName: firstName,
            lastName:lastName,
            bio: bio,
            location: location,
            website: website}));
    }
    function onFirstNameChange(e) {
        const newName = e.target.value;
        setFirstName(newName);
        const newProfile = {
            ...profile,
            firstName: firstName
        }
        setProfile(newProfile)
    }
    function onLastNameChange(e) {
        const newName = e.target.value;
        setLastName(newName);
        const newProfile = {
            ...profile,
            lastName: lastName
        }
        setProfile(newProfile)
    }
    function onBioChange(e) {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: bio
        }
        setProfile(newProfile)
    }
    function onWebsiteChange(e) {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: website
        }
        setProfile(newProfile)
    }
    function onBirthdateChange(e) {
        const newDob = e.target.value;
        setDob(newDob);
        const newProfile = {
            ...profile,
            dateOfBirth: dateOfBirth
        }
        setProfile(newProfile)
    }
    return(
        <>
            <div className="row">
                <div className="col-2">
                    <i className="bi bi-x-lg"
                       onClick={() => {
                           let path = `../profile`;
                           navigate(path);
                           }
                       } />
                </div>
                <div className="col-6">
                    <h3> Edit Profile</h3>
                </div>
                <div className="col-4">
                    <button className="btn rounded-pill btn-outline-dark float-end" onClick={
                        (event) => {updateProfileHandler(event);
                        let path = `../profile`;
                        navigate(path)
                        }}>Save</button>
                </div>
            </div>
            <div className="row">
                <img src={profile.bannerPicture} className="wd-banner"/>
                <div className="col-5">
                    <img src="#" className="wd-avatar"/>
                </div>
                <div className="col-4">
                </div>
                <div className="col-3">
                </div>
            </div>
            <div className="row">
                <p></p>
                <span className="border rounded">
                    <label> First Name: </label>
                    <input type="input" className="form-control" id="firstName"
                           value={firstName}
                           onChange={(event) => {
                               onFirstNameChange(event)}
                           }
                    />
                </span>
            </div>
            <div className="row">
                <p></p>
                <span className="border rounded">
                    <label> Last Name: </label>
                    <input type="input" className="form-control" id="lastName"
                           value={lastName}
                           onChange={(event) => {
                               onLastNameChange(event)}
                           }
                    />
                </span>
            </div>
            <div className="row">
                <p></p>
                <span className="border rounded">
                    <label> Bio: </label>
                    <input type="input" className="form-control" id="bio"
                           value={bio}
                           onChange={(event) => {
                               onBioChange(event)}
                           }
                    />
                </span>
            </div>
            <div className="row">
                <p></p>
                <span className="border rounded">
                    <label> Website: </label>
                    <input type="input" className="form-control" id="website"
                           value={website}
                           onChange={(event) => {
                               onWebsiteChange(event)}
                           }
                    />
                </span>
            </div>
            <div className="row">
                <p></p>
                <span className="border rounded">
                    <label> BirthDate: </label>
                    <input type="input" className="form-control" id="dateOfBirth"
                           value={dateOfBirth}
                           onChange={(event) => {
                               onBirthdateChange(event)}
                           }
                    />
                </span>
            </div>



        </>
    );
};
export default EditProfile;
