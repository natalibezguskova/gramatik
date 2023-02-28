import React, {useState, useEffect, useCallback} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as CloseIcon} from "../../assets/images/close.svg";
import {conditions, ConditionsType} from "../../App";

const CookiesWrap = styled.div`
  position: fixed;
  bottom: 20px;
  left: ${({left}) => left};
  display: grid;
  z-index: 2;
  background-color: #00EAFA;
  color: #0e2096;
  font-size: 18px;
  height: auto;
  width: 224px;
  border-radius: 18px;
  padding: 6px;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);
  transition: left 0.4s ease;
`
const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  right: 2px;
  width: 14px;
  height: 14px;
  
  > svg {
    width: 14px;
    height: 14px;
    fill: #0e2096;
  }
`
const TextWrap = styled.div`
  position: relative;
`
const Text = styled.div`
  line-height: 22px;
  margin: 10px 0 6px 6px;

  a:visited {
    color: #0e2096;
  }
`

export const Cookies = () => {
  // localStorage.removeItem("hideCookies")
  const [showCookies, setCookies] = useState(() => {
    const userTouchedCookies = localStorage.getItem("hideCookies")
    return !userTouchedCookies
  });

  useEffect(() => {
    if (!showCookies) localStorage.setItem("hideCookies", JSON.stringify(true))
  }, [showCookies])

  const hideCookies = useCallback(() => setCookies(false), [])

  return (
      <CookiesWrap left={showCookies ? '20px' : '-255px'}>
        <TextWrap>
          <CloseButton onClick={hideCookies}><CloseIcon /></CloseButton>
          <Text>
            By using the website, you agree to the use of
            <Link to={conditions(ConditionsType.privacyPolicy)} target="_blank" rel="noopener noreferrer"> cookies</Link>
          </Text>
        </TextWrap>
      </CookiesWrap>
  )
}
