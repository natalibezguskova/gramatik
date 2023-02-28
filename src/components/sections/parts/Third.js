import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'

const Wrap = styled.div`
  @media (max-width: 425px) {
    padding: 10px;
    background-color: #0e2096;
  }
`

const ContentWrap = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
const Title = styled.h2`
  letter-spacing: 0.15em;
  line-height: 1.4em;
  text-align: center;
  color: #00EAFA;
  margin: ${({m}) => m || '56px 0 20px' };

  @media (max-width: 980px) {
    width: auto;
    margin: 10px 0 0;
  }
`
const LineWrap = styled.div`
  position: relative;
  padding: 0 18px 38px;
  padding-bottom: ${({pb}) => pb};
  padding-top: ${({pt}) => pt};
  
  @media (max-width: 983px) {
    padding: 0 0 38px;
  }
  @media (max-width: 425px) {
   padding: 0;
  }
`
const Line = styled.div`
  height: 5px;
  background-color: rgba(0, 234, 250, 0.5);
  margin: 20px 0 0;
  width: 292px;

  @media (max-width: 983px) {
    width: calc(100vw / 3);
  }
  
  @media (max-width: 425px) {
    display: none;
  }
`
const MobileLine = styled(Line)`
  display: none;
  
  @media (max-width: 425px) {
    display: block;
    width: 84%;
    margin: 10px 0 0 9%;
  }
`
const DotsWrap = styled.div`
  display: grid;
  gap: 4px;
  width: 4px;
  margin: 20px 50% 0;

  @media (max-width: 425px) {
    display: none;
  }
`
const DotsWrapMobile = styled(DotsWrap)`
  display: none;

  @media (max-width: 425px) {
    display: grid;
    margin: 20px 0 0 calc(50% - 4px);
  }
`
const Dot = styled.div`
  background-color: #00EAFA;
  width: 4px;
  height: 4px;
  border-radius: 50%;
`
const ColimnWrap = styled.div`
  width: 328px;
  text-align: center;
  @media (max-width: 983px) {
    width: calc(100vw / 3);
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`
const Info = styled.div`
  text-align: center;
  margin-bottom: 14px;

  @media (max-width: 983px) {
    margin: 40px 0 14px;
  }
`
const InfoText = styled.h6`
  line-height: 1.4em;
  text-align: center;
  letter-spacing: 0.1em;
  margin: ${({m})=> m};
  @media (max-width: 425px) {
    margin: 20px 0 0;
  }
`
const Number = styled.h4`
  position: absolute;
  text-align: right;
  margin-top: 20px;
  right: 18px;
  width: 100%;
  top: ${({top})=> top};

  @media (max-width: 425px) {
    position: relative;
    text-align: center;
    right: 0;
    font-size: 37px;
    margin: 0;
  }
`
const ImageContainer = styled.div`
  width: 328px;
  background-image: ${({img}) => `url(${img})`};
  height: ${({h}) => h || '500px'};
  margin: ${({m}) => m};
  background-size: cover;
  
  @media (max-width: 983px) {
    width: calc(100vw / 3);
  }
  
  @media (max-width: 425px) {
    width: 100%;
    margin: 0;
    height: ${({mh}) => mh };
  }
`
const MobileSecondColumn = styled.div`
  display: none;
  @media (max-width: 425px) {
     display: block;
  }
`
const SecondColumn = styled.div`
  display: block;
  @media (max-width: 425px) {
     display: none;
  }
`

export const ThirdSection = () => {
  const {title_1, title_2, column_1, column_2, column_3} = content.thirdSection

  return (
      <Wrap>
        <Title>
          {title_1}
        </Title>
        <Title m='0 0 20px'>
          {title_2}
        </Title>
        <DotsWrapMobile>
          <Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/>
        </DotsWrapMobile>
        <ContentWrap>
          <ColimnWrap>
            <Info>
              <InfoText m='42px 0 33px'>{column_1.header}</InfoText>
              <InfoText>{column_1.text}</InfoText>
            </Info>
            <LineWrap>
              <MobileLine/>
              <Number>01</Number>
              <Line/>
            </LineWrap>
            <ImageContainer mh='252px' img={column_1.img} m='146px 0 90px' h='320px'/>
          </ColimnWrap>
          <ColimnWrap>
            <DotsWrap>
              <Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/>
              <Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/><Dot/>
            </DotsWrap>
            <MobileSecondColumn>
              <Info>
                <InfoText>{column_2.header}</InfoText>
                <InfoText>{column_2.text}</InfoText>
              </Info>
              <LineWrap pt='71px'>
                <MobileLine/>
                <Number>02</Number>
              </LineWrap>
              <ImageContainer img={column_2.img} m='376px 0 0' mh='360px'/>
            </MobileSecondColumn>
            <SecondColumn>
              <ImageContainer img={column_2.img} m='376px 0 0'/>
              <LineWrap pt='71px'>
                <Number top='-12px'>02</Number>
                <Line/>
              </LineWrap>
              <Info>
                <InfoText>{column_2.header}</InfoText>
                <InfoText>{column_2.text}</InfoText>
              </Info>
            </SecondColumn>
          </ColimnWrap>
          <ColimnWrap>
            <Info>
              <InfoText m='287px 0 0'>{column_3.header}</InfoText>
            </Info>
            <LineWrap pb='60px'>
              <Line/>
              <MobileLine/>
              <Number>03</Number>
            </LineWrap>
            <ImageContainer img={column_3.img} mh='360px'/>
          </ColimnWrap>
        </ContentWrap>
      </Wrap>
  )
}
