import React from 'react';
import documentsApplications from '../../../utils/documentsListApplications';

function SampleApplications (props) {
  return (
    <section className="sampleApplications">
      <ul className="documents__list">
        {documentsApplications.map((doc)=>{
          return (props.renderingDocument(doc, doc.docId))
        })}
      </ul>
    </section>
  )
}

export default SampleApplications