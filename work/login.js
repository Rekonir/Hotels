var login = document.getElementsByClassName('login__box')[0]
var reg = document.getElementsByClassName('registration')[0]
var loginBtn1 = document.getElementsByClassName('login__in')[0]
var loginBtn2 = document.getElementsByClassName('btn__already')[0]
var regBtn1 = document.getElementsByClassName('login__log')[0]
var regBtn2 = document.getElementsByClassName('btn__not')[0]

loginBtn1.onclick = event => {
    login.classList.toggle('login__box_active')
    if (reg.classList[1] == 'registration_active') {
        reg.classList.toggle('registration_active')
    }
}
loginBtn2.onclick = event => {
    login.classList.toggle('login__box_active')
    if (reg.classList[1] == 'registration_active') {
        reg.classList.toggle('registration_active')
    }
}


regBtn1.onclick = event => {
    reg.classList.toggle('registration_active')
    if (login.classList[1] == 'login__box_active') {
        login.classList.toggle('login__box_active')
    }
}
regBtn2.onclick = event => {
    reg.classList.toggle('registration_active')
    if (login.classList[1] == 'login__box_active') {
        login.classList.toggle('login__box_active')
    }
}

var usl = document.getElementsByClassName('uslugi')[0]
//var sog = documet.getElementsByClassName('sogl')[0]
var uslBtn = document.getElementsByClassName('usl__btn')[0]
var sogBtn = document.getElementsByClassName('sogl__btn')[0]

uslBtn.onclick=event=>{
    usl.classList.toggle('uslugi_active')
    console.dir(usl)
}
// sogBtn.onclick=event=>{
//     sog.classList.toggle('sogl_active')
// }