import React from 'react';
// import { Link } from 'react-router-dom';
// import icon_doc from '../../../images/icon_doc.png';
import documents from '../../../utils/documentsList';

function Documents(props) {
  return (
    <section className='documents'>
      <ul className='documents__list'>
        {documents.map((doc) => {
          return props.renderingDocument(doc, doc.docId);
        })}
      </ul>
    </section>
  );
}

export default Documents;
