import React from 'react';

function Vacancy() {
  const isVacancy = false;

  return (
    <section className='vacancy'>
      {isVacancy ? (
        <ul className='vacancy__list'>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Наименование профессии (специальности), должности
            </p>
            <p className='vacancy__pointText'>Экономист</p>
            {/* <p className="vacancy__pointText">Некто</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Необходимое количество работников
            </p>
            <p className='vacancy__pointText'>1</p>
            {/* <p className="vacancy__pointText">1</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Характер работы (постоянная, временная, по совместительству,
              сезонная, надомная, дистанционная)
            </p>
            <p className='vacancy__pointText'>постоянная</p>
            {/* <p className="vacancy__pointText">сезонная</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Заработная плата (доход) от, до
            </p>
            <p className='vacancy__pointText'>38000 - 47000</p>
            {/* <p className="vacancy__pointText">до 100000</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Режим работы (нормальная продолжительность рабочего времени,
              ненормированный рабочий день, работа в режиме гибкого рабочего
              времени, сокращенная продолжительность рабочего времени, сменная
              работа, вахтовым методом)
            </p>
            <p className='vacancy__pointText'>
              пятидневка <br />
              суббота, воскресенье выходной
            </p>
            {/* <p className="vacancy__pointText">пятидневка, <br/>09.00 - 12.00</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Профессионально-квалификационные требования, образование,
              дополнительные навыки, опыт работы
            </p>
            <p className='vacancy__pointText'>Высшее</p>
            {/* <p className="vacancy__pointText">высшее</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>
              Дополнительные пожелания к кандидатуре работника
            </p>
            <p className='vacancy__pointText'>
              Знание: ФЗ 44, 1С-бухгалтерия 8.2
            </p>
            {/* <p className="vacancy__pointText">ум, смекалка, трудолюбие, комуникабельность, добросовестность, аскет</p> */}
          </li>
          <li className='vacancy__point'>
            <p className='vacancy__pointHeader'>Класс условий труда</p>
            <p className='vacancy__pointText'>2</p>
            {/* <p className="vacancy__pointText">1</p> */}
          </li>
        </ul>
      ) : (
        <h2 className='vacancy__none'>Вакансий нет</h2>
      )}
    </section>
  );
}

export default Vacancy;
