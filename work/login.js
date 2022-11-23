var login = document.getElementsByClassName('login__box')[0]
var reg = document.getElementsByClassName('registration')[0]
var loginBtn1 = document.getElementsByClassName('login__in')[0]
var loginBtn2 = document.getElementsByClassName('btn__already')[0]
var regBtn1 = document.getElementsByClassName('login__log')[0]
var regBtn2 = document.getElementsByClassName('btn__not')[0]

alert("Hello");

loginBtn1.onclick = event => {
    login.classList.toggle('login__box_active')
}
loginBtn2.onclick = event => {
    login.classList.toggle('login__box_active')
}

regBtn1.onclick = event => {
    reg.classList.toggle('registration_active')
}
regBtn2.onclick = event => {
    reg.classList.toggle('registration_active')
}
