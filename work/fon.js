var fon = document.getElementsByClassName('fon')[0]
console.dir(fon.style)

let i=1
fon.style.BackgroundImage = 'url(../file/Fon2.png)'

// let timer = setInterval(() => {
//     fon.style.BackgroundImage = `url(../file/Fon${i}.png)`
//     i=i+1
//     if (i>=2){
//         i=1
//     }
// }, 1000)