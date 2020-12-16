







// To open / close the user sign-in modal 

const signInTab = document.getElementsByClassName('sign-in-tab')[0];

const signInInputDiv = document.getElementsByClassName('signin-input-div')[0];

const closeSigninForm = document.getElementsByClassName('close-signin-form-modal')[0];


// To close the user sign-in modal & to open the sign up modal using signup button

const userSignupButton = document.getElementsByClassName('user-signup-button')[0];


// To open the sign up modal

const signUpInputDiv = document.getElementsByClassName('signup-input-div')[0];


// To close the sign up modal

const closeSignUpForm = document.getElementsByClassName('close-signup-form-modal')[0];


// To open / close the user-details modal tab using the user icon 

const userIcon = document.getElementsByClassName('fa-user')[0];

const onlineModal = document.getElementsByClassName('online-modal')[0];



 // Function to open the user sign-in modal

signInTab.addEventListener('click', () => {
    signInInputDiv.classList.add('signin-input-div-show')
});

// Function to close the user sign-in modal

closeSigninForm.addEventListener('click', () => {
    signInInputDiv.classList.remove('signin-input-div-show')
});



// Functions to close the user sign-in modal & open user sign-up modal (when signup button is clicked)

userSignupButton.addEventListener('click', () => {
    signInInputDiv.classList.remove('signin-input-div-show')
});


userSignupButton.addEventListener('click', () => {
    signUpInputDiv.classList.add('signup-input-div-show')

});

// Function to close the user sign-up modal

closeSignUpForm.addEventListener('click', () => {
    signUpInputDiv.classList.remove('signup-input-div-show')
});

// Function to open the modal when user has signed in

userIcon.addEventListener('click', () => {
    onlineModal.classList.toggle('online-modal-show')
});