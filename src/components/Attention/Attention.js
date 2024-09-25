import React from 'react';
import { Link } from 'react-router-dom';

function Attention() {
  return (
    <article className='attention'>
      <Link to={'/news'} className='attention__link'>
        <span className='attention__linkContentButton'>Новое на сайте</span>
        {/* &#60; */}
        <span className='attention__linkContent'>
          <span className='attention__linkContentSpecText'>&#60;</span>
          <span className='attention__linkContentText'> Внесены изменения в график работы курсов ГО</span>
        </span>
        {/* !!! Внесены изменения в план подготовки !!! */}
      </Link>

    </article>
  );
}

export default Attention;


