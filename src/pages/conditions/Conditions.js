import React, {useCallback, useMemo} from 'react'
import styled from "styled-components";
import uniqid from 'uniqid'
import {useParams} from 'react-router'
import {Link} from "react-router-dom";
import {conditions, ConditionsTexts} from "../../App";

const Container = styled.section`
  padding: 60px;
  color: white;
  background-color:  #0e2096;
  white-space: pre-line;
  font-size: 11px;

  h4, h2, p, li {
    font-family: Arial ,sans-serif;
    font-size: 11px;
  }
  
  > h4 {
    margin-top: 30px;
    font-weight: bold;
  }

  > h2 {
    font-size: 14px;
  }
  
  > p, ul {
    margin-top: 10px;
  }
  
  li {
    margin-bottom: 10px;
    font-weight: 400;
  }
  
  a, a:visited {
    color: #00EAFA;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

const Header = ({children}) => <h2>{children}</h2>
const SubHeader = ({children}) => <h4>{children}</h4>
const Paragraph = ({children}) => <p>{children.bold && <b>{children.bold}</b>}{children.text || children}{children.link && <Link to={conditions(children.linkTo)} target="_blank" rel="noopener noreferrer">{children.link}</Link>}</p>
const OrderedList = ({children}) => (
    <ol>
      {Object.values(children).map((li) => (
          <li key={uniqid()}>
            <b>{li.name}</b>
            {li.info}
          </li>
      ))}
    </ol>
)

const UnorderedList = ({children}) => (
    <ul>
      {Object.values(children).map((li) => (
          <li key={uniqid()}>
            <b>{li.name}</b>
            {li.link && <Link to={conditions(li.linkTo)} target="_blank" rel="noopener noreferrer">{li.link}</Link>}
            {li.info}
          </li>
      ))}
    </ul>
)
const ComplexLists = ({children}) => (
    <ol>
      {Object.values(children).map((li) => (
          <li key={uniqid()}>
            <b>{li.name}</b>
            <p>{li.info}</p>
            <UnorderedList>{li.content}</UnorderedList>
          </li>
      ))}
    </ol>
)

const Conditions = () => {
  const { type } = useParams()

  const conditions = useMemo(() => ConditionsTexts[type],[type])

  const renderItem = useCallback((item) => {
    const textComponentTypes = {
      header: Header,
      subheader: SubHeader,
      paragraph: Paragraph,
      orderedList: OrderedList,
      unorderedList: UnorderedList,
      unorderedListInsideOrdered: ComplexLists
    }

    const Component = textComponentTypes[item.textType]

    return <Component key={uniqid()}>{item.content}</Component>
  }, [])


  return (
      <Container>
        {Object.values(conditions).map(renderItem)}
      </Container>
  )
}

export default Conditions;
