const form = document.getElementById('myForm')
const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
const submitButton = document.getElementById('form-submit')

const savedData = JSON.parse(localStorage.getItem('formData')) || []

submitButton.addEventListener('click', function(event) {
    event.preventDefault() // prevent the default submit

    const formData = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    savedData.push(formData)



     // save data to Local Storage
    localStorage.setItem('formData',JSON.stringify(savedData)) 
    
    window.location.href = 'http://127.0.0.1:5500/blog.html';
    // Clear the form
    form.reset() 

})

// submitButton.addEventListener('click', function (){
//     window.location.href = 'http://127.0.0.1:5500/blog.html';
// })






