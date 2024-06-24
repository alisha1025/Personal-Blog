

// Function to toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  }
  
  // Function to get blog posts from localStorage
  function getBlogPosts() {
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    return posts;
  }
  
  // Function to save blog post to localStorage
  function saveBlogPost(post) {
    let posts = getBlogPosts();
    posts.push(post);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }
  
  // Function to clear form inputs
  function clearFormInputs() {
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  }
  
  // Function to display blog posts on the posts page
  function displayBlogPosts() {
    const posts = getBlogPosts();
    const postsList = document.getElementById('posts-list');
  
    postsList.innerHTML = ''; // Clear existing list
  
    posts.forEach((post, index) => {
      const postItem = document.createElement('div');
      postItem.classList.add('post-item');
      
      const title = document.createElement('h3');
      title.classList.add('post-title');
      title.textContent = post.title;
  
      const content = document.createElement('p');
      content.classList.add('post-content');
      content.textContent = post.content;
  
      const author = document.createElement('p');
      author.classList.add('post-author');
      author.textContent = `Author: ${post.username}`;
  
      postItem.appendChild(title);
      postItem.appendChild(content);
      postItem.appendChild(author);
  
      postsList.appendChild(postItem);
    });
  }
  
  // Function to initialize the posts page
  function initPostsPage() {
    displayBlogPosts();
  }
  
  // Function to initialize the landing page (form)
  function initFormPage() {
    const form = document.getElementById('blog-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please complete all fields before submitting.');
        return;
      }
  
      const newPost = {
        username: username,
        title: title,
        content: content
      };
  
      saveBlogPost(newPost);
      clearFormInputs();
      window.location.href = 'blog.html'; // Redirect to posts page
    });
  }
  
  // Event listener for light/dark mode toggle
  document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme();
  });
  
  