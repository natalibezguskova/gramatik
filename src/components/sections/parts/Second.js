import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'

const ContentWrap = styled.div`
  flex-direction: column;
  display: flex;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    padding-bottom: 20px;
  }
`
const Title = styled.h5`
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 13px;
`
const Description = styled.p`
  text-align: center;
  line-height: 30px;
  color: #BFBBBB;
  width: 100%;
  margin-top: 20px;
  padding: 0 20%;
  
  @media (max-width: 768px) {  
    margin-top: 0;
    padding: 0 16%;
    line-height: 26px;
  }
`
const DataRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  padding-top: 30px;

  @media (max-width: 425px) {
    flex-direction: column;
    padding-top: 0;
  }
`
const DataElement = styled.div`
  display: grid;
  flex-grow: 1;
  text-align: center;
`
const DataHeader = styled.h3`
  margin: 20px 0 0;
  font-size: ${({index}) => index === 1 && '63px'};
`
const DataText = styled.p`
  line-height: 1.4em;
  text-align: center;
  color: #BFBBBB;
`

const MobileColored = styled.div`
  @media (max-width: 768px) {
    background-color: #0e2096;
    padding: 20px;
  }
`

export const SecondSection = () => {
  const {title, description, column_1, column_2, column_3} = content.secondSection
  return (
      <ContentWrap>
        <MobileColored>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        </MobileColored>
        <DataRow>
          {
            [column_1, column_2, column_3].map((element, index) => (
                <DataElement key={element.header}>
                  <DataHeader index={index}>{element.header}</DataHeader>
                  <DataText>{element.subheader && <>{element.subheader}<br/></>}{element.text}</DataText>
                </DataElement>
            ))
          }
        </DataRow>
      </ContentWrap>
  )
}
