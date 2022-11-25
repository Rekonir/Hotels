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

var uslBTN = document.getElementsByClassName('usl__btn')[0]
var sogBTN = document.getElementsByClassName('sog__btn')[0]
var uslBOX =document.getElementsByClassName('usl__box')[0]
var sogBOX = document.getElementsByClassName('sog__box')[0]

uslBTN.onclick = event=> {
    uslBOX.classList.toggle('usl__box_active')
}
sogBTN.onclick = event=> {
    sogBOX.classList.toggle('sog__box_active')
}
