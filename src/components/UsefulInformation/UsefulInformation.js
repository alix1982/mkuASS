import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc from '../../images/icon_doc.png';
import documents from '../../utils/documentsList';

function UsefulInformation (props) {
//   console.log(documents);
  function renderingDocument(doc, key) {
    return (
      <li className="usefulInformation__point" key={key}>
        <Link to={doc.path} className="usefulInformation__link" target="_blank" rel="noreferrer">
          <img className="usefulInformation__icon" src={doc.typeDoc} alt="документ"/>
          <p className="usefulInformation__text">{doc.titleDoc}</p>
        </Link>
        
      </li>
    )
  }
  return (
    <section className="usefulInformation">
      <p>Страница в тестовом режиме</p>
      <ul className="usefulInformation__list">
        {documents.map((doc)=>{
          return (renderingDocument(doc, doc.docId))
        })}
      </ul>
    </section>
  )
}

export default UsefulInformation