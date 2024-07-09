// Get the login and register buttons
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

// Get the login and register modals
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');

// Add event listeners to the buttons
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// Add event listeners to the modal close buttons
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});