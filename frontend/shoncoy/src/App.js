import styled from "styled-components";
import background from './img/background.png'
import {MainLayout} from './styles/Layouts'
import Navigation from "./components/Navigation/Navigation";
import React, { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from './components/Income/Income'
import Expenses from './components/Expenses/Expenses'
import { useGlobalContext } from "./context/globalContext";
import Transactions from "./components/Transactions/Transactions";


function App() {
  const [active, setActive] = React.useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Income />
      case 4:
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  return (
    <AppStyled background={background} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>

    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.background});
    position: relative;
    main{
      flex: 1;
      background: rgba(64, 64, 64, 0.3);
      border: 3px solid #00000;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
    }
`;

export default App;
