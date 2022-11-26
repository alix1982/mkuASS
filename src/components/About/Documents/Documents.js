import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc from '../../../images/icon_doc.png';
import documents from '../../../utils/documentsList';

function Documents (props) {
//   console.log(documents);
  function renderingDocument(doc, key) {
    return (
      <li className="documents__point" key={key}>
        <Link to={doc.path} className="documents__link" target="_blank" rel="noreferrer">
          <img className="documents__icon" src={doc.typeDoc} alt="документ"/>
          <p className="documents__text">{doc.titleDoc}</p>
        </Link>
        
      </li>
    )
  }
  return (
    <section className="documents">
      <p>Страница в тестовом режиме</p>
      <ul className="documents__list">
        {documents.map((doc)=>{
          return (renderingDocument(doc, doc.docId))
        })}
      </ul>
    </section>
  )
}

export default Documents