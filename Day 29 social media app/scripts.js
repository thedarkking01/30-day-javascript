// User Authentication
let currentUser = null;

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login check (In a real application, you'd check against a database)
    if (username && password) {
        currentUser = { username: username };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showPostCreation();
    }
});

function showPostCreation() {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('post-creation-section').classList.remove('hidden');
    document.getElementById('posts-section').classList.remove('hidden');
}

// Post Creation
let posts = [];

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const content = document.getElementById('post-content').value;
    const imageFile = document.getElementById('post-image').files[0];
    const imageURL = imageFile ? URL.createObjectURL(imageFile) : null;

    const newPost = {
        username: currentUser.username,
        content: content,
        imageURL: imageURL,
        timestamp: new Date(),
        likes: 0,
        comments: []
    };

    posts.unshift(newPost);
    displayPosts();
    document.getElementById('post-form').reset();
});

// Display Posts
function displayPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.content}</p>
            ${post.imageURL ? `<img src="${post.imageURL}" alt="Post image">` : ''}
            <p>${post.timestamp.toLocaleString()}</p>
            <div class="post-buttons">
                <span class="like-comment">Likes: ${post.likes}</span>
                <button onclick="likePost(${index})">Like</button>
                <button onclick="promptComment(${index})">Comment</button>
            </div>
            <div id="comments-${index}">
                ${post.comments.map(comment => `<p><strong>${comment.username}:</strong> ${comment.text}</p>`).join('')}
            </div>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Post Interactions
function likePost(index) {
    posts[index].likes++;
    displayPosts();
}

function promptComment(index) {
    const commentText = prompt("Enter your comment:");
    if (commentText) {
        posts[index].comments.push({ username: currentUser.username, text: commentText });
        displayPosts();
    }
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
    const savedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (savedUser) {
        currentUser = savedUser;
        showPostCreation();
    }
});
