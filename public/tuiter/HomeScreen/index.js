import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js";

/* eslint-env jquery */
function homeComponent() {
    $('#wd-home').append(`
  <div class="row mt-2">
   <div class="col-2">
    ${NavigationSidebar('Home')}

   </div>
   <div class="col-10">
   ${PostList()}
   </div>

  </div>
   `);
}
$(homeComponent);