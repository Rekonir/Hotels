var LikeBox0 = document.getElementsByClassName('comment__like')[0]
var LikeValue0 = document.getElementsByClassName('comment__value')[0]


LikeBox0.onclick = event => {
    if (LikeBox0.classList == 'comment__like') {
        LikeValue0.innerHTML = Number(LikeValue0.innerHTML) + 1
    }
    else {
        LikeValue0.innerHTML = Number(LikeValue0.innerHTML) - 1
    }

    LikeBox0.classList.toggle('comment__like_active')
    LikeValue0.classList.toggle('comment__value_active')
}

var LikeBox1 = document.getElementsByClassName('comment__like')[1]
var LikeValue1 = document.getElementsByClassName('comment__value')[1]

LikeBox1.onclick = event => {
    if (LikeBox1.classList == 'comment__like') {
        LikeValue1.innerHTML = Number(LikeValue1.innerHTML) + 1
    }
    else {
        LikeValue1.innerHTML = Number(LikeValue1.innerHTML) - 1
    }

    LikeBox1.classList.toggle('comment__like_active')
    LikeValue1.classList.toggle('comment__value_active')
}

var btn = document.getElementsByClassName('menu-btn')[0]
var arrow = document.getElementsByClassName('btn-arrow')[0]
var box = document.getElementsByClassName('box')[0]

btn.onclick = event => {
    btn.classList.toggle('menu-btn_active')
    arrow.classList.toggle('btn-arrow_active')
    box.classList.toggle('box_active')
}

var OpText = document.getElementsByClassName('opinion__inner')
var circle = document.getElementsByClassName('opinion__circle')[0]
let i = 0
OpText[i].style.opacity = '1'

let timer = setInterval(() => {
    OpText[i].style.opacity = '0'
    if (i >= OpText.length - 1) {
        i = 0
        OpText[i].style.opacity = '1'
    }
    else {
        i = i + 1
        OpText[i].style.opacity = '1'
    }
}, 5000)

var Sum0 = 100
var Pr0 = Sum0 / Sum0 * 100
var Sum1 = 50
var Pr1 = Sum1 / Sum0 * 100
var Sum2 = 30
var Pr2 = Sum2 / Sum0 * 100
var Sum3 = 18
var Pr3 = Sum3 / Sum0 * 100
var Sum4 = 2
var Pr4 = Sum4 / Sum0 * 100

OpText[0].innerHTML = `Всего отзывов: ${Sum0}`
OpText[1].innerHTML = `отзывов: ${Sum1}`
OpText[2].innerHTML = `отзывов: ${Sum2}`
OpText[3].innerHTML = `отзывов: ${Sum3}`
OpText[4].innerHTML = `отзывов: ${Sum4}`

circle.style.background = `conic-gradient(#ffe39c 0% ${Pr1}%, #6fcf97 ${Pr1}% ${Pr1+Pr2}%, #bc9cff ${Pr1+Pr2}% ${Pr1+Pr2+Pr3}%, #919191 ${Pr1+Pr2+Pr3}% ${Pr0}%)`


