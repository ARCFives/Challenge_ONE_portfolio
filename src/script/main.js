const menuToggle = document.querySelector('.menuToggle')
const menuOpen = document.querySelector('.menu__navigation')
let openMenu = false

function toggleMenu() {
  menuOpen.classList.toggle('menu__navigation--open')
  menuToggle.classList.toggle('expand')
}

menuToggle.addEventListener('click', toggleMenu)