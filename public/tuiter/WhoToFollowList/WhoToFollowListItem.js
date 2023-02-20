function WhoToFollowListItem (who) {
    return (`
    <div class="container mb-3">
    <div class="row">
                <div class="col-2">
                    <img class="rounded-circle" alt="avatar1" width="48px" height="48px" src="${who.avatarIcon}">
                </div>
                <div class="col-7">
                    <span class="wd-author"> ${who.userName}<i class="fas fa-check-circle "></i></span></br>
                    <span>@${who.handle}</span>
                </div>
                <div class="col-3">
                    <a href="#" class="btn btn-primary btn-block rounded-pill">Follow</a>
                </div>
            </div>
    </div>
    `)
}

export default WhoToFollowListItem
