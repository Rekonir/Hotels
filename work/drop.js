const drop = document.getElementsByClassName('gosty__drop')[0]
const inp = document.getElementsByClassName('gosty')[0]
inp.onclick = (event) => {
    if (drop.style.display === "none") {
        drop.style.display = "flex"
    }
    else {
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

var gosty = document.getElementsByClassName('gosty')[0]
const dropG = document.querySelector('.gosty__drop')

dropG.onclick = (event) => {
    if (vzr || dety > 0, baby==0) {
        gosty.placeholder = `Количество спальных мест: ${vzr+dety}`
    }
    else if (vzr || dety > 0, baby>0) {
        gosty.placeholder = `Количество спальных мест: ${vzr+dety} и люлек: ${baby}`
    }


}


