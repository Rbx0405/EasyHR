// Hamburger Menu
menuActive = false


const hamMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
hamMenu.addEventListener('click',()=>{
    menuActive = !menuActive;
    hamMenu.classList.toggle('active')
    menu.classList.toggle('active')
})


document.addEventListener('DOMContentLoaded', () => {
    let lastScrollTop = 0;
    const nav = document.querySelector('nav'); // Adjust selector as needed

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if ((scrollTop > lastScrollTop)&&!menuActive) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)'; // Hide the navbar
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)'; // Show the navbar
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});


function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Form submission function
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you shortly.');
        // You can replace this alert with actual form submission logic
    } else {
        alert('Please fill in all fields.');
    }
}

// Language toggle function
function toggleLanguage() {
    const language = document.getElementById('language-select').value;
    alert('Language changed to: ' + language);
    // Here, you can add logic to dynamically change the language of the website content
}

//theme js

darkTheme = true
customTheme = false


const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');
const themeButton = document.querySelector('.theme');



const mobileThemeButton = document.querySelector('.menu .theme');
const sunM = document.querySelector('.menu .sun');
const moonM = document.querySelector('.menu .moon');


themeButton.addEventListener('click',()=>{
    darkTheme = !darkTheme;
    customTheme = false
    console.log(darkTheme)


    if (darkTheme&&!customTheme) {
        sun.classList.add('hide-sun');
        sun.classList.remove('show-sun');
        moon.classList.add('show-moon');
        moon.classList.remove('hide-moon');


        sunM.classList.add('hide-sun');
        sunM.classList.remove('show-sun');
        moonM.classList.add('show-moon');
        moonM.classList.remove('hide-moon');
        document.body.classList.remove('light-theme');
        document.body.classList.remove('custom-theme');
    } else {
        sun.classList.add('show-sun');
        sun.classList.remove('hide-sun');
        moon.classList.add('hide-moon');
        moon.classList.remove('show-moon');


        sunM.classList.add('show-sun');
        sunM.classList.remove('hide-sun');
        moonM.classList.add('hide-moon');
        moonM.classList.remove('show-moon');
        document.body.classList.add('light-theme');
        document.body.classList.remove('custom-theme');
    }
});





mobileThemeButton.addEventListener('click',()=>{
    darkTheme = !darkTheme;
    console.log(darkTheme)


    if (darkTheme) {
        sunM.classList.add('hide-sun');
        sunM.classList.remove('show-sun');
        moonM.classList.add('show-moon');
        moonM.classList.remove('hide-moon');
        


        sun.classList.add('hide-sun');
        sun.classList.remove('show-sun');
        moon.classList.add('show-moon');
        moon.classList.remove('hide-moon');
        document.body.classList.remove('light-theme');
        document.body.classList.remove('custom-theme');
    } else {
        sunM.classList.add('show-sun');
        sunM.classList.remove('hide-sun');
        moonM.classList.add('hide-moon');
        moonM.classList.remove('show-moon');


        sun.classList.add('show-sun');
        sun.classList.remove('hide-sun');
        moon.classList.add('hide-moon');
        moon.classList.remove('show-moon');
        document.body.classList.add('light-theme');
        document.body.classList.remove('custom-theme');
    }
});

if (darkTheme) {
    sun.classList.add('hide-sun');
    moon.classList.add('show-moon');
} else {
    sun.classList.add('show-sun');
    moon.classList.add('hide-moon');
}

/*
// Function to update CSS variables with color values
function updateCustomTheme() {
    // Get color values from inputs
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    const color3 = document.getElementById('color3').value;
    const color4 = document.getElementById('color4').value;
    const color5 = document.getElementById('color5').value;
    
    // Apply colors to CSS variables
    document.documentElement.style.setProperty('--background-color', color1);
    document.documentElement.style.setProperty('--nav-color', color2);
    document.documentElement.style.setProperty('--heading-color', color3);
    document.documentElement.style.setProperty('--text-color', color4);
    document.documentElement.style.setProperty('--menu-color', color5);
}

// Event listener for the button click
document.getElementById('applyThemeBtn').addEventListener('click', updateCustomTheme);
*/

document.getElementById('color1').addEventListener('input', function() {
    document.body.classList.add('custom-theme');
    document.body.classList.remove('light-theme');
    document.documentElement.style.setProperty('--custom-color1', this.value);
    customTheme=true
});

document.getElementById('color2').addEventListener('input', function() {
    document.body.classList.add('custom-theme');
    document.body.classList.remove('light-theme');
    document.documentElement.style.setProperty('--custom-color2', this.value);
    customTheme=true
});

document.getElementById('color3').addEventListener('input', function() {
    document.body.classList.add('custom-theme');
    document.body.classList.remove('light-theme');
    document.documentElement.style.setProperty('--custom-color3', this.value);
    customTheme=true
});

document.getElementById('color4').addEventListener('input', function() {
    document.body.classList.add('custom-theme');
    document.body.classList.remove('light-theme');
    document.documentElement.style.setProperty('--custom-color4', this.value);
    customTheme=true
});

document.getElementById('color5').addEventListener('input', function() {
    document.body.classList.add('custom-theme');
    document.body.classList.remove('light-theme');
    document.documentElement.style.setProperty('--custom-color5', this.value);
    customTheme=true
});