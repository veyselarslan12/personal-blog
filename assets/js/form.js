const form = document.getElementById('myForm')
const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')
const submitButton = document.getElementById('form-submit')

submitButton.addEventListener('click', function(event) {
    event.preventDefault() // prevent the default submit

    const formData = {
        username: username.value,
        title: title.value,
        content: content.value
    }

     // save data to Local Storage
    localStorage.setItem('formData',JSON.stringify(formData)) 
    // Clear the form
    form.reset() 

})








