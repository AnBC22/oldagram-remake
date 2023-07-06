const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsContainerEl = document.getElementById("posts-container")

function render(arr) {
    
    let htmlToRender = ''
    
    for(let obj of posts) {
        
        htmlToRender +=    
`<section class="post">
    <div class="user-info">
        <img src="${obj.avatar}" class="user-img">
        <div>
            <p class="bold">${obj.name}</p>
            <p>${obj.location}</p>
        </div>
    </div>
    <img src="${obj.post}" class="user-photo">
    <div class="icons-bar">
        <img class="icon" id="${obj.id}" src="images/icon-heart.png">
        <img class="icon" src="images/icon-comment.png">
        <img class="icon" src="images/icon-dm.png">
    </div>
    <p class="bold">${obj.likes} likes</p>
    <p class="comment"><span class="bold">${obj.username}</span> ${obj.comment}</p>
</section>  `
    }
    postsContainerEl.innerHTML = htmlToRender;
}

render(posts)
