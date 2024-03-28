const savedData = JSON.parse(localStorage.getItem('formData')) || []; // Get data from local storage

const backButton = document.getElementById('back-button'); // Getting the back button element
const titleEl = document.querySelector('blog-title-text'); // Getting the title element
const contentEl = document.querySelector('blog-content-text'); // Getting the content element
const usernameEl = document.querySelector('blog-username-text'); // Getting the username element
const section = document.getElementById('container'); // Getting the section element

//  Function to go back to home page
backButton.addEventListener('click', function(event){
    event.preventDefault(); // Prevent the default submission of the form
    window.location.href = 'http://127.0.0.1:5500/index.html'; // Home page url 
})

// Making a loop for every blog post in the array and creating elements dynamically
for (let i = 0; i  < savedData.length; i++) {
    const post = savedData [i]
    
    const div = document.createElement('div');
    div.setAttribute('class', 'blog-post');

    const titleEl = document.createElement('h2');
    titleEl.classList.add('blog-title'); // Added class list for css 
    titleEl.textContent = post.title;

    const contentEl = document.createElement('p');
    contentEl.classList.add('blog-content'); // Added class list for css 
    contentEl.textContent = post.content;

    const usernameEl = document.createElement('p');
    usernameEl.classList.add('blog-username'); // Added class list for css 
    usernameEl.textContent = `Posted by: ${post.username}`;

    // Appending 'div' element to page
    div.appendChild(titleEl);
    div.appendChild(contentEl);
    div.appendChild(usernameEl);

    // Appending 'section' element to page
    section.appendChild(div);
    
}

