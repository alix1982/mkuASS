import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc_1 from '../../../images/icon_doc_1.png';
import docObespechenii from '../../../utils/documents/spravka-o-materialno-tehnicheskom-obespechenii-obrazovatelnoj-deyatelnosti-1.pdf';
import docLiteratury from '../../../utils/documents/Spravka-o-nalichii-uchebnoj-uchebno-metodicheskoj-literatury-i-inyh-sredstv-obespecheniya-obrazovatelnogo-proczessa.pdf';
import foto1 from '../../../images/photoTrainingClass/1.jpg';
import foto2 from '../../../images/photoTrainingClass/2.jpg';
import foto3 from '../../../images/photoTrainingClass/3.jpg';
import foto4 from '../../../images/photoTrainingClass/4.jpg';

function UsefulInformation (props) {
//   console.log(documents);

  return (
    <section className="usefulInformation">
      <Link to={docObespechenii} className="documents__link" target="_blank" rel="noreferrer">
        <img className="documents__icon" src={icon_doc_1} alt="документ"/>
        <p className="documents__text">Справка о материально-техническом обеспечении образовательной деятельности по образовательным программам МКУ «Аварийно-спасательная служба Северодвинска»</p>
      </Link>
      <Link to={docLiteratury} className="documents__link" target="_blank" rel="noreferrer">
        <img className="documents__icon" src={icon_doc_1} alt="документ"/>
        <p className="documents__text">Справка о наличии учебной, учебно-методической литературы и иных средств обеспечения образовательного процесса</p>
      </Link>
      <h3 className="usefulInformation__heading">Учебно-материальная база МКУ «Аварийно-спасательная служба Северодвинска» позволяет эффективно, наглядно и практически направленно реализовывать программы повышения квалификации должностных лиц и специалистов ГО и РСЧС:</h3>
      <ul className="usefulInformation__list">
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Наличие оборудованного учебного и методического кабинетов:</h4>
          <ul className="usefulInformation__subList">
            <li className="usefulInformation__subpoint">
              <h5 className="usefulInformation__subpointHeading">Учебный кабинет (S= 67,8 кв.м)</h5>
              <ul className="usefulInformation__listImg">
                <img className="usefulInformation__subpointImg" src={foto1} alt="класс"/>
                <img className="usefulInformation__subpointImg" src={foto2} alt="класс"/>
               <img className="usefulInformation__subpointImg" src={foto3} alt="класс"/>
                <img className="usefulInformation__subpointImg" src={foto4} alt="класс"/>
              </ul>
              <ul className="usefulInformation__subpointList">
                <li className="usefulInformation__subpointPoint">Столы – 17 шт.</li>
                <li className="usefulInformation__subpointPoint">Стулья – 35 шт.</li>
                <li className="usefulInformation__subpointPoint">Тематические стенды —  8 шт.</li>
                <li className="usefulInformation__subpointPoint">Компьютер в комплекте – 3 шт.</li>
                <li className="usefulInformation__subpointPoint">Звуковые колонки – 2 шт.</li>
                <li className="usefulInformation__subpointPoint">Телевизор – 1 шт.</li>
                <li className="usefulInformation__subpointPoint">Витрины со средствами индивидуальной защиты и наглядными пособиями – 3 шт.</li>
                <li className="usefulInformation__subpointPoint">Экран проекционный – 1 шт.</li>
                <li className="usefulInformation__subpointPoint">Мультимедийный проектор – 1 шт.</li>
                <li className="usefulInformation__subpointPoint">Манекен-тренажер «Resusci  Anne» — 1 шт.</li>
                <li className="usefulInformation__subpointPoint">Манекен-тренажер «Little Anne» – 4 шт.</li>
                <li className="usefulInformation__subpointPoint">Индивидуальные средства защиты: — разновидности респираторов — 4 шт.; — разновидности противогазов – 2 шт.; капюшон защитный «Феникс» — 2 шт.; самоспасатель ГДЗК- 2 шт.; разновидности средств защиты кожи – 2  шт.</li>
                <li className="usefulInformation__subpointPoint">Приборы радиационной и химической разведки: Дозиметр «Радэкс» РД 1706 (портативный детектор-индикатор радиоактивности)– 1 шт.; Радиометр-рентгенометр ДП – 5В – 2шт.; дозиметр-радиометр типа ДКГ-РМ1621 – 1 шт.; ВПХР – 2 шт.; метеокомплект- 1шт.</li>
                <li className="usefulInformation__subpointPoint">Первичные средства пожаротушения: макеты  огнетушителей – 2 шт.</li>
                <li className="usefulInformation__subpointPoint">Медицинские средства защиты, средства для оказания первой помощи:   — КИМГЗ — 2 шт.;  — АИ-2 — 2 шт.; — ИПП-11– 2 шт.; сумка санитарная – 1 шт.; комплект противоожоговый «Апполо»- 1шт.; аптечка «Гало» — набор изделий травматологический первой медицинской помощи – 1шт.</li>
                <li className="usefulInformation__subpointPoint">доска  магнитная – 1 шт.; доска перекатная – 1 шт.</li>
              </ul>
            </li>
            <li>
              <h5 className="usefulInformation__subpointHeading">Методический кабинет  (S= 10,3 кв.м)</h5>
              <ul className="usefulInformation__subpointList">
                <li className="usefulInformation__subpointPoint">Компьютер с выходом в сеть «Интернет»</li>
                <li className="usefulInformation__subpointPoint">Учебная и методическая литература</li>
                <li className="usefulInformation__subpointPoint">Папки с раздаточными материалами для различных категорий слушателей в электронном виде.</li>
                <li className="usefulInformation__subpointPoint">Подписки периодических изданий: «Гражданская защита» (научно-практический и методический журнал); «Основы безопасности жизнедеятельности» (информационно-методическое издание для преподавателей); «ОБЖ. Основы безопасности жизни» (научно-методический и информационный журнал); «112 Единая служба спасения» (Всероссийский информационно-аналитичекий журнал); «Вестник МЧС».</li>
              </ul>
            </li>
          </ul>
          <p className="usefulInformation__pointText">Оборудованного учебного и методического  кабинета, объектов для проведения практических занятий, библиотек, объектов спорта, средств обучения и воспитания, приспособленных для использования инвалидами и лицами с ограниченными возможностями Учреждение не имеет, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Обеспечение доступа в здания образовательной организации инвалидов и лиц с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Доступ в здание Учреждения для инвалидов и лиц с ограниченными возможностями здоровья не предусмотрен, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Условия питания обучающихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Питание для обучающихся, в том числе для инвалидов и лиц  с ограниченными возможностями здоровья в Учреждении не предусмотрено, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Условия охраны здоровья обучающихся, в том числе инвалидов и лиц с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Условий для охраны здоровья инвалидов и лиц с ограниченными возможностями здоровья в Учреждении не предусмотрено, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Доступ к информационным системам и информационно-телекоммуникационным сетям, в том числе приспособленным для использования инвалидами и лицами с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Доступа к информационным системам и информационно-телекоммуникационным сетям, приспособленным использования инвалидами и лицами с ограниченными возможностями здоровья в Учреждении не имеется, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Электронные образовательные ресурсы, к которым обеспечивается доступ обучающихся, в том числе приспособленные для использования инвалидами и лицами с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Организован доступ обучающихся к электронным образовательным ресурсам, расположенным на компьютерах Учреждения в учебном и методическом кабинетах, а также информационно- телекоммуникационной сети «Интернет».</p>
          <p className="usefulInformation__pointText">Доступ к электронным образовательным ресурсам, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья в Учреждении не организовывается, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Наличие специальных технических средств обучения коллективного и индивидуального пользования для инвалидов и лиц с ограниченными возможностями здоровья:</h4>
          <p className="usefulInformation__pointText">Специальными техническими средствами обучения коллективного и индивидуального пользования для инвалидов и лиц с ограниченными возможностями здоровья Учреждение не располагает, в связи со спецификой реализуемых образовательных программ в области ГО и РСЧС.</p>
          <p className="usefulInformation__pointText">Курсы ГО  «АСС Северолдвинска» размещены на третьем этаже нежилого жилого 3-х этажного дома по адресу г.Северодвинск, улица Лесная, 25 и занимает общую площадь 109,3 кв. м, на которой размещены учебный кабинет,  преподавательские, методический кабинет, туалеты.</p>
        </li>
        <li className="usefulInformation__point">
          <h4 className="usefulInformation__pointHeading">Оборудованный стендами, компьютерной техникой и учебно-наглядными пособиями учебный кабинет — на 32  посадочных места:</h4>
          <p className="usefulInformation__pointText">Учебный кабинет оснащен мультимедийным проектором, персональными компьютерами, манекенами- тренажерами, приборами, стендами, плакатами и учебной литературой, необходимыми для проведения теоретических и практических занятий со слушателями в области ГО и РСЧС.</p>
        </li>
      </ul>
    </section>
  )
}

export default UsefulInformation
