import React from 'react';
// import { Link } from 'react-router-dom';
// import icon_doc from '../../../images/icon_doc.png';
// import documents from '../../../utils/documentsList';
import documentsEducation from '../../../utils/documentsListEducation';
import documentsCheck from '../../../utils/documentsListСheck';

function DocumentsEducation(props) {
  // console.log(documents);

  return (
    <section className='documentsEducation'>
      <ul className='documentsEducation__list'>
        <li className='documentsEducation__point'>
          <h3 className='documentsEducation__pointHeading'>
            Локальные акты учреждения по организации образовательной
            деятельности
          </h3>
          <ul className='documents__pointList'>
            {documentsEducation.map((doc) => {
              return props.renderingDocument(doc, doc.docId);
            })}
          </ul>
        </li>
        <li className='documentsEducation__point'>
          <h3 className='documentsEducation__pointHeading'>
            Документы об оказании платных образовательных услуг
          </h3>
          <p className='documentsEducation__pointText'>
            МКУ «АСС Северодвинска» не оказывает платных образовательных услуг
          </p>
        </li>
        <li className='documentsEducation__point'>
          <h3 className='documentsEducation__pointHeading'>
            Предписания органов, осуществляющих государственный контроль
            (надзор) в сфере образования, отчеты об исполнении таких предписаний
          </h3>
          <ol className='documentsEducation__nestedList'>
            <li className='documentsEducation__pointNestedList'>
              <p className='documentsEducation__textPointNestedList'>
                <span className='documentsEducation__underlinedTextPointNestedList'>
                  Плановая выездная проверка
                </span>
                Управления надзора в сфере образования Министерства образования
                и науки Архангельской области.
                <span className='documentsEducation__underlinedTextPointNestedList'>
                  Распоряжение
                </span>
                от 24.12.2018 г. №2310.
                <span className='documentsEducation__underlinedTextPointNestedList'>
                  Задачи проверки:
                </span>
                контроль соблюдения лицензиатом лицензионных требований при
                осуществлении образовательной деятельности; осуществление
                федерального государственного надзора в сфере образования за
                деятельностью учреждения.
              </p>
              <ul className='documents__pointList'>
                {documentsCheck.map((doc) => {
                  return props.renderingDocument(doc, doc.docId);
                })}
              </ul>
            </li>
          </ol>
        </li>
      </ul>
    </section>
  );
}

export default DocumentsEducation;
