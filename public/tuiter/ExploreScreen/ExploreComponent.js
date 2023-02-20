import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-11 mb-1">
                    <form>
                        <div class="form-group">
                            <input class="form-control rounded-pill" placeholder="Search Tuiter"/>
                        </div>
                    </form>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html"> <i class="fa fa-cog fa-2x wd-gear-icon"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
            <nav class="navbar">
                    <a class="nav-item nav-link active" href="#">For you</a>
                    <a class="nav-item nav-link" href="#">Trending</a>
                    <a class="nav-item nav-link" href="#">COVID-19</a>
                    <a class="nav-item nav-link" href="#">News</a>
                    <a class="nav-item nav-link" href="#">Sports</a>
                    <a class="nav-item nav-link" href="#">Entertainment</a>
                </nav>
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           <div class="container mb-3">
           <img src="../../images/spaceship.jpg"/>
           
            </div>
            
           ${PostSummaryList()}
`);
}
export default ExploreComponent;
