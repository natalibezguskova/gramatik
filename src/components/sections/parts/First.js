import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'

const CirclesTypes = {
  big: "big",
  medium: 'medium',
  small: 'small'
}
const CircleSize = {
  [CirclesTypes.small]: "535",
  [CirclesTypes.medium]: "665",
  [CirclesTypes.big]: "798"
}
const CircleOpacity = {
  [CirclesTypes.small]: "0.5",
  [CirclesTypes.medium]: "0.2",
  [CirclesTypes.big]: "0.05"
}
const CircleDirection = {
  [CirclesTypes.small]: "column",
  [CirclesTypes.medium]: "row",
  [CirclesTypes.big]: "row"
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  border: ${({circle}) => `3px solid rgba(0, 234, 250, ${CircleOpacity[circle]})`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({circle}) => `${CircleSize[circle]}px`};
  height: ${({circle}) => `${CircleSize[circle]}px`};
  flex-direction: ${({circle}) => CircleDirection[circle]};
  
  @media (max-width: 768px) {
    width: ${({circle}) => circle === CirclesTypes.small ? '42vw' : '49vw'};
    height: ${({circle}) => circle === CirclesTypes.small ? '42vw' : '49vw'};
  }

  @media (max-width: 375px) {
    width: ${({circle}) => circle === CirclesTypes.small ? '80vw' : '89vw'};
    height: ${({circle}) => circle === CirclesTypes.small ? '80vw' : '89vw'};
    top: 12vw;
    
    > div {
      top: 4vw;
    }
  }
`
const Text = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 40%;
    width: 90%;
  }
`
const Title = styled.h1`
  letter-spacing: 0.2em;
  margin-bottom: 8px;
`
const Description = styled.p`
  text-align: center;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const FirstSection = () => {
  const { title, text} = content.firstSection

  return (
      <Wrap>
        <Circle circle={CirclesTypes.big}>
          <Circle circle={CirclesTypes.medium}>
            <Circle circle={CirclesTypes.small}/>
          </Circle>
        </Circle>
        <Text>
          <Title>{title}</Title>
          <Description>
            {text}
          </Description>
        </Text>
      </Wrap>

  )
}
