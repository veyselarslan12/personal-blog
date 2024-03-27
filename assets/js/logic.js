let isLightMode = true; // Initial mode is light mode

const modeToggle = document.getElementById('togglebtn'); //  Get the toggle button element

function toggleMode() {
    isLightMode = !isLightMode; // Toggle the mode
    document.body.classList.toggle('dark-mode', !isLightMode); // Toggle dark mode class based on the mode
} //  Add event listener to call toggleMode function when clicked

modeToggle.addEventListener('click', toggleMode); 



// const darkModeToggle = document.getElementById('toggleBtn');
// const body = document.body;

// darkModeToggle.addEventListener('click', function (){
//     body.classList.toggle('dark-mode');
// })

// // Add event listener to the image element
// document.getElementById('modeToggle').addEventListener('click', function() {
//     // Toggle a class on the body to switch between light and dark mode
//     document.body.classList.toggle('dark-mode');
// });



// const modeToggle = document.getElementById('togglebtn')
// const body = document.body

// // Add event listener to a parent element
// document.body.addEventListener('click', function(event) {
//     // Check if the clicked element is the button for toggling modes
//     if (event.target.id === 'modeToggle') {
//         // Toggle a class on the body to switch between light and dark mode
//         document.body.classList.toggle('dark-mode');
//     }
// });

