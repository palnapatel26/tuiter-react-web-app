function PostSummaryListItem(post) {
    return(`
    <div class="container mb-3">
        <div class="row align-items-center">
            <div class="col-10">
                <span style="font-size: 15px">${post.topic}</span></br>
                <span style="color: white; font-size: 15px; font-weight: bold">${post.userName}</span><span style="font-size: 15px"> - ${post.time}</span></br>
                <span style="color: white; font-size: 15px">${post.title}</span>
            </div>
            <div class="col-2">
                <img class="rounded-3" width="80px" height="80px" src="${post.image}">
            </div>
        </div>
    </div>
    `)
}

export default PostSummaryListItem