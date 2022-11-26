import React from 'react';

function Vacancy (props) {

  return (
    <section className="vacancy">
      <ul className="vacancy__list">
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Наименование профессии (специальности), должности</p>
          <p className="vacancy__pointText">Спасатель</p>
          <p className="vacancy__pointText">Некто</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Необходимое количество работников</p>
          <p className="vacancy__pointText">2</p>
          <p className="vacancy__pointText">1</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Характер работы (постоянная, временная, по совместительству, сезонная, надомная, дистанционная)</p>
          <p className="vacancy__pointText">постоянная</p>
          <p className="vacancy__pointText">сезонная</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Заработная плата (доход) от, до</p>
          <p className="vacancy__pointText">от 30000</p>
          <p className="vacancy__pointText">до 100000</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Режим работы (нормальная продолжительность рабочего времени, ненормированный рабочий день, работа в режиме гибкого рабочего времени, сокращенная продолжительность рабочего времени, сменная работа, вахтовым методом)</p>
          <p className="vacancy__pointText">Сменная работа дежурство – 24 часа <br/>09.00 - 09.00</p>
          <p className="vacancy__pointText">пятидневка, <br/>09.00 - 12.00</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Профессионально-квалификационные требования, образование, дополнительные навыки, опыт работы</p>
          <p className="vacancy__pointText">Среднее специальное</p>
          <p className="vacancy__pointText">высшее</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Дополнительные пожелания к кандидатуре работника</p>
          <p className="vacancy__pointText">Права кат В</p>
          <p className="vacancy__pointText">ум, смекалка, трудолюбие, комуникабельность, добросовестность, аскет</p>
        </li>
        <li className="vacancy__point">
          <p className="vacancy__pointHeader">Класс условий труда</p>
          <p className="vacancy__pointText">4</p>
          <p className="vacancy__pointText">1</p>
        </li>
      </ul>
    </section>
  )
}

export default Vacancy