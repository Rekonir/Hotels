class Hotel {
    constructor(pn, pict, type, cost) {
        this.pn = pn
        this.pict = pict
        this.type = type
        this.cost = cost
    }
}
const hotels = [
    new Hotel('№ 888', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', 'люкс', '9 990₽'),
    new Hotel('№ 980', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', 'люкс', '8 500₽'),
    new Hotel('№ 840', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '9 900₽'),

    new Hotel('№ 740', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '6 000₽'),
    new Hotel('№ 856', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '7 300₽'),
    new Hotel('№ 982', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 800₽'),

    new Hotel('№ 678', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 500₽'),
    new Hotel('№ 450', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 300₽'),
    new Hotel('№ 350', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 000₽'),

    new Hotel('№ 666', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 000₽'),
    new Hotel('№ 444', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 000₽'),
    new Hotel('№ 352', 'https://s.101hotelscdn.ru/uploads/image/hotel_image/10846/768300_preview.jpg', '', '5 000₽'),
]

const moz = document.getElementsByClassName('moz')

function newHotelTR(Hotel) {
    const $HotelTR = document.createElement('tr'),
        $pnTD = document.createElement('td'),
        $pictTD = document.createElement('td'),
        $typeTD = document.createElement('td'),
        $costTD = document.createElement('td')

    $HotelTR.append($pnTD)
    $HotelTR.append($pictTD)
    $HotelTR.append($typeTD)
    $HotelTR.append($costTD)

    return $HotelTR;
}

function render () {
    const HotelsCopy = [...hotels]

    for (const Hotel of HotelsCopy)
        moz.append(newHotelTR(Hotel))
}
render()