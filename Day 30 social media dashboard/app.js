document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (username && email && password) {
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert('Registration successful!');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user && user.username === username && user.password === password) {
        alert('Login successful!');
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        displayUserProfile();
    } else {
        alert('Invalid username or password');
    }
});

function displayUserProfile() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    
    if (loggedInUser) {
        const profileHtml = `
            <h3>${loggedInUser.username}</h3>
            <p>${loggedInUser.email}</p>
            <button id="logout-button">Logout</button>
        `;
        document.getElementById('user-profile').innerHTML = profileHtml;
        document.getElementById('logout-button').addEventListener('click', function() {
            sessionStorage.removeItem('loggedInUser');
            location.reload();
        });
    }
}

let posts = [];

document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const content = document.getElementById('post-content').value;
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
    
    if (loggedInUser && content) {
        const newPost = { username: loggedInUser.username, content, likes: 0, comments: [] };
        posts.push(newPost);
        document.getElementById('post-content').value = '';
        displayPosts();
    } else {
        alert('Please login to create a post.');
    }
});

function displayPosts() {
    const postsHtml = posts.map(post => `
        <div class="post">
            <h4>${post.username}</h4>
            <p>${post.content}</p>
            <button class="like-button">Like (${post.likes})</button>
            <button class="comment-button">Comment</button>
        </div>
    `).join('');
    
    document.querySelector('.posts').innerHTML = postsHtml;
}

document.querySelector('.posts').addEventListener('click', function(event) {
    if (event.target.classList.contains('like-button')) {
        const postIndex = Array.from(document.querySelectorAll('.like-button')).indexOf(event.target);
        posts[postIndex].likes++;
        displayPosts();
        addNotification(`${posts[postIndex].username}'s post was liked!`);
    } else if (event.target.classList.contains('comment-button')) {
        const comment = prompt('Enter your comment:');
        if (comment) {
            const postIndex = Array.from(document.querySelectorAll('.comment-button')).indexOf(event.target);
            posts[postIndex].comments.push(comment);
            displayPosts();
            addNotification(`${posts[postIndex].username} received a comment!`);
        }
    }
});

function addNotification(message) {
    const notificationList = document.getElementById('notification-list');
    const notificationItem = document.createElement('li');
    notificationItem.textContent = message;
    notificationList.appendChild(notificationItem);
}

displayUserProfile();
