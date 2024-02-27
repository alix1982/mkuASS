// import React from 'react';
// import icon_doc from '../images/icon_doc.png';
import icon_doc_1 from '../images/icon_doc_1.png';
// import icon_pdf from '../images/icon_doc_pdf.png';
// import icon_word from '../images/icon_doc_word.jpg';
import docPostanovlenie from './documents/documentsMKU/Postanovlenie-Administraczii-MO-Severodvinsk-O-sozdanii-MKU-ASS.pdf';
import docYstav from './documents/documentsMKU/Ystav.pdf';
import docLiczenziya from './documents/documentsMKU/Obrazovatelnaya-liczenziya.pdf';
import docSvidetelstvo from './documents/documentsMKU/Svidetelstvo-o-postanovke-na-uchet-v-nalogovom-organe.pdf';
// import docSanepid from './documents/documentsMKU/Sanepid-zaklyuchenie-001.pdf';
import docZaklyuchenie from './documents/documentsMKU/Zaklyuchenie-pozharnyh-001.pdf';
// import docPrikaz from './documents/documentsMKU/Prikaz-o-naznachenii-nachalnika-MKU-ASS-Severodvinska-001.pdf';
import docKorupcia from './documents/documentsMKU/Plan-protivodejstvie-korrupczii-na-2021-2024-gody.pdf';
import docSOUT from './documents/documentsMKU/Rezultaty-provedeniya-SOUT.pdf';
import docUchetnayPolitika2023 from './documents/documentsMKU/Prikaz-ob-uchtetnoy-politike-2023.pdf';

const documentsList = [
  {
    titleDoc:
      'Постановление Администрации МО «Северодвинск» о создании муниципального казенного учреждения «Аварийно-спасательная служба Северодвинска»',
    typeDoc: icon_doc_1,
    path: docPostanovlenie,
    docId: 1,
  },
  {
    titleDoc:
      'Устав муниципального казенного учреждения «Аварийно-спасательная служба Северодвинска»',
    typeDoc: icon_doc_1,
    path: docYstav,
    docId: 2,
  },
  {
    titleDoc:
      'Лицензия на осуществление образовательной деятельности (с приложением)',
    typeDoc: icon_doc_1,
    path: docLiczenziya,
    docId: 3,
  },
  {
    titleDoc:
      'Свидетельство о постановке на учет российской организации в налоговом органе по месту ее нахождени',
    typeDoc: icon_doc_1,
    path: docSvidetelstvo,
    docId: 4,
  },
  // {
  //   titleDoc: 'Санитарно-эпидемиологическое заключение',
  //   typeDoc: icon_doc_1,
  //   path: docSanepid,
  //   docId: 5,
  // },
  {
    titleDoc:
      'Заключение о соответствии объекта защиты требованиям пожарной безопасности',
    typeDoc: icon_doc_1,
    path: docZaklyuchenie,
    docId: 6,
  },
  // {
  //   titleDoc:
  //     'Приказ Председателя Комитета по управлению муниципальным имуществом Администрации МО «Северодвинск» о назначении на должность начальника МУ «АСС Северодвинска»',
  //   typeDoc: icon_doc_1,
  //   path: docPrikaz,
  //   docId: 7,
  // },
  {
    titleDoc:
      'План противодействия коррупции в МКУ «АСС Северодвинска» на 2021-2024 годы',
    typeDoc: icon_doc_1,
    path: docKorupcia,
    docId: 8,
  },
  {
    titleDoc: 'Результаты проведения специальной оценки труда',
    typeDoc: icon_doc_1,
    path: docSOUT,
    docId: 9,
  },
  {
    titleDoc: 'Учётная политика',
    typeDoc: icon_doc_1,
    path: docUchetnayPolitika2023,
    docId: 10,
  },
];

export default documentsList;
