import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import Chart from '../Chart/Chart';
import { useEffect } from 'react'

function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

  return (
    <DashboardStyled>
            <InnerLayout>
                <h1>All Transactions</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        <Chart />
                        
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                    </div>
                    <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>
                                    {dollar} {totalIncome()}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p>
                            </div>
                        </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    //background: rgba(9, 0, 5, 0.78);
    
    .stats-con{
       // background: black;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto auto; 
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            grid-row: 1/2;
            height: 400px;
            
        }

        .history-con{
            grid-column: 4/-1;
            grid-row: 1/2;
            padding-right: 40px;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #91808082;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
        .amount-con{
                //background: pink;
                display: flex;
                justify-content: space-around;
                grid-column: 1/6;
                grid-row: 2/3;
                gap: 2rem;
                margin-top: 2rem;
                padding-right: 40px;
                .income, .expense, .balance{
                    //background: #725a660;
                    flex:1;
                    grid-column: 1/2;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(120, 81, 81, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                   
                    p{
                        color: green;//var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
    }
`;

export default Dashboard
