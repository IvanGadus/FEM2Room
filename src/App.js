import React from 'react'
import styled from 'styled-components';
import '../src/style/style.css'
import { createGlobalStyle } from "styled-components";

import BottomHalf from './components/BottomHalf';
import TopHalf from './components/TopHalf';

const GlobalStyle = createGlobalStyle`
  :root{
    --text-color: #727170;
    --price-color: #3d8168;
    --dark-price-color:#174232;
    --padding-bottom-20: 20px;
  }
`

const ContentWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px){
    height: auto;
    width: auto;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ContentWrapper>
        <TopHalf />
        <BottomHalf />
      </ContentWrapper>
    </div>
  );
}

export default App;
