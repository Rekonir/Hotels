var f = document.getElementsByClassName('fon')[0]

let i = 1
let timerFon = setInterval(() => {
    if (i == 1) {
        f.style.backgroundImage = "url(../file/Fon2.png)"
        i=i+1
    }
    else{
        f.style.backgroundImage = "url(../file/Fon1.png)"
        i=1
    }
    
}, 5000)