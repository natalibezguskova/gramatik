import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'

const ContentWrap = styled.div`
  flex-direction: column;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.15em;

  @media (max-width: 768px) {
    padding: 10px 8%;
    background-color: #0e2096;
    width: 100%;
  }
`
const Title = styled.h2`
  line-height: 1.4em;
  color: #00EAFA;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`
const SubTitle = styled.h2`
  letter-spacing: 0.15em;
  margin: 42px 0 62px;
  color: #00EAFA;
  font-size: 30px;
  
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 40px 0 0;
  }
`
const DataRow = styled.div`
  display: flex;
  width: 88%;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`
const DataElement = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 33%;
  text-align: center;
  align-items: center;
  padding: 0 5%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 30px;
  }
`
const IconContainer = styled.div`
  width: 124px;
  height: 129px;
  justify-content: center;
  background-image: ${({img}) => `url(${img})`};
`
const DataHeader = styled.h3`
  font-size: 21px;
  margin: 0 0 20px;
`
const DataText = styled.p`
  line-height: 1.4em;
  text-align: center;
  color: #BFBBBB;
  letter-spacing: normal;
  font: normal normal normal 18px/1.4em "BrandonGrotesque","BrandonGrotesque",sans-serif;
`

export const FourthSection = () => {
  const {title, subtitle, column_1, column_2, column_3} = content.fourthSection

  return (
      <ContentWrap>
        <Title>
          {title}
        </Title>
        <SubTitle>{subtitle}</SubTitle>
        <DataRow>
          {
            [column_1, column_2, column_3].map((element) => (
              <DataElement key={element.header}>
                <IconContainer img={element.img}/>
                <DataHeader>{element.header}</DataHeader>
                <DataText>{element.text}</DataText>
              </DataElement>
            ))
          }
        </DataRow>
      </ContentWrap>
  )
}
