import React from 'react';
// import { useEffect, useState } from 'react';
import svidetelstvo from '../../../images/licenses/Svidetelstvo2021-1-1.jpg';
import obrLicense_1 from '../../../images/licenses/Obrazovatelnaya-liczenziya_Stranicza_1.jpg';
import obrLicense_2 from '../../../images/licenses/Obrazovatelnaya-liczenziya_Stranicza_2.jpg';
import obrLicense_3 from '../../../images/licenses/Obrazovatelnaya-liczenziya_Stranicza_3.jpg';
import medLicense_1 from '../../../images/licenses/Liczenziya-na-mediczinskuyu-deyatelnost-1-001.jpg';
import medLicense_2 from '../../../images/licenses/Liczenziya-na-mediczinskuyu-deyatelnost-2-001.jpg';
import medLicense_3 from '../../../images/licenses/Liczenziya-na-mediczinskuyu-deyatelnost-3-001.jpg';

function Licenses(props) {
  return (
    <section className='licenses'>
      <h2 className='licenses__header'>Лицензии и свидетельства</h2>
      <ul className='licenses__list'>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(svidetelstvo);
            }}
          >
            <img src={svidetelstvo} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(obrLicense_1);
            }}
          >
            <img src={obrLicense_1} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(obrLicense_2);
            }}
          >
            <img src={obrLicense_2} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(obrLicense_3);
            }}
          >
            <img src={obrLicense_3} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(medLicense_1);
            }}
          >
            <img src={medLicense_1} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(medLicense_2);
            }}
          >
            <img src={medLicense_2} className='licenses__photo' />
          </button>
        </li>
        <li className='licenses__point'>
          <button
            className='licenses__buttonPopup'
            onClick={() => {
              props.openImg(medLicense_3);
            }}
          >
            <img src={medLicense_3} className='licenses__photo' />
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Licenses;
