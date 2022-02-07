new Promise(r => setTimeout(r, 2000)).then(() => {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Deutsch', 'Französisch', 'Englisch', 'Chinesisch', 'Spanisch'],
            datasets: [{
                    label: 'schriftlich',
                    data: [100, 50, 95, 20, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 2
                },
                {
                    label: 'mündlich',
                    data: [95, 30, 95, 20, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 2
                }
            ]

        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        font: {
                            size: 0
                        },
                        maxTicksLimit: 7,
                        showLabelBackdrop: false
                    }
                }
            }
        }
    });
    const ctx2 = document.getElementById('donut');
    const donut = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: [
                '3D-CAD',
                'MATLAB',
                'Python',
                'C#',
                'JS',
                'C++',
                'HTML',
                'CSS'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [
                    500,
                    400,
                    400,
                    400,
                    250,
                    200,
                    200,
                    50
                ],
                backgroundColor: [
                    'rgb(255, 99, 100)',
                    'rgb(54, 0, 235)',
                    'rgb(255, 205, 86)',
                    'rgba(255, 99, 5, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 5, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 102, 255, 1)'
                ],
                hoverOffset: 5
            }]

        },
        options: {
            legends: {
                position : 'left'
            }
        }
    });
});