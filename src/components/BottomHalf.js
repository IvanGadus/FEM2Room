import React from 'react'
import styled from 'styled-components';

const BottomHalfWrapper = styled.main`
  height: max-content;
  min-height: 35%;
  width: 100%;
  display: flex;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`

const BottomImage = styled.img`
  height: 100%;
  width: 30%;
  object-fit: cover;

  @media (max-width: 1000px){
    width: auto;
  }
`

const BottomDescription = styled.div`
  width: 40%;
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1000px){
    width: auto;
    padding: 40px 40px;
  }
`

export default function BottomHalf() {
  return (
    <BottomHalfWrapper>
        <BottomImage src='../images/image-about-dark.jpg'></BottomImage>
        <BottomDescription>
            <p style={{marginBottom:"20px", fontSize:"12px", textTransform:"uppercase",letterSpacing:"7px", fontWeight:"bold"}}>About our furniture</p>
            <p style={{fontSize:"15px" ,letterSpacing:"0.4px", lineHeight:"22px", opacity:"70%"}}>Our multifunctional collection blends design and function to suit your individual taste.
        Make each room unique, or pick a cohesive theme that best express your interests and what
        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
        or anything in between. Product specialists are available to help you create your dream space.</p>
        </BottomDescription>
        <BottomImage src='../images/image-about-light.jpg'></BottomImage>
    </BottomHalfWrapper>
)
}
