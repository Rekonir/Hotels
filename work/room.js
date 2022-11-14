var LikeBox = document.getElementsByClassName('comment__like')[0]
var LikeValue = document.getElementsByClassName('comment__value')[0]


console.dir(LikeValue)

LikeBox.onclick = event => {
    if (LikeBox.classList == 'comment__like') {
        LikeValue.innerHTML = Number(LikeValue.innerHTML) + 1
    }
    else {
        LikeValue.innerHTML = Number(LikeValue.innerHTML) - 1
    }

    LikeBox.classList.toggle('comment__like_active')
    LikeValue.classList.toggle('comment__value_active')
}