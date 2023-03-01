import React from "react";
import styled from "styled-components";
import {sections} from '../../assets/content/info/texts'
import {ReactComponent as CloseIcon} from "../../assets/images/close.svg";

const StyledMenu = styled.section `
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 60px 0;
  background: rgb(0,234,250);
  background: radial-gradient(circle, #0C29E8 0%, rgba(12,28,148,1) 60%);
  position: relative;
  z-index: 5;

  @media (max-width: 425px) {
    background: rgb(0,234,250);
  }
`
const CirclesTypes = {
  big: "big",
  medium: 'medium',
  small: 'small'
}
const CircleSize = {
  [CirclesTypes.small]: "535px",
  [CirclesTypes.medium]: "665px",
  [CirclesTypes.big]: "795px"
}
const CircleOpacity = {
  [CirclesTypes.small]: "0.5",
  [CirclesTypes.medium]: "0.2",
  [CirclesTypes.big]: "0.08"
}

const Circle = styled.div`
  border-radius: 50%;
  border: ${({circle}) => `3px solid rgba(0, 234, 250, ${CircleOpacity[circle]})`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({circle}) => CircleSize[circle]};
  height: ${({circle}) => CircleSize[circle]};
  position: absolute;

  @media (max-width: 425px) {
    display: none;
  }
`

const Container = styled.div`
  background-color: rgb(0,234,250);
  width: 100%;
  max-width: 997px;
  height: 471px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  text-align: center;
  line-height: 52px;
  font-weight: bold;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.6);

  @media (max-width: 425px) {
    height: 100vh;
    display: block;
    padding: 60px 0;
  }
`
const CloseButton = styled.div`
  color: rgb(12, 28, 148);
  position: absolute;
  top: 20px;
  right: 25px;
  cursor: pointer;
  
  > svg {
    display: block;
    width: 27px;
    height: 27px;
    fill: #0e2096;
  }

  @media (max-width: 425px) {
    position: relative;
    direction: rtl;
  }
`
const SectionsList = styled.ul`
  display: grid;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
`
const Section = styled.li`
  > a {
    display: inline-block;
    text-decoration: none;
    width: 100%;
    color: ${({id}) => id === sections.HOME ? `white` : `rgb(12, 28, 148)`};

    :-webkit-any-link {
      color: ${({id}) => id === sections.HOME ? `white` : `rgb(12, 28, 148)`};
    }

    :hover {
      color: white;
    }

    @media (max-width: 425px) {
      border-bottom: 1px solid rgb(12, 28, 148);
    }
  }
`

const sectionsNames = [
  "HOME",
  "ABOUT",
  "PROJECTS",
  "SERVICES",
  "CLIENTS",
  "CONTACT",
]

export const Menu = ({closeMenu}) => {
  return (
      <StyledMenu>
        <Circle circle={CirclesTypes.big}>
          <Circle circle={CirclesTypes.medium}>
            <Circle circle={CirclesTypes.small}/>
          </Circle>
        </Circle>
        <Container>
          <CloseButton onClick={closeMenu}><CloseIcon /></CloseButton>
          <SectionsList>
            {sectionsNames.map((item) => <Section key={item} id={item} onClick={closeMenu}><a href={`#${item}`}>{item}</a></Section>)}
          </SectionsList>
        </Container>
      </StyledMenu>
  )
}
