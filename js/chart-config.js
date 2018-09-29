var stats = $('#stats').html();
var far = 0;
var ord = 0;
var kho = 0;
var tir = 0;
var mor = 0;
var sha = 0;
var meh = 0;
var aba = 0;
var aza = 0;
var dey = 0;
var bah = 0;
var esf = 0;
if (!$.isEmptyObject(stats)) {
    var orders = JSON.parse(stats);
    $.each(orders, function (index, element) {
        var month = index;
        var count = element;
        switch (parseInt(month)) {
            case 1:
                far = count;
                break;
            case 2:
                ord = count;
                break;
            case 3 :
                kho = count;
                break;
            case 4 :
                tir = count;
                break;
            case 5 :
                mor = count;
                break;
            case 6 :
                sha = count;
                break;
            case 7 :
                meh = count;
                break;
            case 8 :
                aba = count;
                break;
            case 9 :
                aza = count;
                break;
            case 10 :
                dey = count;
                break;
            case 11 :
                bah = count;
                break;
            case 12 :
                esf = count;
                break;
        }
    });
}


Chart.defaults.global.defaultFontColor = '#333333';
Chart.defaults.global.defaultFontFamily = 'Shabnam';
Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.legend.display = false;

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان",
            "آذر",
            "دی",
            "بهمن",
            "اسفند"
        ],
        datasets: [{
            label: "سفارشات",
            data: [far, ord, kho, tir, mor, sha, meh, aba, aza, dey, bah, esf],
            backgroundColor: [
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
                '#008cba',
            ],
            borderWidth: 0
        }],

    },

    // Configuration options go here
    options: {
        title: {
            display: false,
            fontSize: 20,
            position: 'bottom',
            text: "This Year"

        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display: true
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true
                },
                ticks: {
                    beginAtZero: true,
                    userCallback: function (label) {
                        // when the floored value is the same as the value we have a whole number
                        if (Math.floor(label) === label) {
                            return label;
                        }

                    }
                }
            }]
        }
    }
});

