import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

function Chart() {
    const { incomes, expenses } = useGlobalContext()

    // 1. Combine all unique dates from incomes and expenses
    const allDatesSet = new Set([
        ...incomes.map(item => dateFormat(item.date)),
        ...expenses.map(item => dateFormat(item.date))
    ])
    const allDates = Array.from(allDatesSet).sort((a, b) => new Date(a) - new Date(b))

    // 2. Create helper to sum amount by date
    const sumByDate = (items, dates) => {
        return dates.map(date =>
            items
                .filter(item => dateFormat(item.date) === date)
                .reduce((sum, item) => sum + item.amount, 0)
        )
    }

    // 3. Prepare data arrays for each dataset
    const incomeData = sumByDate(incomes, allDates)
    const expenseData = sumByDate(expenses, allDates)
    const options = {
    responsive: true,
    plugins: {
        legend: {
            labels: {
                color: 'black'  // legend text color
            }
        },
        title: {
            display: false
        }
    },
    scales: {
        x: {
            ticks: {
                color: 'black'  // X-axis numbers color
            },
            grid: {
                color: 'rgba(0,0,0,0.1)' // optional: light grid lines
            }
        },
        y: {
            ticks: {
                color: 'black'  // Y-axis numbers color
            },
            grid: {
                color: 'rgba(0,0,0,0.1)' // optional
            }
        }
    }
}

    const data = {
        labels: allDates,
        datasets: [
            {
                label: 'Income',
                data: incomeData,
                borderColor: 'green',
                backgroundColor: 'green',
                tension: 0.2
            },
            {
                label: 'Expenses',
                data: expenseData,
                borderColor: 'red',
                backgroundColor: 'red',
                tension: 0.2
            }
        ]
    }

    return (
        <ChartStyled>
            <Line data={data} options={options}/>
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
    background: #7d6b749f;
    color: black;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`

export default Chart
