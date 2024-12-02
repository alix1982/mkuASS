// import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
import docPlanKomplektovaniya2025 from './documents/documentsPlans/Plan-komplektovaniya-2025-god.pdf';
import docPlanKomplektovaniya2024 from './documents/documentsPlans/Plan-komplektovaniya-2024-god.pdf';
// import docPlanKomplektovaniya2023 from './documents/documentsPlans/Plan-komplektovaniya-2023-god_rotated.pdf';
import docPlanPodgotovki2025 from './documents/documentsPlans/plan-podgotovki-na-2025-god.pdf';
import docPlanPodgotovki2024 from './documents/documentsPlans/plan-podgotovki-na-2024-god.docx';
// import docPlanPodgotovki2023 from './documents/documentsPlans/plan-podgotovki-na-2023-god.docx';
// import docSanepid from './documents/documentsMKU/Sanepid-zaklyuchenie-001.pdf';

const documentsListPlans = [
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности на 2025 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniya2025,
    docId: 1,
  },
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности на 2024 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniya2024,
    docId: 2,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на курсах ГО Северодвинска на 2025 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovki2025,
    docId: 3,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на курсах ГО Северодвинска на 2024 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovki2024,
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
