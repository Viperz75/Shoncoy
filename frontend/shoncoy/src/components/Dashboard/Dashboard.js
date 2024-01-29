import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import { useGlobalContext } from "../../context/globalContext";
import History from '../../History/History';
import Chart from '../Chart/Chart';
import { dollar } from '../../utils/Icons';


function Dashboard() {
    const {totalExpenses,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
            <h1>All Transactions</h1><br/>
                <div className="stats-con">
                    <div className="chart-con">
                        <div className="amount-con">
                            <div className="income">
                                <center>
                                <h2>Total Income</h2>
                                <p>
                                    {dollar}{totalIncome()}
                                </p></center>
                            </div>
                            <div className="expense">
                                <center>
                                <h2>Total Expense</h2>
                                <p>
                                    {dollar} {totalExpenses()}
                                </p></center>
                            </div>
                            <div className="balance">
                                <center>
                                <h2>Total Balance</h2>
                                <p>
                                    {dollar} {totalBalance()}
                                </p></center>
                            </div>
                        </div>
                        <Chart />
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title">Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0}
                            </p>
                            <p>
                                ${incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0}
                            </p>
                            <p>
                                ${expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0}
                            </p>
                        </div>
                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    h1{
        font-size: 22px;
    }
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(3, 2fr);
                gap: 0.8rem;
                // margin-top: 1rem;
                // .income, .expense{
                //     grid-column: span 2;
                // }
                .income, .expense, .balance{
                    background: rgba(64, 64, 64 / 30%);
                    backdrop-filter: blur(4.5px);
                    border: 2px solid rgba(64, 64, 64 / 30%);;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    margin-bottom: 8px;
                    width: 90%;
                    color: #c7c7c7;
                    p{
                        font-size: 1.1rem;
                        font-weight: 700;
                    }
                    h2{
                        font-size: 1rem;
                    }
                }

                // .balance{
                //     grid-column: 2 / 4;
                //     display: flex;
                //     flex-direction: column;
                //     justify-content: center;
                //     align-items: center;
                //     p{
                //         color: var(--color-green);
                //         opacity: 0.6;
                //         font-size: 1.2rem;
                //     }
                // }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            
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
                background: rgba(64, 64, 64 / 30%);
                backdrop-filter: blur(4.5px);
                border: 2px solid rgba(64, 64, 64 / 30%);
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                    color: #c7c7c7;
                }
            }
        }
    }
`;

export default Dashboard