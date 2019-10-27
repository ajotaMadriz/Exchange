// grafia doughnut 
$(document).ready(function(){
    var datos = {
        type: 'doughnut', // pie
        data: {
            datasets:[{
                data:[
                    34,
                    23,
                    67,
                    23,
                    76,
                ],
                backgroundColor:[
                    '#FDB45C',
                    '#00ff80',
                    '#0084ff',
                    '#949FB1',
                    '#46BFBD',
                ],
            }],
            labels:[
                'BTC',
                'BCH',
                'ETH',
                'LTC',
                'ETC',

            ]
        },
        options:{
            responsive: true,
        }
    };
    var canvas = document.getElementById('chart').getContext('2d');
    window.pie = new Chart(canvas, datos);
});

// fin de la grafia doughnut 
