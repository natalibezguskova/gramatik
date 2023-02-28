import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import { Formik } from 'formik';
import {content} from '../../../assets/content'
import {emailjsValues} from '../../../assets/content/info/email'

const ContentWrap = styled.div`
  width: 100%;
  text-align: center;
  padding: 0 6%;

  @media (max-width: 768px) {
    padding: 10px;
  }
`
const Text = styled.h2`
  line-height: 1.4em;
  text-align: center;
  color: #00EAFA;
  letter-spacing: 0.15em;
  margin-bottom: 20px;
`
const InputsWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 22px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const Input = styled.input`
  background-color: transparent;
  padding: 3px;
  border: none;
  border-bottom: ${({err}) => err ? '3px solid rgb(255, 64, 64)' : '1px solid #FFFFFF' };
  width: ${({small}) => small ? '48%' : '100%' };
  height: 42px;
  color: #FFFFFF;

  ::placeholder {
    color: #ABABAB;
  }
  :focus { 
    outline: 0;
    border-bottom: 3px solid #FFFFFF;
  }

  :-webkit-autofill,
  :-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
const Submit = styled.button`
  background-color: transparent;
  border: none;
  margin-top: 20px;
  color: #00EAFA;
  font-size: 21px;
  cursor: pointer;
  
  :hover {
    color: #FFFFFF;
  }
  
  :disabled {
    color: #ABABAB;
    cursor: not-allowed;
  }
`
const TextArea = styled.textarea`
  margin-top: 20px;
  height: 106px;
  background-color: transparent;
  padding: 3px;
  border: none;
  border-bottom: ${({err}) => err ? '3px solid rgb(255, 64, 64)' : '1px solid #FFFFFF' };
  color: #FFFFFF;
  width: 100%;
  resize: none;

  ::placeholder {
    color: #ABABAB;
  }
  :focus {
    outline: 0;
    border-bottom: 3px solid #FFFFFF;
  }
`
const ResultMessage = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  top: 45%;
  left: calc(50% - 50px);
  border-radius: 18px;
  padding: 10px 0;
  line-height: 30px;
  background-color: ${({res}) => res ? res === resultText.SUCCESS ? '#00EAFA' : '#f466c6' : 'transparent'};
  opacity: ${({res}) => res ? 1 : 0};

  transition: opacity 0.4s ease;
`
const resultText = {
  SUCCESS: 'SENT!',
  FAILED: 'FAILED...'
}

export const SixthSection = () => {
  const [result, setResult] = useState(undefined)
  return (
      <ContentWrap>
        <ResultMessage res={result}>{result}</ResultMessage>
        <Text>{content.sixthSection.title}</Text>
        <Formik
            initialValues={{ name: '', email: '', subject: '', message: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.subject) {
                errors.subject = 'Required';
              }
              return errors;
            }}
            onSubmit={(values,{ setSubmitting, resetForm }) => {
              emailjs.send(emailjsValues.serviceID, emailjsValues.templateID, values, emailjsValues.publicKey)
                  .then((response) => {
                    setResult(resultText.SUCCESS)
                    console.log('SUCCESS!', response.status, response.text);
                    resetForm()
                  }, (error) => {
                    setResult(resultText.FAILED)
                    console.log('FAILED...', error);
                  });
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
              setTimeout(() => {
                setResult(undefined)
              }, 2500);
            }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <InputsWrap>
                  <Input
                      type="name"
                      name="name"
                      placeholder='Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      err={errors.name && touched.name}
                      small
                  />
                  <Input
                      type="email"
                      name="email"
                      placeholder='Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      err={errors.email && touched.email}
                      small
                  />
                </InputsWrap>
                <Input
                    type="subject"
                    name="subject"
                    placeholder='Subject'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                    err={errors.subject && touched.subject}
                />
                <TextArea
                    type="message"
                    name="message"
                    placeholder='Message'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    err={errors.message && touched.message}
                />
                <Submit type="submit" disabled={isSubmitting || errors.name || errors.email || errors.subject || errors.message }>
                  {content.sixthSection.button}
                </Submit>
              </form>
          )}
        </Formik>
      </ContentWrap>
  )
}
