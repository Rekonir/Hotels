const slider = document.getElementsByClassName('cost-slider__slider')[0]
const sliderMin = document.getElementById('slider0')
const sliderMax = document.getElementById('slider1')
const inputs = [sliderMin, sliderMax]

noUiSlider.create(slider, {
    start: [0, 15000],
    connect: true,
    step: 100,
    range: {
        'min': 0,
        'max': 15000
    }
});

slider.noUiSlider.on('update', function (values, handel) {
    inputs[handel].value = Math.round(values[handel])
})