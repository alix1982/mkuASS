// импорты для реакта
import React from 'react';
import {useEffect, useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// импорт роутов
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Navigation from '../Navigation/Navigation.js';
import HeaderMain from '../HeaderMain/HeaderMain.js';
import Managers from '../About/Managers/Managers.js';
import Purpose from '../About/Purpose/Purpose.js';
import Structure from '../About/Structure/Structure.js';
import Responsibility from '../About/Responsibility/Responsibility.js';
import History from '../About/History/History.js';
import Statistics from '../About/Statistics/Statistics.js';
import Vacancy from '../About/Vacancy/Vacancy.js';
import Documents from '../About/Documents/Documents.js';

import WorksAndServices from '../WorksAndServices/WorksAndServices.js';
import News from '../News/News.js';
import UsefulInformation from '../UsefulInformation/UsefulInformation.js';
import PhotosVideos from '../PhotosVideos/PhotosVideos.js';
import Contacts from '../Contacts/Contacts.js';

import Footer from '../Footer/Footer.js';
import NoRoute from '../NoRoute/NoRoute';
import NoPage from '../NoPage/NoPage';

// дополнительный импорт
import {CurrentUserContext, currentUserContext} from '../../contexts/CurrentUserContext.js';

function App() {
  // const [isNavigationPopupOpen, setIsNavigationPopup] = useState(false); // открытие попапа навигации
  // const [loggedIn, setLoggedIn] = useState(false); // защита роутов
  // const [allMovies, setAllMovies] = useState([]);  // карточки c сервера практикума
  const [currentUser, setCurrentUser] = useState({name: 'Александр', email: 'pochta@yandex.ru',}); //первоначальные данные пользователя
  // const [currentCard, setCurrentCard] = useState([]);  // карточки с сервера практикума отфильтрованные пользователем
  
  // let navigate = useNavigate();

  // // закрытие попапов
  // function onCloseOverlay (evt) {
  //   (evt.target === evt.currentTarget) && closeAllPopups()
  // }
  // function closeAllPopups () {
  //   setIsNavigationPopup(false);
  // }

  // //открытие попапа навигации при разрешении меньше 800px
  // function handleOnPopupNavigation () {
  //   setIsNavigationPopup(true);
  // }
 
  // // переход на роуты регистрации и авторизации
  // function onClickPopupWithForm (name) {
  //   // if (name === "Profile") {quitUser()};
  //   if (name === "Register") {navigate("/signin")};
  //   if (name === "Login") {navigate("/signup")};
  // }

  // // переход на страницы пользователем
  // let urlRoute=window.location.pathname
  // function redirect () {
  //   if (urlRoute === "/") {
  //     navigate("/");
  //     return;
  //   }
  //   if (urlRoute === "/movies" || urlRoute === "/signin" || urlRoute === "/signup") {
  //     navigate("/movies");
  //     return;
  //   }
  //   if (urlRoute === "/saved-movie") {
  //     navigate("/saved-movie");
  //     return;
  //   }
  //   if (urlRoute === '/profile') { 
  //     navigate("/profile");
  //     return;
  //   }
  //   navigate("/no-route");
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/" element={
          <>
            <Header/>
            <Navigation/>
            <Main/>
            <Footer/>
          </>
        }/>
        {/* <Route path="/aboutUs" element={
          <>
            <Header/>
            <Navigation/>
            <About/>
            <Footer/>
          </>
        }/> */}

        {/* aboutUs */}
        <Route path="/managers" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Руководство учреждения"}/>
            <Managers/>
            <Footer/>
          </>
        }/>
        <Route path="/purpose" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Цели и задачи"}/>
            <Purpose/>
            <Footer/>
          </>
        }/>
        <Route path="/structure" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Структура"}/>
            <Structure/>
            <Footer/>
          </>
        }/>
        <Route path="/responsibility" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Зона ответсвенность"}/>
            <Responsibility/>
            <Footer/>
          </>
        }/>
        <Route path="/history" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"История"}/>
            <History/>
            <Footer/>
          </>
        }/>
        <Route path="/statistics" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Статистика"}/>
            <Statistics/>
            <Footer/>
          </>
        }/>
        <Route path="/vacancy" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Вакансии"}/>
            <Vacancy/>
            <Footer/>
          </>
        }/>
        <Route path="/documents" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Документы"}/>
            <Documents/>
            <Footer/>
          </>
        }/>
        {/* конец aboutUs */}

        <Route path="/worksAndServices" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Работы и услуги"}/>
            <WorksAndServices/>
            <Footer/>
          </>
        }/>


        
        <Route path="/informationEducation" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Работы и услуги"}/>
            <NoPage/>
            <Footer/>
          </>
        }/>
        <Route path="/news" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText="Новости"/>
            <News/>
            <Footer/>
          </>
        }/>
        <Route path="/usefulInformation" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Полезная информация"}/>
            <UsefulInformation/>
            <Footer/>
          </>
        }/>
        <Route path="/photosVideos" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Фото и видео"}/>
            <PhotosVideos/>
            <Footer/>
          </>
        }/>
        <Route path="/contacts" element={
          <>
            <Header/>
            <Navigation/>
            <HeaderMain headingText={"Контакты"}/>
            <Contacts/>
            <Footer/>
          </>
        }/>
        {/* <Route path="/movies" element={
          <>
            <Header/>
            <ProtectedRoute loggedIn={loggedIn} component={Movies}/>
            <Footer/>
          </>
        }/> */}
        <Route path="/no-route" element={
          <>
            <NoRoute/>
          </>
        }/>
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
