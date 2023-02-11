import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc_1 from '../../../images/icon_doc_1.png';
import documentsPlans from '../../../utils/documentsListPlans';
import docProgrammaObrazovaniya2021 from '../../../utils/documents/Programma-dopolnitelnogo-professionalnogo-obrazovaniya-2021g-1.pdf';
import docFormaZayavki from '../../../utils/documents/documentsApplications/Forma-zayavki-na-povyshenie-kvalifikaczii.doc';

function Education(props) {
  // console.log(documents);
  return (
    <section className='education'>
      <ul className='education__list'>
        <li className='education__point'>
          <h3 className='education__pointHeading'>Уровень образования</h3>
          <p className='education__pointText'>
            Дополнительное профессиональное образование
          </p>
        </li>
        <li className='education__point'>
          <h3 className='education__pointHeading'>Формы обучения</h3>
          <p className='education__pointText'>
            Очная, очно-заочная (с применением электронного обучения и
            дистанционных образовательных технологий).
          </p>
        </li>
        <li className='education__point'>
          <h3 className='education__pointHeading'>
            Реализуемые Учреждением образовательные программы
          </h3>
          <Link
            to={docProgrammaObrazovaniya2021}
            className='documents__link'
            target='_blank'
            rel='noreferrer'
          >
            <img className='documents__icon' src={icon_doc_1} alt='документ' />
            <p className='documents__text'>
              Программа дополнительного профессионального образования повышения
              квалификации должностных лиц и специалистов гражданской обороны и
              единой государственной системы предупреждения и ликвидации
              чрезвычайных ситуаций на Курсах ГО МКУ «АСС Северодвинска»
            </p>
          </Link>
        </li>

        <li className='education__point'>
          <h3 className='education__pointHeading'>
            Документы, разработанные Учреждением для обеспечения
            образовательного процесса
          </h3>
          <p className='education__pointText'>
            Документы, разработанные Учреждением для обеспечения
            образовательного процесса, размещены на официальном сайте Учреждения
            в разделе «Сведения об образовательной организации» подраздел&#8194;
            <Link to='/documentsEducation' className='education__pointTextLink'>
              «Документы» (копии локальных актов).
            </Link>
          </p>
        </li>

        <li className='education__point'>
          <h3 className='education__pointHeading'>
            Численность обучающихся по реализуемым образовательным программам
          </h3>
          <p className='education__pointText'>
            Учебный процесс на курсах осуществляется в течение календарного
            года. Для каждой группы обучающихся (слушателей) разрабатывается
            расписание занятий на весь период обучения.
          </p>
          <p className='education__pointText'>
            Продолжительность обучения каждой категории слушателей определяется
            образовательной программой.
          </p>
          <p className='education__pointText'>
            Прием и зачисление граждан на обучение осуществляется согласно плану
            комплектования курсов на текущий год..
          </p>
          <ul className='documents__pointList'>
            {documentsPlans.map((doc) => {
              return props.renderingDocument(doc, doc.docId);
            })}
          </ul>
        </li>

        <li className='education__point'>
          <h3 className='education__pointHeading'>Образовательные стандарты</h3>
          <p className='education__pointText'>
            Федеральные государственные образовательные стандарты не
            используются.
          </p>
        </li>
        <li className='education__point'>
          <h3 className='education__pointHeading'>
            Заявки на повышение квалификации
          </h3>
          <p className='education__pointText'>
            Заявки на повышение квалификации должностных лиц принимаются по тел.
            8(8184) 55-13-77, на электронную почту курсов sgcc.kursy@mail.ru до
            01 августа года, предшествующего году обучения.
          </p>
          <Link
            to={docFormaZayavki}
            className='documents__link'
            target='_blank'
            rel='noreferrer'
          >
            <img className='documents__icon' src={icon_doc_1} alt='документ' />
            <p className='documents__text'>
              Форма заявки на повышение квалификации должностных лиц
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Education;
