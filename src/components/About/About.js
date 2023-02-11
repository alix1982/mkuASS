import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Managers from './Managers/Managers.js';
import Purpose from './Purpose/Purpose.js';

function About() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/purpose' element={<Purpose />} />
        {/* <Route path="/managers" element={
          <Managers/>
        }/>
        <Route path="/managers" element={
          <Managers/>
        }/> */}
      </Routes>
      {/* <Managers/> */}
    </main>
  );
}

export default About;
