// импорты для реакта
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useNavigate,
  Link,
  useLocation,
} from 'react-router-dom';

// импорт роутов
import Header from '../Header/Header.js';
import Main from '../Main/Main.js';
import Baner from '../Header/Baner/Baner.js';
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

import SampleApplications from '../InformationEducation/SampleApplications/SampleApplications.js';
import BasicInformation from '../InformationEducation/BasicInformation/BasicInformation.js';
import StructureInformationEducation from '../InformationEducation/StructureInformationEducation/StructureInformationEducation.js';
import DocumentsEducation from '../InformationEducation/DocumentsEducation/DocumentsEducation.js';
import Education from '../InformationEducation/Education/Education.js';
import EducationalStandards from '../InformationEducation/EducationalStandards/EducationalStandards.js';
import TeachingStaff from '../InformationEducation/TeachingStaff/TeachingStaff.js';
import MaterialTechnicalSupport from '../InformationEducation/MaterialTechnicalSupport/MaterialTechnicalSupport.js';
import Scholarships from '../InformationEducation/Scholarships/Scholarships.js';
import PaidEducational from '../InformationEducation/PaidEducational/PaidEducational.js';
// import FinancialActivity from '../InformationEducation/FinancialActivity/FinancialActivity.js';
// import VacantPlaces from '../InformationEducation/VacantPlaces/VacantPlaces.js';

import News from '../News/News.js';
import UsefulInformation from '../UsefulInformation/UsefulInformation.js';
import PhotosVideos from '../PhotosVideos/PhotosVideos.js';
import Contacts from '../Contacts/Contacts.js';
import QuestionsAnswers from '../QuestionsAnswers/QuestionsAnswers.js';

import Footer from '../Footer/Footer.js';

import ImagePopup from '../ImagePopup/ImagePopup';
import VisuallyImpairedPopup from '../VisuallyImpairedPopup/VisuallyImpairedPopup';

import NoRoute from '../NoRoute/NoRoute';
import NoPage from '../NoPage/NoPage';

// дополнительный импорт
import {
  CurrentUserContext,
  // currentUserContext,
} from '../../contexts/CurrentUserContext.js';

function App() {
  // const [isNavigationPopupOpen, setIsNavigationPopup] = useState(false); // открытие попапа навигации
  // const [loggedIn, setLoggedIn] = useState(false); // защита роутов
  // const [allMovies, setAllMovies] = useState([]);  // карточки c сервера практикума
  const [
    currentUser,
    // setCurrentUser
  ] = useState({
    name: 'Александр',
    email: 'pochta@yandex.ru',
  }); //первоначальные данные пользователя
  // const [currentCard, setCurrentCard] = useState([]);  // карточки с сервера практикума отфильтрованные пользователем

  let navigate = useNavigate();
  const [isImgPopupOpen, setIsImgPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [isVisuallyImpairedPopup, setIsVisuallyImpairedPopup] = useState(false);
  const [isOpenNavigate, setIsOpenNavigate] = useState(false);
  console.log(isImgPopupOpen); // чтобы убрать ошибку EsLint
  // отображение главной страницы ниже из-за банера
  const location = useLocation();
  useEffect(() => {
    console.log(window.screen.width);
    location.pathname !== '/' || window.screen.width <= 600
      ? window.scrollTo(0, 0)
      : window.scrollTo(0, 200);
  }, [location.pathname, window.screen.width]);

  useEffect(() => {
    function onCloseEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    document.addEventListener('keydown', onCloseEsc);
    return () => {
      document.removeEventListener('keydown', onCloseEsc);
    };
  });

  function onCloseOverlay(evt) {
    evt.target === evt.currentTarget && closeAllPopups();
  }

  function closeAllPopups() {
    setIsImgPopup(false);
    setSelectedCard();
    setIsOpenNavigate(false);
  }

  function renderingDocument(doc, key) {
    return (
      <li className='documents__point' key={key}>
        <Link
          to={doc.path}
          className='documents__link'
          target='_blank'
          rel='noreferrer'
        >
          <img className='documents__icon' src={doc.typeDoc} alt='документ' />
          <p className='documents__text'>{doc.titleDoc}</p>
        </Link>
      </li>
    );
  }

  function openImg(foto) {
    setSelectedCard(foto);
  }
  function closeVisuallyImpairedPopup() {
    document.querySelector('body').classList.remove('bodyVisuallyImpaired');
    setIsVisuallyImpairedPopup(false);
  }
  function openVisuallyImpairedPopup() {
    document.querySelector('body').classList.add('bodyVisuallyImpaired');
    // document.querySelectorAll("p").forEach((p)=>{p.classList.add("pVisuallyImpaired")})
    // document.querySelector(".headerMain__header").classList.add("headerMain__headerVisuallyImpaired")
    setIsVisuallyImpairedPopup(true);
  }

  // переход на главную страницу при перезагрузке
  let urlRoute = window.location.pathname;
  function redirect() {
    if (urlRoute === '/') {
      navigate('/');
      return;
    }
    if (urlRoute === '/managers') {
      navigate('/managers');
      return;
    }
    if (urlRoute === '/purpose') {
      navigate('/purpose');
      return;
    }
    if (urlRoute === '/structure') {
      navigate('/structure');
      return;
    }
    if (urlRoute === '/responsibility') {
      navigate('/responsibility');
      return;
    }
    if (urlRoute === '/history') {
      navigate('/history');
      return;
    }
    if (urlRoute === '/statistics') {
      navigate('/statistics');
      return;
    }
    if (urlRoute === '/vacancy') {
      navigate('/vacancy');
      return;
    }
    if (urlRoute === '/documents') {
      navigate('/documents');
      return;
    }
    if (urlRoute === '/worksAndServices') {
      navigate('/worksAndServices');
      return;
    }
    if (urlRoute === '/sampleApplications') {
      navigate('/sampleApplications');
      return;
    }
    if (urlRoute === '/basicInformation') {
      navigate('/basicInformation');
      return;
    }
    if (urlRoute === '/structureInformationEducation') {
      navigate('/structureInformationEducation');
      return;
    }
    if (urlRoute === '/documentsEducation') {
      navigate('/documentsEducation');
      return;
    }
    if (urlRoute === '/education') {
      navigate('/education');
      return;
    }
    if (urlRoute === '/educationalStandards') {
      navigate('/educationalStandards');
      return;
    }
    if (urlRoute === '/teachingStaff') {
      navigate('/teachingStaff');
      return;
    }
    if (urlRoute === '/materialTechnicalSupport') {
      navigate('/materialTechnicalSupport');
      return;
    }
    if (urlRoute === '/scholarships') {
      navigate('/scholarships');
      return;
    }
    if (urlRoute === '/paidEducational') {
      navigate('/paidEducational');
      return;
    }
    if (urlRoute === '/financialActivity') {
      navigate('/financialActivity');
      return;
    }
    if (urlRoute === '/vacantPlaces') {
      navigate('/vacantPlaces');
      return;
    }
    if (urlRoute === '/news') {
      navigate('/news');
      return;
    }
    if (urlRoute === '/usefulInformation') {
      navigate('/usefulInformation');
      return;
    }
    if (urlRoute === '/photosVideos') {
      navigate('/photosVideos');
      return;
    }
    if (urlRoute === '/contacts') {
      navigate('/contacts');
      return;
    }
    if (urlRoute === '/questionsAnswers') {
      navigate('/questionsAnswers');
      return;
    }
    navigate('/no-route');
  }
  useEffect(() => {
    redirect();
  }, []);

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
        <Route
          path='/'
          element={
            <>
              <Baner />
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <Main setSelectedCard={setSelectedCard} openImg={openImg} />
              <Footer />
            </>
          }
        />
        {/* <Route path="/aboutUs" element={
          <>
            <Header/>
            <Navigation/>
            <About/>
            <Footer/>
          </>
        }/> */}

        {/* aboutUs */}
        <Route
          path='/managers'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Руководство учреждения'} />
              <Managers />
              <Footer />
            </>
          }
        />
        <Route
          path='/purpose'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Цели и задачи'} />
              <Purpose />
              <Footer />
            </>
          }
        />
        <Route
          path='/structure'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Структура'} />
              <Structure />
              <Footer />
            </>
          }
        />
        <Route
          path='/responsibility'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Зона ответсвенность'} />
              <Responsibility />
              <Footer />
            </>
          }
        />
        <Route
          path='/history'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'История'} />
              <History />
              <Footer />
            </>
          }
        />
        <Route
          path='/statistics'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Статистика'} />
              <Statistics />
              <Footer />
            </>
          }
        />
        <Route
          path='/vacancy'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Вакансии'} />
              <Vacancy />
              <Footer />
            </>
          }
        />
        <Route
          path='/documents'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Документы'} />
              <Documents renderingDocument={renderingDocument} />
              <Footer />
            </>
          }
        />
        {/* конец aboutUs */}

        <Route
          path='/worksAndServices'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Работы и услуги'} />
              <WorksAndServices />
              <Footer />
            </>
          }
        />

        {/* InformationEducation */}

        <Route
          path='/sampleApplications'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Образцы заявок'} />
              <SampleApplications renderingDocument={renderingDocument} />
              <Footer />
            </>
          }
        />

        {/* начало InformationEducation */}
        <Route
          path='/basicInformation'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Основные сведения'} />
              <BasicInformation />
              <Footer />
            </>
          }
        />
        <Route
          path='/structureInformationEducation'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={
                  'Структура и органы управления образовательной организацией'
                }
              />
              <StructureInformationEducation />
              <Footer />
            </>
          }
        />
        <Route
          path='/documentsEducation'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Документы'} />
              <DocumentsEducation renderingDocument={renderingDocument} />
              <Footer />
            </>
          }
        />
        <Route
          path='/education'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Образование'} />
              <Education renderingDocument={renderingDocument} />
              <Footer />
            </>
          }
        />
        <Route
          path='/educationalStandards'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Образовательные стандарты'} />
              <EducationalStandards />
              <Footer />
            </>
          }
        />
        <Route
          path='/teachingStaff'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={
                  'Руководство. Педагогический (научно-педагогический) состав'
                }
              />
              <TeachingStaff />
              <Footer />
            </>
          }
        />
        <Route
          path='/materialTechnicalSupport'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={
                  'Материально-техническое обеспечение и оснащенность образовательного процесса'
                }
              />
              <MaterialTechnicalSupport />
              <Footer />
            </>
          }
        />
        <Route
          path='/scholarships'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={'Стипендии и иные виды материальной поддержки'}
              />
              <Scholarships />
              <Footer />
            </>
          }
        />
        <Route
          path='/paidEducational'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Платные образовательные услуги'} />
              <PaidEducational />
              <Footer />
            </>
          }
        />
        <Route
          path='/financialActivity'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={'Финансово-хозяйственная деятельность'}
              />
              {/* <FinancialActivity/> */}
              <NoPage />
              <Footer />
            </>
          }
        />
        <Route
          path='/vacantPlaces'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain
                headingText={'Вакантные места для приема (перевода)'}
              />
              {/* <VacantPlaces/> */}
              <NoPage />
              <Footer />
            </>
          }
        />
        {/* конец InformationEducation */}

        <Route
          path='/news'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText='Новости' />
              <News />
              <Footer />
            </>
          }
        />
        <Route
          path='/usefulInformation'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Полезная информация'} />
              <UsefulInformation renderingDocument={renderingDocument} />
              <Footer />
            </>
          }
        />
        <Route
          path='/photosVideos'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Фото и видео'} />
              <PhotosVideos
                setSelectedCard={setSelectedCard}
                openImg={openImg}
              />
              <Footer />
            </>
          }
        />
        <Route
          path='/contacts'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Контакты'} />
              <Contacts />
              <Footer />
            </>
          }
        />
        <Route
          path='/questionsAnswers'
          element={
            <>
              <Header
                openVisuallyImpairedPopup={openVisuallyImpairedPopup}
                isVisuallyImpairedPopup={isVisuallyImpairedPopup}
              />
              <Navigation
                isOpenNavigate={isOpenNavigate}
                setIsOpenNavigate={setIsOpenNavigate}
                onCloseOverlay={(evt) => onCloseOverlay(evt)}
              />
              <HeaderMain headingText={'Вопрос - ответ'} />
              {/* <NoPage/> */}

              <QuestionsAnswers />
              <Footer />
            </>
          }
        />

        {/* <Route path="/movies" element={
          <>
            <Header/>
            <ProtectedRoute loggedIn={loggedIn} component={Movies}/>
            <Footer/>
          </>
        }/> */}
        <Route
          path='/no-route'
          element={
            <>
              <NoRoute />
            </>
          }
        />
      </Routes>
      <ImagePopup
        onClose={closeAllPopups}
        onCloseOverlay={(evt) => onCloseOverlay(evt)}
        card={selectedCard}
      ></ImagePopup>
      <VisuallyImpairedPopup
        onClose={closeAllPopups}
        onCloseOverlay={(evt) => onCloseOverlay(evt)}
        closeVisuallyImpairedPopup={closeVisuallyImpairedPopup}
        isVisuallyImpairedPopup={isVisuallyImpairedPopup}
      ></VisuallyImpairedPopup>
    </CurrentUserContext.Provider>
  );
}

export default App;
