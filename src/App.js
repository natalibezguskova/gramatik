import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import {termsAndConditionsTexts, privacyPolicyTexts} from "./assets/content/info/conditions";
import Home from "./pages/home/Home";
import Conditions from "./pages/conditions/Conditions";
import './App.css';

export const ConditionsType = {
  privacyPolicy: 'privacyPolicy',
  termsAndConditions: 'termsAndConditions'
}

export const ConditionsTexts = {
  [ConditionsType.privacyPolicy]: privacyPolicyTexts,
  [ConditionsType.termsAndConditions]: termsAndConditionsTexts
}

export const conditions = (type) => `/conditions/${type}`

const App = () => {
  return (
      <HashRouter basename='/'>
        <Routes>
          <Route path={conditions(':type')} element={<Conditions/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </HashRouter>
  )
}

export default App;
