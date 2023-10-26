import React from 'react';
// import { useEffect, useState } from 'react';
import pozdyakov from '../../../images/photoManagers/Pozdyakov.jpg';
import nikulin from '../../../images/photoManagers/Nikulin.jpg';
import sopin from '../../../images/photoManagers/Sopin.jpg';
// import konopleva from '../../../images/photoManagers/Konopleva.jpg';
import maksimova from '../../../images/photoManagers/Maksimova.jpg';
import kondratova from '../../../images/photoManagers/Kondratova.jpg';
import { Link } from 'react-router-dom';
// import icon_email from '../../../images/icon_email.png';


function Managers() {
  // добавить цикл с отрисовкой карточек
  return (
    <section className='managers'>
      <ul className='managers__list'>
        <li className='manager'>
          <div className='manager__contentPhoto'>
            <img src={pozdyakov} className='manager__photo' />
            <div className='manager__description'>
              <div>
                <h4>Опыт работы:</h4>
                <p>
                  С 2008 года работал спасателем Аварийно-спасательной службы Северодвинска, начальником поисково-спасательного отряда, заместителем начальника службы по поисково-спасательной работе. В мае 2022 г. назначен на должность начальника службы.
                </p>
              </div>
              <p>
                Email: <Link to="mailto:sgssnpso@yandex.ru">sgssnpso@yandex.ru</Link>
                {/* <a href="mailto:sgssnpso@yandex.ru">sgssnpso@yandex.ru</a> */}
              </p>
            </div>
          </div>
          <p className='manager__name'>Поздяков Дмитрий Юрьевич</p>
          <p className='manager__post'>
            Начальник МКУ &quot;АСС Северодвинска&quot;
          </p>
        </li>
        <li className='manager'>
          <div className='manager__contentPhoto'>
            <img src={nikulin} className='manager__photo' />
            <p className='manager__description'>
              Поздяков Дмитрий Юрьевич. Родился 5 октября 1982 в г.Северодвинске, Архангельской области. В 2004 г. окончил Архангельский государственный технический университет по специальности «Лесное и лесопарковое хозяйство». С 2005 по 2007 г. проходил срочную службу на Тихоокеанском флоте, в должности командира роты морской пехоты.
              С 2008 года работал спасателем Аварийно-спасательной службы Северодвинска, начальником поисково-спасательного отряда, заместителем начальника службы по поисково-спасательной работе. В мае 2022 г. назначен на должность начальника службы.
            </p>
          </div>
          <p className='manager__name'>Никулин Александр Васильевич</p>
          <p className='manager__post'>Заместитель начальника по ПСР</p>
        </li>
        <li className='manager'>
          <div className='manager__contentPhoto'>
            <img src={sopin} className='manager__photo' />
            <p className='manager__description'>
              Поздяков Дмитрий Юрьевич. Родился 5 октября 1982 в г.Северодвинске, Архангельской области. В 2004 г. окончил Архангельский государственный технический университет по специальности «Лесное и лесопарковое хозяйство». С 2005 по 2007 г. проходил срочную службу на Тихоокеанском флоте, в должности командира роты морской пехоты.
              С 2008 года работал спасателем Аварийно-спасательной службы Северодвинска, начальником поисково-спасательного отряда, заместителем начальника службы по поисково-спасательной работе. В мае 2022 г. назначен на должность начальника службы.
            </p>
          </div>
          <p className='manager__name'>Сопин Константин Вячеславович</p>
          <p className='manager__post'>Начальник ПСО</p>
        </li>
        <li className='manager'>
          <div className='manager__contentPhoto'>
            <img src={kondratova} className='manager__photo' />
            <p className='manager__description'>
              Поздяков Дмитрий Юрьевич. Родился 5 октября 1982 в г.Северодвинске, Архангельской области. В 2004 г. окончил Архангельский государственный технический университет по специальности «Лесное и лесопарковое хозяйство». С 2005 по 2007 г. проходил срочную службу на Тихоокеанском флоте, в должности командира роты морской пехоты.
              С 2008 года работал спасателем Аварийно-спасательной службы Северодвинска, начальником поисково-спасательного отряда, заместителем начальника службы по поисково-спасательной работе. В мае 2022 г. назначен на должность начальника службы.
            </p>
          </div>
          <p className='manager__name'>Кондратова Елена Александровна</p>
          <p className='manager__post'>Главный бухгалтер</p>
        </li>
        <li className='manager'>
          <div className='manager__contentPhoto'>
            <img src={maksimova} className='manager__photo' />
            <p className='manager__description'>
              Поздяков Дмитрий Юрьевич. Родился 5 октября 1982 в г.Северодвинске, Архангельской области. В 2004 г. окончил Архангельский государственный технический университет по специальности «Лесное и лесопарковое хозяйство». С 2005 по 2007 г. проходил срочную службу на Тихоокеанском флоте, в должности командира роты морской пехоты.
              С 2008 года работал спасателем Аварийно-спасательной службы Северодвинска, начальником поисково-спасательного отряда, заместителем начальника службы по поисково-спасательной работе. В мае 2022 г. назначен на должность начальника службы.
            </p>
          </div>
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
