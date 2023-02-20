import WhoToFollowList from "./index.js";

/* eslint-env jquery */
const test = () => {
    $('#test').append(`${WhoToFollowList()}`);
}

$(test)