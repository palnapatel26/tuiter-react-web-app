
const NavigationSidebar = (highlight = 'Home') => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item" href="#">
       <i class="fa fa-home fa-1x"></i> Home</a>
     <a class="list-group-item active" href="../exploreOld/index.html">
       <i class="fa fa-hashtag fa-1x"></i> Explore</a>
     <a class="list-group-item"" href="#">
       <i class="fa fa-bell fa-1x"></i> Notifications</a>
     <a class="list-group-item" href="#">
       <i class="fa fa-envelope"></i> Messages</a>
     <a class="list-group-item" href="#">
       <i class="fas fa-bookmark fa-1x"></i> Bookmarks</a>
     <a class="list-group-item" href="#">
       <i class="fas fa-list fa-1x"></i> Lists</a>
     <a class="list-group-item" href="#">
       <i class="fas fa-user fa-1x"></i> Profile</a>
     <a class="list-group-item" href="#">
       <i class="fas fa fa-ellipsis-h 1x"></i> More</a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;