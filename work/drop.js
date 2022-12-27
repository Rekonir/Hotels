var drop = document.getElementsByClassName('gosty__drop')[0]
var inp = document.getElementsByClassName('gosty')[0]
var cl = document.getElementsByClassName('gosty__close')[0]
inp.onclick = (event) => {
    if (drop.style.display === "none") {
        drop.style.display = "flex"
    }
    else {
        drop.style.display = "none"
    }
}
cl.onclick = (event) => {
    if (drop.style.display = "flex") {
        drop.style.display = "none"
    }
}

const mvzr = document.getElementById('mvzr')
var vzr = Number(document.getElementById('vzr').textContent)
const pvzr = document.getElementById('pvzr')
mvzr.onclick = (event) => {
    if (vzr > 0) {
        vzr = vzr - 1
        document.getElementById('vzr').textContent = vzr
    }
    else {
        document.getElementById('vzr').textContent = 0
    }
}
pvzr.onclick = (event) => {
    vzr = vzr + 1
    document.getElementById('vzr').textContent = vzr
}

const mdety = document.getElementById('mdety')
var dety = Number(document.getElementById('dety').textContent)
const pdety = document.getElementById('pdety')
mdety.onclick = (event) => {
    if (dety > 0) {
        dety = dety - 1
        document.getElementById('dety').textContent = dety
    }
    else {
        document.getElementById('dety').textContent = 0
    }
}
pdety.onclick = (event) => {
    dety = dety + 1
    document.getElementById('dety').textContent = dety
}

const mbaby = document.getElementById('mbaby')
var baby = Number(document.getElementById('baby').textContent)
const pbaby = document.getElementById('pbaby')
mbaby.onclick = (event) => {
    if (baby > 0) {
        baby = baby - 1
        document.getElementById('baby').textContent = baby
    }
    else {
        document.getElementById('baby').textContent = 0
    }
}
pbaby.onclick = (event) => {
    baby = baby + 1
    document.getElementById('baby').textContent = baby
}

const dropG = document.querySelector('.gosty__drop')

dropG.onclick = (event) => {
    if (vzr || dety > 0, baby == 0) {
        inp.placeholder = `Мест: ${vzr + dety}`
    }
    else if (vzr || dety > 0, baby > 0) {
        inp.placeholder = `Мест: ${vzr + dety} и младенцев: ${baby}`
    }
}

// Удобства в Page.html//

var dropU = document.getElementsByClassName('udob__drop')[0]
var inpU = document.getElementsByClassName('udob')[0]
var clU = document.getElementsByClassName('udob__close')[0]

inpU.onclick = (event) => {
    if (dropU.style.display === "none") {
        dropU.style.display = "flex"
    }
    else {
        dropU.style.display = "none"
    }
}

clU.onclick = (event) => {
    if (dropU.style.display = "flex") {
        dropU.style.display = "none"
    }
}

const msp = document.getElementById('msp')
var sp = Number(document.getElementById('sp').textContent)
const psp = document.getElementById('psp')
msp.onclick = (event) => {
    if (sp > 0) {
        sp = sp - 1
        document.getElementById('sp').textContent = sp
    }
    else {
        document.getElementById('sp').textContent = 0
    }
}
psp.onclick = (event) => {
    sp = sp + 1
    document.getElementById('sp').textContent = sp
}

const mbed = document.getElementById('mbed')
var bed = Number(document.getElementById('bed').textContent)
const pbed = document.getElementById('pbed')
mbed.onclick = (event) => {
    if (bed > 0) {
        bed = bed - 1
        document.getElementById('bed').textContent = bed
    }
    else {
        document.getElementById('bed').textContent = 0
    }
}
pbed.onclick = (event) => {
    bed = bed + 1
    document.getElementById('bed').textContent = bed
}

const mbath = document.getElementById('mbath')
var bath = Number(document.getElementById('bath').textContent)
const pbath = document.getElementById('pbath')
mbath.onclick = (event) => {
    if (bath > 0) {
        bath = bath - 1
        document.getElementById('bath').textContent = bath
    }
    else {
        document.getElementById('bath').textContent = 0
    }
}
pbath.onclick = (event) => {
    bath = bath + 1
    document.getElementById('bath').textContent = bath
}

const Udob = document.querySelector('.udob__drop')

Udob.onclick = (event) => {
    inpU.placeholder = `Сп.: ${sp}, Кр.: ${bed}, Ван.: ${bath}`
}