//Get the first element in the array (the toggle button)
const toggleButton = document.getElementsByClassName('navbar__toggle-button')[0]

//Get the navbar links
const navbarLinks = document.getElementsByClassName('navbar__links')[0]

//If the active class doesn't exist then add it, if it does exist then remove it
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})