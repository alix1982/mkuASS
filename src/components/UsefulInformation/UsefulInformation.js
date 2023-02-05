import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc from '../../images/icon_doc.png';
import documentsInformation from '../../utils/documentsListInformation';

function UsefulInformation (props) {
//   console.log(documents);

  return (
    <section className="usefulInformation">
      <h3 className="usefulInformation__heading">Памятки для населения</h3>
      <ul className="usefulInformation__list">
        {documentsInformation.map((doc)=>{
          return (props.renderingDocument(doc, doc.docId))
        })}
      </ul>
    </section>
  )
}

export default UsefulInformation
