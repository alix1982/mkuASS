// import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
import docAkt from './documents/documentsCheck/Akt-proverki-Upravleniya-nadzora-v-sfere-obrazovaniya-№-1-k-ot-16.01.2019-g.pdf';
import docPredpisanieL from './documents/documentsCheck/Predpisanie-№1-l-ob-ustranenii-vyyavlennyh-narushenij-ot-16.01.2-19-g.pdf';
import docPredpisanieN from './documents/documentsCheck/predpisanie.pdf';
import docOtchetL from './documents/documentsCheck/Otchet-ob-ispolnenii-predpisaniya-№1-l.pdf';
import docOtchetN from './documents/documentsCheck/Otchet-ob-ispolnenii-predpisaniya-№1-n.pdf';

// import doc from './documents/documentsCheck/test_pdf.pdf';
// import doc from './documents/documentsCheck/test_pdf.pdf';
// import doc from './documents/documentsCheck/test_pdf.pdf';
// import doc from './documents/documentsCheck/test_pdf.pdf';
// import doc from './documents/documentsCheck/test_pdf.pdf';
// import doc from './documents/documentsCheck/test_pdf.pdf';

// import pdfTest from './documentsMKU/test_pdf.pdf';

const documentsListCheck = [
  {
    titleDoc: 'Акт проверки № 1-к от 16.01.2019 г.',
    typeDoc: icon_doc_1,
    path: docAkt,
    docId: 1,
  },
  {
    titleDoc:
      'Предписание №1-л об устранении выявленных нарушений от 16.01.2-19 г',
    typeDoc: icon_doc_1,
    path: docPredpisanieL,
    docId: 2,
  },
  {
    titleDoc:
      'Предписание №1-н об устранении выявленных нарушений от 16.01.2019 г.',
    typeDoc: icon_doc_1,
    path: docPredpisanieN,
    docId: 3,
  },
  {
    titleDoc: 'Отчет об исполнении предписания №1-л',
    typeDoc: icon_doc_1,
    path: docOtchetL,
    docId: 4,
  },
  {
    titleDoc: 'Отчет об исполнении предписания №1-н',
    typeDoc: icon_doc_1,
    path: docOtchetN,
    docId: 5,
  },
  //   {
  //     titleDoc: "",
  //     typeDoc: icon_doc_1,
  //     path: docRezhime,
  //     docId: 6,
  //   },
  //   {
  //     titleDoc: "",
  //     typeDoc: icon_doc_1,
  //     path: docSoveteStudents,
  //     docId: 7,
  //   },
  //   {
  //     titleDoc: "",
  //     typeDoc: icon_doc_1,
  //     path: docRasporyadka,
  //     docId: 8,
  //   },
  //   {
  //     titleDoc: "",
  //     typeDoc: icon_doc_1,
  //     path: docKomissii,
  //     docId: 9,
  //   },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 10,
  // },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 11,
  // },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 12,
  // },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 13,
  // },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 14,
  // },
  // {
  //   titleDoc: "Название документа3",
  //   typeDoc: icon_doc_1,
  //   path: pdfTest,
  //   docId: 15,
  // },
];

export default documentsListCheck;
