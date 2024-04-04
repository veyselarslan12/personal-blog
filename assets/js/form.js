const form = document.getElementById('myForm'); //  Getting the form element
const username = document.getElementById('username'); // Getting the username element
const title = document.getElementById('title'); // Getting the title element
const content = document.getElementById('content'); // Getting the content element
const submitButton = document.getElementById('form-submit'); // Getting the submit button element


const savedData = JSON.parse(localStorage.getItem('formData')) || []; //  Getting data from local storage 

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default submission of the form

    // Check if any input field is empty
    if (username.value.trim() === '' || title.value.trim() === '' || content.value.trim() === '') {
        alert('Please fill in all the blanks!');
        return; // Don't proceed further if any field is empty
    }

    // Create a new object for the current user's data and push it to our array
    const formData = {
        username: username.value,
        title: title.value,
        content: content.value
    }

    savedData.push(formData);



     // Save data to Local Storage
    localStorage.setItem('formData',JSON.stringify(savedData)); 
    
    window.location.href = './blog.html'; // Blog page url
    // Clear the form
    form.reset();

})








