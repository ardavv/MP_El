// DOM adalah Document Object Model
// button hamburger menu
const menuIcon = document.getElementById("menu-icon")

// list navigasi
const menuList = document.getElementById("menu-list")

// fungsinya
menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('flex');
})