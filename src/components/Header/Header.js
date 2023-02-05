import React from 'react';
import { Link } from 'react-router-dom';
import logo_mku_ass from '../../images/logo_mku_ass.png';
import icon_tel from '../../images/icon_tel.png';
import icon_visuallyImpaired from '../../images/icon_visuallyImpaired.png';

import Navigation from '../Navigation/Navigation.js';

function Header (props) {
  return (
    <header className="header">
      <div className="header__header">
        <p className="header__address">164500, Архангельская область, г. Северодвинск, улица Лесная, 25</p>
        <Link to="/sampleApplications" className="header__samples">Образцы заявок</Link>
        <button  className="header__visuallyImpaired" onClick = {props.openVisuallyImpairedPopup}>
          <img  className="header__visuallyImpairedImg" src={icon_visuallyImpaired}/>
          Версия сайта для слабовидящих
        </button>
        {/* <Link to="/no-route" className="header__form">Образцы заявок на курсы</Link> */}
      </div>
      <div className="header__line"></div>
      <div className="header__info">
        <Link to="/" className="header__linkLogo">
          <img src= {logo_mku_ass} className="header__imgLogo"  alt="Логотип"/>
          <h1 className="header__institution">Муниципальное казенное учреждение <br/> «Аварийно-спасательная служба Северодвинска»</h1>
        </Link>
        <p className="header__numberTel">
          <img src= {icon_tel} className="header__iconTel"  alt="Телефон"/>
          +7 (8184) 50-00-01
        </p>
      </div>

      {/* <div className={`header__nav header__nav${props.offNavigation}`}>
        <Navigation
          isNavigationPopupOpen = {props.isNavigationPopupOpen}
          onClose = {props.onClose} onCloseOverlay = {props.onCloseOverlay}
          onPopupNavigation = {props.onPopupNavigation}
           setIsNavigateMovies={props.setIsNavigateMovies}
          auth = {props.auth}
        />
      </div> */}
    </header>
  )
}

export default Header
