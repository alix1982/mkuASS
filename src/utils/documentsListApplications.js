import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
// import docPdf from './documents/documentsApplications/test_pdf.pdf';
import docZayavkiEkskursija from './documents/documentsApplications/Obrzec-zajavki-na-ekskursiu.doc';
import docZayavkiKvalifikaczii from './documents/documentsApplications/Forma-zayavki-na-povyshenie-kvalifikaczii-dlya-dolzhnostnyh-licz.doc';
// import doc from './documents/documentsMKU/test_pdf.pdf';
// import doc from './documents/documentsMKU/test_pdf.pdf';
// import doc from './documents/documentsMKU/test_pdf.pdf';
// import doc from './documents/documentsMKU/test_pdf.pdf';

const documentsListApplications = [
  {
    titleDoc: "Форма заявки на экскурсию в МКУ «АCC Северодвинска»",
    typeDoc: icon_doc_1,
    path: docZayavkiEkskursija,
    docId: 1,
  },
  {
    titleDoc: "Форма заявки на повышение квалификации",
    typeDoc: icon_doc_1,
    path: docZayavkiKvalifikaczii,
    docId: 2,
  },
//   {
//     titleDoc: "Лицензия на осуществление образовательной деятельности (с приложением)",
//     typeDoc: icon_doc_1,
//     path: docLiczenziya,
//     docId: 3,
//   },
//   {
//     titleDoc: "Свидетельство о постановке на учет российской организации в налоговом органе по месту ее нахождени",
//     typeDoc: icon_doc_1,
//     path: docSvidetelstvo,
//     docId: 4,
//   },
//   {
//     titleDoc: "Санитарно-эпидемиологическое заключение",
//     typeDoc: icon_doc_1,
//     path: docSanepid,
//     docId: 5,
//   },
]

export default documentsListApplications