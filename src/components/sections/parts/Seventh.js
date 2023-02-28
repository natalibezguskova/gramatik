import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'
import {Link} from "react-router-dom";
import {conditions, ConditionsType} from "../../../App";

const ContentWrap = styled.div`
  display: grid;
  text-align: left;
  height: 100%;
  padding: 53px 6% 100px;

  > h1 {
    text-align: center;
  }
  
  > p {
    color: #00EAFA;
    line-height: 39px;
  }

  @media (max-width: 983px) {
    padding: 65px;
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`
const DataRow = styled.div`
  display: flex;
  text-align: left;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const DataElement = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 33%;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
const DataHeader = styled.h6`
  letter-spacing: 0.1em;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 22px;
  }
`
const DataText = styled.p`
  font: normal normal normal 18px/1.4em "BrandonGrotesque","BrandonGrotesque",sans-serif;
  
  > a {
    color: #FFFFFF;
  }
  > a:visited {
    color: #EDEDED;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
    padding: 0 20%;
  }
`
const Links = styled.div`
  height: fit-content;
  display: grid;
  line-height: 34px;
  font-size: 19px;
  margin-top: 30px;
  
  > a {
    color: #FFFFFF;
  }

  @media (max-width: 768px) {
    text-align: left;
    > a {
      font-size: 19px;
    }
  }
`
const Text = styled.p`
  font: normal normal normal 21px/1.4em "Avenir-85-Heavy","Avenir-85-Heavy",sans-serif;
  font-size: 15px;
  @media (max-width: 768px) {
    text-align: left;
  }
`
const Header = styled.h3`
  font-size: 31px;
  text-align: center;
  padding-top: 20px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 19px;
    padding: 0;
  }
`
export const SeventhSection = () => {
  const { column_1, column_2, header, text, privacyPolicy, termsAndConditions } = content.seventhSection

  return (
      <ContentWrap>
        <DataRow>
          <DataElement>
            <DataHeader>{column_1.header}</DataHeader>
            <DataText>{column_1.text}</DataText>
          </DataElement>
          <DataElement/>
          <DataElement>
            <DataHeader>{column_2.header}</DataHeader>
            <DataText>
              {column_2.telegramBefore}
              <Link to={column_2.telegramLink} target='_blank' rel="noreferrer" >{column_2.telegramTextLink}</Link>
            </DataText>
            <DataText>
              <a href={`mailto:${column_2.email}`} target='_blank' rel="noreferrer" >
                {column_2.email}
              </a>
            </DataText>
          </DataElement>
      </DataRow>
        <Header>{header}</Header>
        <Text>{text}</Text>
        <Links>
          <Link to={conditions(ConditionsType.privacyPolicy)} target="_blank" rel="noopener noreferrer">{privacyPolicy}</Link>
          <Link to={conditions(ConditionsType.termsAndConditions)} target="_blank" rel="noopener noreferrer">{termsAndConditions}</Link>
        </Links>
      </ContentWrap>
  )
}
