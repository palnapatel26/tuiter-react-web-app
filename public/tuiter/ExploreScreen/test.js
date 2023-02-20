import ExploreComponent from "./ExploreComponent.js";

/* eslint-env jquery */
const test = () => {
    $('#test').append(`${ExploreComponent()}`);
}

$(test)