import PostItem from "./PostItem.js";
import singlePost from "./singlePost.js"

const PostList = () => {
    return (`
           <ul class="list-group">
           ${singlePost.map(each => {return (PostItem(each))}).join('')}
           </ul>
`);
}

export default PostList;