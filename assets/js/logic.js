const currentTheme = localStorage.getItem('theme'); // Getting the theme from Local Storage
document.body.classList.add(currentTheme);


let isLightMode = true; // Initial mode is light mode

const modeToggle = document.getElementById('togglebtn'); //  Get the toggle button element

//  Adding event listener to change themes when clicked on the toggle button with a function that changes the class of body and sets the value 
function toggleMode() {
    isLightMode = !isLightMode; // Toggle the mode
    document.body.classList.toggle('dark-mode', !isLightMode); 
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem('theme','dark-mode');
    } else {
        localStorage.setItem('theme', 'light-mode');
    }
    
   
} 

modeToggle.addEventListener('click', toggleMode); 

