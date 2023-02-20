import PostSummaryListItem from "./PostSummaryListItem.js";
import post from "./post.js";
const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           ${post.map(each => {return (PostSummaryListItem(each))}).join('')}
           </ul>
`);
}

export default PostSummaryList;