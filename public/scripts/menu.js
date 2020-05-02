const menuBtn = document.querySelector('.top-hamburger')
const menu = document.querySelector('.menu-items')
const items = menu.querySelectorAll('a')

menuBtn.addEventListener('click', evt => {
    menu.classList.toggle('show')
})

items.forEach(el => {
    el.addEventListener('click', () => {
        if (!menu.classList.contains('show'))  return
    
        menu.classList.toggle('show')
    })
})

