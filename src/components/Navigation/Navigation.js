// import React from 'react';
// import { useEffect } from 'react';
import { Route, Routes, useNavigate, NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';

function Navigation (props) {
  let navigate = useNavigate();

  let activSubPoint = false;
  let urlRoute=window.location.pathname;
  // function redirect () {
    if (urlRoute === "/managers" || urlRoute === "/purpose" || urlRoute === "/structure" || urlRoute === "/responsibility"
    || urlRoute === "/history" || urlRoute === "/statistics" || urlRoute === "/vacancy" || urlRoute === "/documents") 
    { activSubPoint=true}
    else {activSubPoint=false}
  // }

  const activeClassPoint = 
  ({isActive}) => isActive ? 
    `navigation__pointButton navigation__pointButton_active` : 
    `navigation__pointButton`;

  const activeClassSubpoint = 
  ({isActive}) => isActive ?
  "navigation__subpointButton navigation__subpointButton_active" :
  `navigation__subpointButton`;

  return (
    <section className="navigation">
      <ul className="navigation__list">
        <li className="navigation__point">
          <NavLink to="/" className={activeClassPoint}>Главная</NavLink>
        </li>
        <li className={
          `navigation__point navigation__listItem ${(activSubPoint) ? "navigation__pointButton_active" : ""}`
        }>
          <p className="navigation__pointButton">О нас  <span className="navigation__arrow">&#8194;&or;</span></p>
          <ul className="navigation__sublist ">
            <li className="navigation__subpoint">
              <NavLink to="/managers" className={activeClassSubpoint}>Руководство учреждения</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/purpose" className={activeClassSubpoint}>Цели  и задачи</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/structure" className={activeClassSubpoint}>Структура</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/responsibility" className={activeClassSubpoint}>Зона ответсвенности</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/history" className={activeClassSubpoint}>История</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/statistics" className={activeClassSubpoint}>Статистика</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/vacancy" className={activeClassSubpoint} >Вакансии</NavLink>
            </li>
            <li className="navigation__subpoint">
              <NavLink to="/documents" className={activeClassSubpoint}>Документы</NavLink>
            </li>
          </ul>
          {/* <NavLink className="navigation__pointButton" onClick={()=>{navigate("/aboutUs")}}></NavLink> */}
        </li>
        <li className="navigation__point">
          <NavLink to="/worksAndServices" className={activeClassPoint}>Работы и услуги</NavLink>
        </li>
        <li className="navigation__point">
          <NavLink to="/informationEducation" className={activeClassPoint}>Сведения об образовательной организации</NavLink>
        </li>
        <li className="navigation__point">
          <NavLink to="/news" className={activeClassPoint}>Новости</NavLink>
        </li>
        <li className="navigation__point">
          <NavLink to="/usefulInformation" className={activeClassPoint}>Полезная информация</NavLink>
        </li>
        <li className="navigation__point">
          <NavLink to="/photosVideos" className={activeClassPoint}>Фото и видео</NavLink>
        </li>
        <li className="navigation__point">
          <NavLink to="/contacts" className={activeClassPoint}>Контакты</NavLink>
        </li>
      </ul>
      {/* <div className={`navigation ${(props.isNavigationPopupOpen && 'navigation__active')}`} onClick = {props.onCloseOverlay}>
        <ul className="navigation__list">
          <li className="navigation__point">
            <NavLink to="/" className={activeClassMain} onClick={props.onClose}>Главная</NavLink>
          </li>
          <li className="navigation__point">
            <NavLink to="/movies" className={activeClassMovies} onClick={transitionMovies}>
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__point">
            <NavLink to="/saved-movie" className={activeClassMovies} onClick={transitionSavedMovies}>
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__point">
            <Link to="/profile" className="navigation__akkaunt" onClick={props.onClose}>
              <img src= {butAkk} className="navigation__buttonAkkaunt" alt="Аккаунт"/>
              <p className={`navigation__textButtonAkkaunt navigation${props.auth}__textButtonAkkaunt`}>Аккаунт</p>
            </Link>
          </li>
        </ul>
        <button className="navigation__buttonClose" onClick={props.onClose}></button>
      </div>
      <button className={`navigation__button navigation${props.auth}__button`} onClick={props.onPopupNavigation}></button> */}
    </section>
  )
}

export default Navigation