import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
import docTelefony from './documents/documentsInformation/telefony-ekstrennyh-sluzhb.doc';
import docVoda from './documents/documentsInformation/voda-min.pdf';
import docGaz from './documents/documentsInformation/gaz-min.pdf';
import docGroza from './documents/documentsInformation/groza-min.pdf';
import docPirotehnika from './documents/documentsInformation/pirotehnika-min.pdf';
import docLed from './documents/documentsInformation/led-min.pdf';
import docNavodnenie from './documents/documentsInformation/navodnenie-min.pdf';
import docLes from './documents/documentsInformation/les-min.pdf';
import docGradusnik from './documents/documentsInformation/gradusnik-min.pdf';
import docHim from './documents/documentsInformation/him-min.pdf';
import docRadiacziya from './documents/documentsInformation/radiacziya-min.pdf';
import docTerror from './documents/documentsInformation/terror-min.pdf';
import docPozhar from './documents/documentsInformation/pozhar-min.pdf';
import docTransport from './documents/documentsInformation/transport-1.pdf';
import docLeto from './documents/documentsInformation/Bezopasnoe-leto-na-dache.pdf';

// import pdfTest from './documentsMKU/test_pdf.pdf';

const documentsListInformation = [
  {
    titleDoc: "Телефоны экстренных служб",
    typeDoc: icon_doc_1,
    path: docTelefony ,
    docId: 1,
  },
  {
    titleDoc: "Как вести себя на воде",
    typeDoc: icon_doc_1,
    path: docVoda,
    docId: 2,
  },
  {
    titleDoc: "Правила безопасности при обращении с газом",
    typeDoc: icon_doc_1,
    path: docGaz,
    docId: 3,
  },
  {
    titleDoc: "Гроза и молния: как обезопасить себя",
    typeDoc: icon_doc_1,
    path: docGroza,
    docId: 4,
  },
  {
    titleDoc: "Памятка по применению гражданами бытовых пиротехнических изделий",
    typeDoc: icon_doc_1,
    path: docPirotehnika,
    docId: 5,
  },
  {
    titleDoc: "Осторожно: лед!",
    typeDoc: icon_doc_1,
    path: docLed,
    docId: 6,
  },
  {
    titleDoc: "Действия населения в случае наводнения",
    typeDoc: icon_doc_1,
    path: docNavodnenie,
    docId: 7,
  },
  {
    titleDoc: "Безопасность в лесу",
    typeDoc: icon_doc_1,
    path: docLes,
    docId: 8,
  },
  {
    titleDoc: "Разбился ртутный градусник! Что делать?",
    typeDoc: icon_doc_1,
    path: docGradusnik,
    docId: 9,
  },
  {
    titleDoc: "Действия населения в случае химической аварии",
    typeDoc: icon_doc_1,
    path: docHim,
    docId: 10,
  },
  {
    titleDoc: "Действия населения в случае радиационной аварии",
    typeDoc: icon_doc_1,
    path: docRadiacziya,
    docId: 11,
  },
  {
    titleDoc: "Действия при угрозе террористического характера",
    typeDoc: icon_doc_1,
    path: docTerror,
    docId: 12,
  },
  {
    titleDoc: "Действия при пожаре в здании",
    typeDoc: icon_doc_1,
    path: docPozhar,
    docId: 13,
  },
  {
    titleDoc: "Правила безопасности при движении в транспорте",
    typeDoc: icon_doc_1,
    path: docTransport,
    docId: 14,
  },
  {
    titleDoc: "Безопасное лето на даче",
    typeDoc: icon_doc_1,
    path: docLeto,
    docId: 15,
  },
]

export default documentsListInformation