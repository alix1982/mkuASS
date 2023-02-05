import React from 'react';
import { Link } from 'react-router-dom';
import foto1 from '../../../images/photoBasicInformation/1.jpg';
import foto2 from '../../../images/photoBasicInformation/2.jpg';
import foto3 from '../../../images/photoBasicInformation/3.jpg';
import foto4 from '../../../images/photoBasicInformation/4.jpg';

function BasicInformation (props) {

  return (
    <section className="basicInformation">
      <p className="basicInformation__text">В 2009 году в целях организации подготовки и обучения населения в области гражданской обороны, защиты от чрезвычайных ситуаций природного и техногенного характера на базе «Аварийно-спасательной службы Северодвинска» было создано структурное подразделение, осуществляющее образовательную деятельность — отдел подготовки специалистов ГОЧС (Распоряжение мэра Северодвинска №152-р от 02.06.2009 г). В дальнейшем отдел был переименован в Курсы гражданской обороны.</p>
      <ul className="basicInformation__list">
        <li className="basicInformation__point">
          <img className="basicInformation__pointImg" src={foto1}/>
        </li>
        <li className="basicInformation__point">
          <img className="basicInformation__pointImg" src={foto2}/>
        </li>
        <li className="basicInformation__point">
          <img className="basicInformation__pointImg" src={foto3}/>
        </li>
        <li className="basicInformation__point">
          <img className="basicInformation__pointImg" src={foto4}/>
        </li>
      </ul>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Учредитель:</span> муниципальное образование «Северодвинск» в лице Администрации Северодвинска.</p>
      <p className="basicInformation__text">Функции и полномочия Учредителя от имени Администрации Северодвинска осуществляет муниципальное казенное учреждение «Отдел гражданской защиты Администрации Северодвинска»</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Адрес Учредителя: </span>164501, Архангельская область, г. Северодвинск, улица Торцева, 53.</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Телефон/факс: </span>(8184) 58-31-95</p>
      <p className="basicInformation__text"> Учреждение находится в ведомственном подчинении <span className="basicInformation__textSpan">муниципального казенного учреждения «Отдел гражданской защиты Администрации Северодвинска»</span></p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Муниципальное казенное учреждение «Аварийно-спасательная служба Северодвинска»</span></p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Начальник: </span>Поздяков Дмитрий Юрьевич</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Адрес учреждения: </span>164500, Архангельская область, г. Северодвинск, улица Лесная, 25</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Телефон: </span>(8184) 50-00-01; факс (8184) 56-55-16;</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Е-mail: </span>sgcc@list.ru</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Адрес сайта: </span> acc-severodvinska.ru</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Режим работы курсов гражданской обороны: </span> ПН-ПТ — 08.30 — 16.30, обед 12.15 — 13.15</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Начальник курсов гражданской обороны: </span>Максимова Олеся Владимировна</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Телефон курсов гражданской обороны: </span> (8184) 55-13-77;</p>
      <p className="basicInformation__text"><span className="basicInformation__textSpan">Е-mail курсов гражданской обороны: </span> sgcc.kursy@mail.ru</p>
      <p className="basicInformation__text">Филиалами и дополнительными корпусами образовательная организация не располагает.</p>
    </section>
  )
}

export default BasicInformation