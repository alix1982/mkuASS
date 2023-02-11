import React from 'react';
// import popupIconClose from '../../images/popup-close-icon.svg';
import icon_vopros from '../../images/icon_vopros.png';

function VisuallyImpairedPopup(props) {
  return (
    <section
      className={
        'popupVisuallyImpaire ' +
        (props.isVisuallyImpairedPopup ? 'popupVisuallyImpaire_opened' : '')
      }
      aria-label='попап для слабовидящих'
    >
      <ul className='popupvisuallyImpaire__list'>
        <li className='popupvisuallyImpaire__point'>
          <h3 className='popupvisuallyImpaire__pointHeading'>
            Масштаб&emsp;
            <span className='popupvisuallyImpaire__pointHeadingSpan'>
              <img
                src={icon_vopros}
                className='popupvisuallyImpaire__pointHeadingImg'
              />
            </span>
          </h3>
          {/* <h3 className="popupvisuallyImpaire__pointHeading">Размер шрифта:</h3>
          <div>
            <button className="popupvisuallyImpaire__pointButton">A-</button>
            <button className="popupvisuallyImpaire__pointButton">A+</button>
          </div> */}
        </li>
        <li className='popupvisuallyImpaire__point'>
          <button
            className='popupvisuallyImpaire__close'
            type='button'
            onClick={props.closeVisuallyImpairedPopup}
          >
            {/* <img className="popup__closeImg" src={popupIconClose}/> */}
            Обычная версия сайта
          </button>
        </li>
      </ul>
    </section>
  );
}

export default VisuallyImpairedPopup;
