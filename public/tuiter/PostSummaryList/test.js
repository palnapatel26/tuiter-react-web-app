import PostSummaryList from "./index.js";

const test = () => {
    $('#test').append(`${PostSummaryList()}`);
}

$(test)