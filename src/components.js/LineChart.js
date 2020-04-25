import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales for 2020 (M)',
                data: [3,2,2,1,5],
                borderColor: ['rgba(255,206,86,0.5)'],
                backgroundColor: ['rgba(255,206,86,0.5)'],
                pointBackgroundColor: ['rgba(255,206,86,0.5)'],
                pointBorderColor: ['rgba(255,206,86,0.5)'],
            },
            {
                label: 'Sales for 2019 (M)',
                data: [4,2,1,3,5,6],
                borderColor: ['rgba(54,162,235,0.5)'],
                backgroundColor: ['rgba(54,162,235,0.5)'],
                pointBackgroundColor: ['rgba(54,162,235,0.5)'],
                pointBorderColor: ['rgba(54,162,235,0.5)'],
            },
        ]
    }
    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default LineChart
