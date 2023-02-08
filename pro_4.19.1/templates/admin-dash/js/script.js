
    $(".button-collapse").sideNav();

    var container = document.querySelector('.custom-scrollbar');
    var ps = new PerfectScrollbar(container, {
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
});

    // Data Picker Initialization
    $('.datepicker').pickadate();

    // Material Select Initialization
    $(document).ready(function () {
    $('.mdb-select').material_select();
});

    // Tooltips Initialization
    $(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

    // Small chart
    $(function () {
    $('.min-chart#chart-sales').easyPieChart({
        barColor: "#4285F4",
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
});



    //bar
    var ctxB = document.getElementById("barChart").getContext('2d');
    var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
    labels: ["January", "Febuary", "March", "April", "May"],
    datasets: [{
    label: '# of Votes',
    data: [13, 19, 8, 11, 5],
    backgroundColor: [
    'rgba(255, 99, 132, 0.3)',
    'rgba(41, 182, 246, 0.3)',
    'rgba(255, 187, 51, 0.3)',
    'rgba(66, 133, 244, 0.3)',
    'rgba(153, 102, 255, 0.3)',

    ],
    borderColor: [
    'rgba(255,99,132,1)',
    'rgba(41, 182, 246, 1)',
    'rgba(255, 187, 51, 1)',
    'rgba(66, 133, 244, 1)',
    'rgba(153, 102, 255, 1)',

    ],
    borderWidth: 2
}]
},
    optionss: {
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero: true
}
}]
}
}
});

    $('#dark-mode').on('click', function (e) {

    e.preventDefault();
    $('footer').toggleClass('mdb-color lighten-4 dark-card-admin');
    $('body, .navbar').toggleClass('white-skin navy-blue-skin');
    $(this).toggleClass('white text-dark btn-outline-black');
    $('body').toggleClass('dark-bg-admin');
    $('.card').toggleClass('dark-card-admin');
    $('h6, .card, p, td, th, i, li a, h4, input, label').not(
    '#slide-out i, #slide-out a, .dropdown-item i, .dropdown-item').toggleClass('text-white');
    $('.btn-dash').toggleClass('grey blue').toggleClass('lighten-3 darken-3');
    $('.gradient-card-header').toggleClass('white dark-card-admin');

    if ($('.navbar').hasClass('navy-blue-skin')) {
    for (let i = 0; i <= 5; i++) {
    myBarChart.data.datasets[0].data[i] = (Math.random(i) * 100);
}

    Chart.defaults.global.defaultFontColor = '#fff';
} else {

    for (let i = 0; i <= 5; i++) {
    myBarChart.data.datasets[0].data[i] = (Math.random(i) * 100);
}

    Chart.defaults.global.defaultFontColor = '#666';
}

    myBarChart.update();

});
