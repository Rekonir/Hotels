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

btn.onclick=event=>{
    btn.classList.toggle('menu-btn_active')
    arrow.classList.toggle('btn-arrow_active')
    box.classList.toggle('box_active')
}
