function NavigationSidebar(highlight = '') {
    const items = [
        {icon: 'fa fa-home fa-1x', title: 'Home', link: '../HomeScreen/index.html'},
        {icon: 'fa fa-hashtag fa-1x', title: 'Explore', link: '../explore/index.html'},
        {icon: 'fa fa-bell fa-1x', title: 'Notifications', link: '#'},
        {icon: 'fa fa-envelope', title: 'Messages', link: '#'},
        {icon: 'fas fa-bookmark fa-1x', title: 'Bookmarks', link: '#'},
        {icon: 'fas fa-list fa-1x', title: 'Lists', link: '#'},
        {icon: 'fas fa-user fa-1x', title: 'Profiles', link: '#'},
        {icon: 'fas fa fa-ellipsis-h 1x', title: 'More', link: '#'},
    ]
    return(`
    <div class="list-group">
    <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
    ${
        items.map(item => 
            `<a class="list-group-item ${item.title === highlight ? 'active' : ''}" href="${item.link}">
        <i class="${item.icon}"></i> ${item.title}</a>`).join('')
        
    }
    </div>
    <div class="d-grid mt-2">
        <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet</a>
    </div>
    `)
}

export default NavigationSidebar;