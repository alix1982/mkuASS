import React from 'react';
import documentsApplications from '../../../utils/documentsListApplications';

function SampleApplications(props) {
  return (
    <section className='sampleApplications'>
      <ul className='documents__list'>
        {documentsApplications.map((doc) => {
          return props.renderingDocument(doc, doc.docId);
        })}
      </ul>
      {/* <p className='sampleApplications__comment'>
        Заявки на проведение экскурсий в 2024г не принимаются.<br/>Будем рады встретиться в 2025г
      </p> */}
    </section>
  );
}

export default SampleApplications;
