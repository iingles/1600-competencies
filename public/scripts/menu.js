/**
 *
 *    Main Navigation Menu 
 * 
 */

// Grab the individual elements
const menuBtn = document.querySelector('.top-hamburger')
const menu = document.querySelector('.menu-items')
const items = menu.querySelectorAll('a')

// Add a click listener to the hamburger icon

menuBtn.addEventListener('click', evt => {
    menu.classList.toggle('show')
})

// Add click listeners to each of the links

items.forEach(el => {
    el.addEventListener('click', () => {
        if (!menu.classList.contains('show'))  return
    
        menu.classList.toggle('show')
    })
})

