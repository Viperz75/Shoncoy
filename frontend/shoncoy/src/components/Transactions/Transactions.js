import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import styled from "styled-components";
import { calender, dollar } from "../../utils/Icons";
import { dateFormat } from "../../utils/dateFormat";

const Transactions = () => {
  const { getIncomes, incomes, getExpenses, expenses, error } = useGlobalContext();

  useEffect(() => {
    // Fetch incomes and expenses when the component mounts
    getIncomes();
    getExpenses();
  }, []);


  return (
    <TransactionStyled>
        <h2>Transactions</h2>
      {incomes.length > 0 || expenses.length > 0 ? (
        <>
          <div className="content">
            {incomes.length > 0 && (
              <div>
                <h3>Incomes</h3>
                <div className="inner-content">
                  {incomes.map((income) => (
                    <div key={income._id} className="card">
                      <span className="title">{income.title} <br /> {dollar}{income.amount} &nbsp;&nbsp;{calender} {dateFormat(income.date)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {expenses.length > 0 && (
              <div>
                <h3>Expenses</h3>
                <div className="inner-content">
                  {expenses.map((expense) => (
                    <div key={expense._id} className="card">
                      <span className="title">{expense.title} <br/>{dollar}{expense.amount} &nbsp;&nbsp;{calender} {dateFormat(expense.date)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : null}
    </TransactionStyled>
  );
};

const TransactionStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: auto;
    gap: 0.2rem;
    padding: 2rem;

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;

        .inner-content {
            display: grid;
            grid-template-columns: repeat(3, 2fr);
            gap: 0.2rem;
            .card {
                background: rgba(64, 64, 64 / 30%);
                backdrop-filter: blur(4.5px);
                padding: 1rem;
                margin-top: 10px;
                border-radius: 8px; 
                margin-bottom: 0.5rem; 
                color: #c7c7c7;
                margin-left: 2rem;
                width: 90%;
            }
        

            .text {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
                color: #c7c7c7;
            }

            .title{
                color: #c7c7c7;
            }

            p {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                color: #c7c7c7;
                opacity: 0.8;
                font-size: 14px;
            }
        }
    }
`;

export default Transactions;
