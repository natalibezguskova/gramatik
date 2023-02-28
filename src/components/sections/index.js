import React, { useMemo } from "react";
import styled from "styled-components";

import ImgHome from "../../assets/images/first_bg.jpg";
import ImgAbout from "../../assets/images/second_bg.png";
import ImgProjects from "../../assets/images/third_bg.jpg";

import ImgServices from "../../assets/images/fourth_bg.jpg";
import ImgTeam from "../../assets/images/fifth_bg.jpg";

import {FirstSection} from "./parts/First";
import {SecondSection} from "./parts/Second";
import {ThirdSection} from "./parts/Third";
import {FourthSection} from  "./parts/Fourth"
import {FifthSection} from "./parts/Fifth"
import {SixthSection} from "./parts/Sixth"
import {SeventhSection} from "./parts/Seventh"

import {content} from '../../assets/content/index'

const StyledSection = styled.section`
  background-size: cover;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${({align}) => align ? align : 'center'};
  background-image: ${({backgroundImage}) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-position: center;
  background-repeat: no-repeat;
  height: ${({height}) => height};
  white-space: pre-line;
  
  @media (max-width: 768px) {
    height: fit-content;
    min-height: 395px;
  }
`

const ColoredBackground = styled.div`
  background: ${({backgroundColor}) => backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    > div {
      max-width: 100%;
    }
  }
`

const sectionsUI = {
  0: {
    height: '926px',
    Component: FirstSection,
    backgroundImage: ImgHome,
  },
  1: {
    height: '799px',
    Component: SecondSection,
    backgroundImage: ImgAbout,
    backgroundColor: `rgba(14, 32, 150, 0.5)`,
  },
  2: {
    height: '1622px',
    Component: ThirdSection,
    backgroundImage: ImgProjects,
    backgroundColor: `rgba(14, 32, 150, 0.4)`,
  },
  3: {
    height: '898px',
    Component: FourthSection,
    backgroundImage: ImgServices,
    backgroundColor: `rgba(14, 32, 150, 0.5)`,
  },
  4: {
    height: '688px',
    Component: FifthSection,
    backgroundImage: ImgTeam,
    backgroundColor: `radial-gradient(circle at 50% 50%, rgba(228, 235, 252, 0.75) 0%, rgba(88, 155, 227, 0.75) 0%, rgba(0, 47, 94, 0.8) 84.3751311302185%, rgba(0, 0, 0, 0.75) 100%)`,
  },
  5: {
    height: '434px',
    Component: SixthSection,
    backgroundColor: '#0e2096',
  },
  6: {
    height: '618px',
    Component: SeventhSection,
    backgroundImage: ImgHome,
  },
}

const NotAnimatedSection = ({id, data, backgroundColor, backgroundImage, opacity, height, Component}) => (
    <StyledSection key={id} id={id} height={height} backgroundImage={backgroundImage} {...data}>
      <ColoredBackground id={`backgroundColor-${id}`} backgroundColor={backgroundColor} opacity={opacity}>
        <Component />
      </ColoredBackground>
    </StyledSection>
)


export const Sections = () => {

  const sectionsWithData = useMemo(() => (Object.values(content)).map((el, index) => ({
    id: el.id,
    data: {...el},
    ...sectionsUI[index],
  })), [])

  return (
      <>
        {sectionsWithData.map((section) => <NotAnimatedSection key={section.id} {...section}/>)}
      </>
  )
}
