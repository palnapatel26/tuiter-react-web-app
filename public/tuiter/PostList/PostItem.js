function PostItem(singlePost) {
    return(`
    <div class="container mb-8 padding-fat">
        <div class="row align-items-center mb-3">
            <div class="col-1">
                <img class="rounded-circle avatar1" width="48px" height="48px" src="${singlePost.avatarIcon}"/>
            </div>
            
            <div class="col-11">
                <span style="font-size: 15px">${singlePost.userName}</span><i class="fa fa-check-circle"></i> @ ${singlePost.handle} - ${singlePost.time}</br>
                <span style="color: white; font-size: 15px">${singlePost.title}</span>
            </div>
        </div>
        
        <div class="row align-items-center">
            <div class="col-1">
        
            </div>
            
            <div class="col-11">
                <img src="${singlePost.image}" width="600" height="300" style="border-radius: 25px">
                    <div class="row">
                        <div class="col"><i class="fa fa-heart"> ${singlePost.likes}</i> </div>
                        <div class="col"><i class="fa fa-reply"> ${singlePost.reposts}</i> </div>
                        <div class="col"><i class="fa fa-comment"> ${singlePost.comments}</i> </div>
                        <div class="col"><i class="fa fa-save"></i> </div>
                        <div class="col"> </div>
                    </div>
            </div>
        
        </div>
    </div>
    `)
}

export default PostItem