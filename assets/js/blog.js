function savedFormData() {
    const blogTitle = document.querySelector('blog-title-text')
    const blogContent = document.querySelector('blog-content-text')
    const blogUsername = document.querySelector('blog-username-text')

    const savedData = JSON.parse(localStorage.getItem(formData))

    if  (savedData !== null) {
        blogTitle.innerText = savedData.title,
        blogUsername.innerText = savedData.username,
        blogContent.innerText = savedData.content
    }

}













// const targetDiv = document.getElementById('target-element')

// create element
    // const p = document.createElement('p')

// append into DOM
    // targetDiv.appendChild(p)