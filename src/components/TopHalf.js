import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

import sliderData from "../data/sliderData"
import Navigation from './Navigation'

const TopHlaf = styled.main`
  height: max-content;
  min-height: 65%;
  width: 100%;
  display: flex;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`

const MainImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const ImageWrapper = styled.div`
  width: 60%;
  height: 100%;
  position: relative;

  @media (max-width:1000px){
    width: inherit;
    height: 60vh;
  }
`

const MainAside = styled.aside`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6%;
  position: relative;
  padding-bottom: 30px;

  @media (max-width: 1000px){
    width: auto;
    margin: 40px 40px;
    padding: 0;
  }
`

const BuyButton = styled.button`
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  gap: 30px;
  text-transform: uppercase;
  font-size: medium;
  letter-spacing: 15px;
  padding: 8px;
  width: max-content;
  cursor: pointer; 

  &:hover{
    opacity: 50%;
  }
`

const ButtonWrapper = styled.div`
  position:absolute;
  width: 25%;
  display: flex;
  bottom: 0;
  left: 0;

  @media (max-width: 1000px){
    display: none;
  }
`

const ButtonWrapperMobile = styled.div`
  position:absolute;
  width: 15%;
  max-width: 130px;
  min-width: 100px;
  display: flex;
  bottom: 0;
  left: 0;
  display: none;

  @media (max-width: 1000px){
    display: block;
    left: initial;
    right: 0;
  }
`

const AsideTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 2.4rem;
  line-height: 40px;

  @media (max-width: 425px){
    font-size: 2.1rem;
  }

`

const SliderButtons = styled.button`
  position: relative;
  bottom: 0;
  width: 50%;
  aspect-ratio: 1/1;
  border: none;
  background-color: black;
  cursor: pointer;

  &:hover{
    background-color: rgb(65, 65, 65);
  }
`

const SliderButtonsMobile = styled.button`
  position: relative;
  bottom: 0;
  width: 50%;
  aspect-ratio: 1/1;
  border: none;
  background-color: black;
  cursor: pointer;
`

export default function TopHalf() {
    const [sliderDataNumber, setSliderDataNumber] = useState(0)

    const handleLeftClick = () =>{
        if(sliderDataNumber == 0){
            setSliderDataNumber(2)
        }else{
            setSliderDataNumber(prev => prev - 1)
        }
    }

    const handleRightClick = () =>{
        if(sliderDataNumber == 2){
            setSliderDataNumber(0)
        }else{
            setSliderDataNumber(prev => prev + 1)
        }
    }

  return (
    <TopHlaf>
        <Navigation />
        <ImageWrapper>
          <MainImage src={sliderData[sliderDataNumber].src} />
          <ButtonWrapperMobile>
                <SliderButtonsMobile onClick={handleLeftClick}>
                <img src="../images/icon-angle-left.svg" alt="left arrow" />
                </SliderButtonsMobile>
                <SliderButtonsMobile onClick={handleRightClick}>
                <img src="../images/icon-angle-right.svg" alt="rigt arrow" />
                </SliderButtonsMobile>
            </ButtonWrapperMobile>
        </ImageWrapper>  
        <MainAside>
            <AsideTitle>{sliderData[sliderDataNumber].title}</AsideTitle>
            <p style={{fontSize:"15px" ,letterSpacing:"0.4px", lineHeight:"22px", opacity:"70%", marginBottom:"20px"}}>{sliderData[sliderDataNumber].description}</p>
            <BuyButton>
                <p style={{fontSize:"12px", fontWeight:"bold"}}>Shop now</p>
                <img src="../images/icon-arrow.svg" alt="" />
            </BuyButton>
            <ButtonWrapper>
                <SliderButtons onClick={handleLeftClick}>
                <img src="../images/icon-angle-left.svg" alt="left arrow" />
                </SliderButtons>
                <SliderButtons onClick={handleRightClick}>
                <img src="../images/icon-angle-right.svg" alt="rigt arrow" />
                </SliderButtons>
            </ButtonWrapper>
        </MainAside>
    </TopHlaf> 
  )
}
