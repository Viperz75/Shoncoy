import React from "react";
import styled from "styled-components";
import avatar from '../../img/avatar.png'
import { menuItems } from "../../utils/menuItems";
import { dollar, signout } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";

function Navigation({active, setActive}) {
    const {totalIncome, totalExpenses} = useGlobalContext();

    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt=''/>
                <div className="text">
                    <h2>Akash</h2>
                    <p>{dollar} {totalIncome() - totalExpenses() ?? 0}</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active == item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
        </NavStyled>
    )
}

const NavStyled =  styled.nav`
    padding: 2rem 1.5rem;
    width: 300px;
    height: 100%;
    background: rgba(64, 64, 64, 0.3);
    border: 3px solid #00000;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 5px solid rgb(56 214 215);
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgb(199 199 199);
            font-size: 18px;
            font-weight: 800;
        }
        p{
            color: var(--color-green);
            font-size: 15px;
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgb(199 199 199);
            padding-left: 1rem;
            position: relative;
            i{
                color: rgb(56 214 215);
                font-size: 1.3rem;
                transition: all .4s ease-in-out;
            }
        }
    }


    .active{
        color: rgb(56 214 215) !important;
        i{
            color: rgb(56 214 215) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: rgb(56 214 215);
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation; 