import PostList from "./PostList.js";

/* eslint-env jquery */
const test = () => {
    $('#test').append(`${PostList()}`);
}

$(test)