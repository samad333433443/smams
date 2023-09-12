mobileMenu = document.getElementById('hamburger-menu')
navBar = document.getElementById('navbar')

mobileMenu.addEventListener('click', function() {
    if (navBar.style.display === '') {
        navBar.style.display = 'flex'
    } else {
        navBar.style.display = ''
    }
    
})