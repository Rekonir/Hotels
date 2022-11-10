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
