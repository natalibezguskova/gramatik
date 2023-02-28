import React from "react";
import styled from "styled-components";

import {ReactComponent as TGIcon} from "../../assets/images/telegram-icon.svg";
import {ReactComponent as EIcon} from "../../assets/images/email-icon.svg";

import {leftFabButtonText} from '../../assets/content/info/texts'
import {links} from '../../assets/content/info/links'
import {Cookies} from "./Cookies";

const FabButton = styled.div`
  position: fixed;
  top: 56px;
  right: 60px;
  display: flex;
  z-index: 2;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 3vw;
  }
`
const MenuButton = styled(FabButton)`
  gap: 4px;
  :hover > div > span {
    background-color: #FFFFFF;
  }

  @media (max-width: 768px) {
    top: 25px;
  }
`
const DotRow = styled.div`
  display: grid;
  gap: 4px;
  
`
const Dot = styled.span`
  background-color: #00EAFA;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);
`

const SocialButtons = styled(FabButton)`
  display: grid;
  gap: 12px;
  width: 33px;
  top: calc((100% - 92px) / 2);

  @media (max-width: 768px) {
    top: 100px;
  }
`
const SocialButton = styled.div`
  height: 25px;
  width: 25px;
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);
  border-radius: 50%;

  > a > svg {
    width: 25px;
    height: 25px;
    fill: #FFFFFF;
  }

  > a> svg:hover {
    fill: #00EAFA;
  }
`

const LeftButton = styled(FabButton)`
  left: 60px;
  color: #00EAFA;
  width: fit-content;
  cursor: auto;
  font-size: 26px;

  @media (max-width: 768px) {
    display: none;
  }
`


export const Fabs = ({openMenu}) => {
  return (
      <>
       <Cookies />
        <LeftButton>
          {leftFabButtonText}
        </LeftButton>
        <MenuButton onClick={openMenu}>
          <DotRow><Dot/><Dot/><Dot/></DotRow>
          <DotRow><Dot/><Dot/><Dot/></DotRow>
          <DotRow><Dot/><Dot/><Dot/></DotRow>
        </MenuButton>
        <SocialButtons>
          <SocialButton>
            <a href={links.telegram} target='_blank' rel="noreferrer" >
              <TGIcon />
            </a>
          </SocialButton>
          <SocialButton>
            <a href={`mailto:${links.email}`} target='_blank' rel="noreferrer" >
              <EIcon />
            </a>
          </SocialButton>
        </SocialButtons>
      </>
  )
}
