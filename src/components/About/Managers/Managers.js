import React from 'react';
// import { useEffect, useState } from 'react';
import pozdyakov from '../../../images/photoManagers/Pozdyakov.jpg';
import nikulin from '../../../images/photoManagers/Nikulin.jpg';
import sopin from '../../../images/photoManagers/Sopin.jpg';
import konopleva from '../../../images/photoManagers/Konopleva.jpg';
import maksimova from '../../../images/photoManagers/Maksimova.jpg';

function Managers() {
  // добавить цикл с отрисовкой карточек
  return (
    <section className='managers'>
      <ul className='managers__list'>
        <li className='manager'>
          <img src={pozdyakov} className='manager__photo' />
          <p className='manager__name'>Поздяков Дмитрий Юрьевич</p>
          <p className='manager__post'>
            Начальник МКУ &quot;АСС Северодвинска&quot;
          </p>
        </li>
        <li className='manager'>
          <img src={nikulin} className='manager__photo' />
          <p className='manager__name'>Никулин Александр Васильевич</p>
          <p className='manager__post'>Заместитель начальника по ПСР</p>
        </li>
        <li className='manager'>
          <img src={sopin} className='manager__photo' />
          <p className='manager__name'>Сопин Константин Вячеславович</p>
          <p className='manager__post'>Начальник ПСО</p>
        </li>
        <li className='manager'>
          <img src={konopleva} className='manager__photo' />
          <p className='manager__name'>Коноплева Наталья Владимировна</p>
          <p className='manager__post'>Главный бухгалтер</p>
        </li>
        <li className='manager'>
          <img src={maksimova} className='manager__photo' />
          <p className='manager__name'>Максимова Олеся Владимировна</p>
          <p className='manager__post'>
            Начальник курсов ГО, защиты от ЧС и пожарной безопасности
            Северодвинска
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Managers;
