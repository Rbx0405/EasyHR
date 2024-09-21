const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');
const toggle = document.getElementById('toggle');
const toggleBack = document.getElementById('toggle-back');

toggle.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
});

toggleBack.addEventListener('click', () => {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});