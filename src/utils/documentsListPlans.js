// import React from 'react';
import icon_doc_1 from '../images/icon_doc_1.png';
import docPlanKomplektovaniyaTodayYear from './documents/documentsPlans/Plan-komplektovaniya-2025-god.pdf';
import docPlanKomplektovaniyaNextYear from './documents/documentsPlans/Plan-komplektovaniya-2024-god.pdf';
// import docPlanKomplektovaniya2023 from './documents/documentsPlans/Plan-komplektovaniya-2023-god_rotated.pdf';
import docPlanPodgotovkiTodayYear from './documents/documentsPlans/plan-podgotovki-na-2025-god.pdf';
import docPlanPodgotovkiNextYear from './documents/documentsPlans/plan-podgotovki-na-2024-god.docx';
// import docPlanPodgotovki2023 from './documents/documentsPlans/plan-podgotovki-na-2023-god.docx';
// import docSanepid from './documents/documentsMKU/Sanepid-zaklyuchenie-001.pdf';

// важен порядок первый план комплектования на текущий год, второй план комплектования на прошлый год,
// третий план подготовки на текущий год, четвертый план подготовки на прошлый год
// используется в Education и в DistanceLearning
const documentsListPlans = [
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности на 2025 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniyaTodayYear,
    docId: 1,
  },
  {
    titleDoc:
      'План комплектования курсов гражданской обороны, защиты от чрезвычайных ситуаций и пожарной безопасности на 2024 год',
    typeDoc: icon_doc_1,
    path: docPlanKomplektovaniyaNextYear,
    docId: 2,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на курсах ГО Северодвинска на 2025 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovkiTodayYear,
    docId: 3,
  },
  {
    titleDoc:
      'План подготовки должностных лиц на курсах ГО Северодвинска на 2024 год',
    typeDoc: icon_doc_1,
    path: docPlanPodgotovkiNextYear,
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
