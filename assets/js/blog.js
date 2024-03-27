const savedData = JSON.parse(localStorage.getItem(formData))


const backButton = document.getElementById('back-button')
const titleEl = document.querySelector('blog-title-text')
const contentEl = document.querySelector('blog-content-text')
const usernameEl = document.querySelector('blog-username-text')
const section = document.getElementById('container')


if (savedData) {
    const titleEl = document.createElement("h2");
    titleEl.textContent = formData.title;

    const contentEl = document.createElement('p');
    contentEl.textContent = formData.content;

    const usernameEl = document.createElement('p');
    usernameEl.textContent = `Posted by: ${formData.username}`;

    section.appendChild(titleEl);
    section.appendChild(contentEl);
    section.appendChild(usernameEl);

    

}
    





// backButton.addEventListener("click", function(){
//     window.location.href = 'http://127.0.0.1:5500/index.html'
// })


// function savedFormData() {
    

//     const savedData = JSON.parse(localStorage.getItem(formData))

    
//     blogTitle.innerText = savedData.title,
//     blogUsername.innerText = savedData.username,
//     blogContent.innerText = savedData.content
    

// }

// section.appendChild(savedFormData)














// const targetDiv = document.getElementById('target-element')

// create element
    // const p = document.createElement('p')

// append into DOM
    // targetDiv.appendChild(p)