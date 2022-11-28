$(function () {
    $('#calendar').datepicker({
        clearButton: true,
        minDate: new Date(),
        multipleDates: 2,
        multipleDatesSeparator: ' - ',
        range: true,

    })
})