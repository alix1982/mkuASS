import React from 'react';
// import HeaderMain from '../HeaderMain/HeaderMain.js';
// import newsList from '../../utils/newsList';
import icon_doc_1 from '../../images/icon_doc_1.png';
import documentsPlans from '../../utils/documentsListPlans';
// import docProgrammaObrazovaniya2021 from '../../utils/documents/Programma-dopolnitelnogo-professionalnogo-obrazovaniya-2024.pdf';
import { Link } from 'react-router-dom';

function DistanceLearning() {
  //   console.log(newsList)
  // function card(newNumber, key) {
  //   // console.log(newNumber.photos.length)
  //   let styleNew = false;
  //   if (newNumber.photos.length > 1) {
  //     styleNew = true;
  //   }
  //   if (styleNew) {
  //     return (
  //       <li className='news__point' key={key}>
  //         <h3 className='news__pointHeading'>{newNumber.heading}</h3>
  //         <p className='news__pointDate'>{newNumber.date}</p>
  //         {newNumber.text.map((p, index) => {
  //           return (
  //             <p className='news__pointText' key={index}>
  //               {p}
  //             </p>
  //           );
  //         })}
  //         {newNumber.photos.map((photo, index) => {
  //           return (
  //             <img
  //               src={photo}
  //               className='news__pointImg'
  //               alt='фото новостей'
  //               key={index}
  //             />
  //           );
  //         })}
  //         <ul className='news__pointList'>
  //           {newNumber.docs && newNumber.docs.map((doc) =>
  //             props.renderingDocument(doc, doc.docId)
  //           )}
  //         </ul>
  //       </li>
  //     );
  //   } else {
  //     return (
  //       <li className='news__point' key={key}>
  //         <h3 className='news__pointHeading'>{newNumber.heading}</h3>
  //         <p className='news__pointDate'>{newNumber.date}</p>
  //         {newNumber.photos && newNumber.photos.map((photo, index) => {
  //           return (
  //             <img
  //               src={photo}
  //               className='news__pointImg news__pointImgOnePhoto'
  //               align='left'
  //               alt='фото новостей'
  //               key={index}
  //             />
  //           );
  //         })}
  //         {newNumber.text.map((p, index) => {
  //           return (
  //             <p className='news__pointText' key={index}>
  //               {p}
  //             </p>
  //           );
  //         })}
  //         <ul className='news__pointList'>
  //           {newNumber.docs && newNumber.docs.map((doc) =>
  //             props.renderingDocument(doc, doc.docId)
  //           )}
  //         </ul>
  //       </li>
  //     );
  //   }
  // }

  return (
    <section className='distanceLearning'>
      {/* <h3>Дополнительные работы и услуги</h3> */}
      <p className='distanceLearning__text'>
        Для вашего удобства Курсы ГО предлагают пройти подготовку в области ГО и ЧС с
        применением дистанционных образовательных технологий.
      </p>
      <Link
        // to={docProgrammaObrazovaniya2021}
        to={'#'}
        className='documents__link'
        // target='_blank'
        rel='noreferrer'
      >
        <img className='documents__icon' src={icon_doc_1} alt='документ' />
        <p className='documents__text'>
          Положение по ДО
        </p>
      </Link>
      <p className='distanceLearning__text'>
        Прием и зачисление граждан на обучение осуществляется в соответствии со сроками,
        указанными в&ensp;
        <Link
          to={documentsPlans[0].path}
          className='distanceLearning__link'
          target='_blank'
          rel='noreferrer'
        >
          Плане комплектования курсов
        </Link>
        &ensp;и&ensp;
        <Link
          to={documentsPlans[2].path}
          className='distanceLearning__link'
          target='_blank'
          rel='noreferrer'
        >
          Плане подготовки должностных лиц
        </Link>
        &ensp;на соответствующий год.
      </p>
      <p className='distanceLearning__text'>
        Порядок действий для прохождения дистанционного обучения:
      </p>
      <ul>
        <li className='distanceLearning__text'>
          подать заявку на электронную почту Курсов ГО&ensp;
          <a className='distanceLearning__link' href="mailto:sgcc.kursy@mail.ru">
            sgcc.kursy@mail.ru
          </a>
          ;
        </li>
        <li className='distanceLearning__text'>
          пройти учебу по заявленной категории на&ensp;
          <Link
            to={'https://mku-acc-courses.ru/'}
            className='distanceLearning__link'
            target='_blank'
            rel='noreferrer'
          >
            Платформе для обучения ГО и ЧС
          </Link>
          , разработанной специалистами МКУ АСС Северодвинска;
        </li>
        <li className='distanceLearning__text'>
          получить удостоверение установленного образца.
        </li>
      </ul>
      <p className='distanceLearning__text'>
        Обучение на платформе организованно в форме подачи учебного материала в электронном виде с помощью файлов,
        архивов, веб-страниц, лекций, а также проверки знаний с помощью тестов.
      </p>
      <p className='distanceLearning__text'>
        По вопросам обращайтесь:
      </p>
      <ul>
        <li className='distanceLearning__text'>
          телефон&ensp;
          <a className='distanceLearning__link' href="tel:+78184551377">
            +7 (8184) 55-13-77
          </a>
        </li>
        <li className='distanceLearning__text'>
          электронная почта&ensp;
          <a className='distanceLearning__link' href="mailto:sgcc.kursy@mail.ru">
            sgcc.kursy@mail.ru
          </a>
        </li>
      </ul>
    </section>
  );
}

export default DistanceLearning;
