import React from 'react';
import { Link } from 'react-router-dom';
import icon_doc_1 from '../../../images/icon_doc_1.png';
import docSpravka from '../../../utils/documents/spravka-o-kadrovom-obespecheniiobrazovatelnogo-proczessa.pdf';

function TeachingStaff() {
  // console.log(documents);
  return (
    <section className='education'>
      <Link
        to={docSpravka}
        className='documents__link'
        target='_blank'
        rel='noreferrer'
      >
        <img className='documents__icon' src={icon_doc_1} alt='документ' />
        <p className='documents__text'>
          Справка о кадровом обеспечении образовательного процесса
        </p>
      </Link>
    </section>
  );
}

export default TeachingStaff;
