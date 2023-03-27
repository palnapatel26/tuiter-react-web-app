import React from "react";
import TuitList from "../tuits-list";
import WhatsHappening from "./whats-happening";
// updated

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;