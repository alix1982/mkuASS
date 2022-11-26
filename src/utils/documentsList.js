import React from 'react';
import icon_doc from '../images/icon_doc.png';
import icon_pdf from '../images/icon_doc_pdf.png';
import icon_word from '../images/icon_doc_word.jpg';
import docTest from './documentsMKU/documentTest.docx';
import pdfTest from './documentsMKU/test_pdf.pdf';

const documentsList = [
  {
    titleDoc: "Название документа1",
    typeDoc: icon_doc,
    path: docTest,
    docId: 1,
  },
  {
    titleDoc: "Название документа2",
    typeDoc: icon_word,
    path: docTest,
    docId: 2,
  },
  {
    titleDoc: "Название документа3",
    typeDoc: icon_pdf,
    path: pdfTest,
    docId: 3,
  },
]

export default documentsList