// import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
import docPlanKomplektovaniya2023 from './documents/documentsPlans/Plan-komplektovaniya-na-2023-god_rotated.pdf';
import docPlanKomplektovaniya2022 from './documents/documentsPlans/Plan-komplektovaniya-2022-god.pdf';
import docPlanPodgotovki2023 from './documents/documentsPlans/plan-podgotovki-na-2023-god.docx';
import docPlanPodgotovki2022 from './documents/documentsPlans/plan-podgotovki-dolzhnostnyh-licz-na-2022-god.pdf';
// import docSanepid from './documents/documentsMKU/Sanepid-zaklyuchenie-001.pdf';

const documentsListPlans = [
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности Сeвeродвинска на 2023 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniya2023,
    docId: 1,
  },
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности на 2022 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniya2022,
    docId: 2,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на курсах ГО Северодвинска на 2023 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovki2023,
    docId: 3,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на Курсах ГО Северодвинска на 2022 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovki2022,
    docId: 4,
  },
  // {
  //   titleDoc: "Санитарно-эпидемиологическое заключение",
  //   typeDoc: icon_doc_1,
  //   path: docSanepid,
  //   docId: 5,
  // },
];

export default documentsListPlans;
