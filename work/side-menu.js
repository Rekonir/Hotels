const SideMenu = document.getElementsByClassName('side-menu')[0]
const Nomera = document.getElementsByClassName('nomera')[0]
const BtnAnimation = document.getElementsByClassName('menu-btn__animation')[0]
const Page = document.getElementsByClassName('page__number')[0]
const MenuBtn = document.getElementsByClassName('menu-btn')[0]


MenuBtn.onclick = (event) => {
    SideMenu.classList.toggle('side-menu_active')
    Nomera.classList.toggle('nomera_active')
    BtnAnimation.classList.toggle('menu-btn__animation_active')
    Page.classList.toggle('page__number_active')
}

// поинтеры для обложки номеров на странице//

const p1 = document.getElementsByClassName('oblozhka__pointer1')[0]
const p2 = document.getElementsByClassName('oblozhka__pointer2')[0]
const p3 = document.getElementsByClassName('oblozhka__pointer3')[0]
const s1 = document.getElementsByClassName('oblozhka__slider1')[0]
const s2 = document.getElementsByClassName('oblozhka__slider2')[0]
const s3 = document.getElementsByClassName('oblozhka__slider3')[0]
const s0 = document.getElementsByClassName('oblozhka__slider')[0]

s1.addEventListener('mouseover', event => {
    p1.style.background = 'white',
        p2.style.background = 'none',
        p3.style.background = 'none'
})
s2.addEventListener('mouseover', event => {
    p2.style.background = 'white',
        p1.style.background = 'none',
        p3.style.background = 'none'
})
s3.addEventListener('mouseover', event => {
    p3.style.background = 'white',
        p1.style.background = 'none',
        p2.style.background = 'none'
})
s0.addEventListener('mouseout', event => {
    p1.style.background = 'white',
        p2.style.background = 'none',
        p3.style.background = 'none'
})
