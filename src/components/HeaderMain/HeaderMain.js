import React from 'react';

function HeaderMain(props) {
  return (
    <section className='headerMain'>
      <h2 className='headerMain__header'>{props.headingText}</h2>
    </section>
  );
}

export default HeaderMain;
