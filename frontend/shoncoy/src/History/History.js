import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';


function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    h2{
        font-size: 22px;
    }
    display: flex;
    flex-direction: column;
    margin-top: -30px;
    gap: 2.4rem;
    .history-item{
        margin-top: -30px;
        background: rgba(64, 64, 64 / 30%);
        backdrop-filter: blur(4.5px);
        border: 2px solid rgba(64, 64, 64 / 30%);
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export default History