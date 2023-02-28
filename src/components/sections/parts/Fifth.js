import React from "react";
import styled from "styled-components";
import {content} from '../../../assets/content'

const ContentWrap = styled.div`
  padding: 0 6%;
  
  @media only screen and (max-width: 983px) and (min-width: 768px)  {
    padding: 56px 60px;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`
const Text = styled.p`
  margin-bottom: 36px;
  font-size: 26px;

  @media (max-width: 983px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`

export const FifthSection = () => {
  const {title, paragraph1, paragraph2, paragraph3} = content.fifthSection

  return (
      <ContentWrap>
        <Text>{title}</Text>
        {
          [paragraph1, paragraph2, paragraph3].map((paragraph) => <Text key={paragraph}>{paragraph}</Text>)
        }
      </ContentWrap>
  )
}
