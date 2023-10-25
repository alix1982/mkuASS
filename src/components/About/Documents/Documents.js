import React from 'react';
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
