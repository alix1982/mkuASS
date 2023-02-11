import React from 'react';
import popupIconClose from '../../images/popup-close-icon.svg';

function ImagePopup(props) {
  // console.log(props.card)
  return (
    <section
      className={'popup popupImg ' + (props.card ? 'popup_opened' : '')}
      aria-label='попап картинок'
      onClick={props.onCloseOverlay}
    >
      <div className='popupImg__cell'>
        <button className='popup__close' type='button' onClick={props.onClose}>
          <img className='popup__closeImg' src={popupIconClose} />
        </button>
        <img className='popupImg__img' src={props.card} alt={props.card} />
        {/* <p className="popupImg__text">{props.card ? props.card.getAttribute(alt) : ''}</p> */}
      </div>
    </section>
  );
}

export default ImagePopup;
