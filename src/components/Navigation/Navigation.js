import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  // const [isOpenNavigate, setIsOpenNavigate] = useState(false);

  function openNavigate() {
    props.setIsOpenNavigate(true);
  }
  function closeNavigate() {
    props.setIsOpenNavigate(false);
  }
  // let navigate = useNavigate();

  let activSubPointAbout = false;
  let activSubPointInformationEducation = false;

  let urlRoute = window.location.pathname;

  if (
    urlRoute === '/managers' ||
    urlRoute === '/purpose' ||
    urlRoute === '/structure' ||
    urlRoute === '/responsibility' ||
    urlRoute === '/history' ||
    urlRoute === '/statistics' ||
    urlRoute === '/vacancy' ||
    urlRoute === '/documents'
  ) {
    activSubPointAbout = true;
  } else {
    activSubPointAbout = false;
  }

  if (
    urlRoute === '/basicInformation' ||
    urlRoute === '/structureInformationEducation' ||
    urlRoute === '/documentsEducation' ||
    urlRoute === '/education' ||
    urlRoute === '/educationalStandards' ||
    urlRoute === '/teachingStaff' ||
    urlRoute === '/materialTechnicalSupport' ||
    urlRoute === '/scholarships' ||
    urlRoute === '/paidEducational' ||
    urlRoute === '/financialActivity' ||
    urlRoute === '/vacantPlaces'
  ) {
    activSubPointInformationEducation = true;
  } else {
    activSubPointInformationEducation = false;
  }

  const activeClassPoint = ({ isActive }) =>
    isActive
      ? `navigation__pointButton navigation__pointButton_active`
      : `navigation__pointButton`;

  const activeClassSubpoint = ({ isActive }) =>
    isActive
      ? 'navigation__subpointButton navigation__subpointButton_active'
      : `navigation__subpointButton`;

  return (
    <section className='navigation'>
      <button className='navigation__button' onClick={openNavigate}>
        Меню
      </button>
      <ul
        className={`navigation__list ${
          props.isOpenNavigate ? 'navigation__list_active' : ''
        }`}
        onClick={props.onCloseOverlay}
      >
        <li className='navigation__point'>
          <NavLink to='/' className={activeClassPoint} onClick={closeNavigate}>
            Главная
          </NavLink>
        </li>
        <li className={`navigation__point navigation__listItem`}>
          <p
            className={`navigation__pointButton ${
              activSubPointAbout ? 'navigation__pointButtonText_active' : ''
            }`}
          >
            О нас <span className='navigation__arrow'>&#8194;&or;</span>
          </p>
          <ul className='navigation__sublist '>
            <li className='navigation__subpoint'>
              <NavLink
                to='/managers'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Руководство учреждения
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/purpose'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Цели и задачи
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/structure'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Структура
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/responsibility'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Зона ответсвенности
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/history'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                История
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/statistics'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Статистика
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/vacancy'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Вакансии
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/documents'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Документы
              </NavLink>
            </li>
          </ul>
        </li>
        <li className='navigation__point'>
          <NavLink
            to='/worksAndServices'
            className={activeClassPoint}
            onClick={closeNavigate}
          >
            Работы и услуги
          </NavLink>
        </li>
        <li className={`navigation__point navigation__listItem`}>
          <p
            className={`navigation__pointButton ${
              activSubPointInformationEducation
                ? 'navigation__pointButtonText_active'
                : ''
            }`}
          >
            Сведения об образовательной организации{' '}
            <span className='navigation__arrow'>&#8194;&or;</span>
          </p>
          <ul className='navigation__sublist '>
            <li className='navigation__subpoint'>
              <NavLink
                to='/basicInformation'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Основные сведения
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/structureInformationEducation'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Структура и органы управления образовательной организацией
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/documentsEducation'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Документы
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/education'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Образование
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/educationalStandards'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Образовательные стандарты
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/teachingStaff'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Руководство. Педагогический (научно-педагогический) состав
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/materialTechnicalSupport'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Материально-техническое обеспечение и оснащенность
                образовательного процесса
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/scholarships'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Стипендии и иные виды материальной поддержки
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/paidEducational'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Платные образовательные услуги
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/financialActivity'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Финансово-хозяйственная деятельность
              </NavLink>
            </li>
            <li className='navigation__subpoint'>
              <NavLink
                to='/vacantPlaces'
                className={activeClassSubpoint}
                onClick={closeNavigate}
              >
                Вакантные места для приема (перевода)
              </NavLink>
            </li>
          </ul>
          {/* <NavLink to="/informationEducation" className={activeClassPoint}>Сведения об образовательной организации</NavLink> */}
        </li>
        <li className='navigation__point'>
          <NavLink
            to='/news'
            className={activeClassPoint}
            onClick={closeNavigate}
          >
            Новости
          </NavLink>
        </li>
        <li className='navigation__point'>
          <NavLink
            to='/usefulInformation'
            className={activeClassPoint}
            onClick={closeNavigate}
          >
            Полезная информация
          </NavLink>
        </li>
        <li className='navigation__point'>
          <NavLink
            to='/photosVideos'
            className={activeClassPoint}
            onClick={closeNavigate}
          >
            Фото и видео
          </NavLink>
        </li>
        <li className='navigation__point'>
          <NavLink
            to='/contacts'
            className={activeClassPoint}
            onClick={closeNavigate}
          >
            Контакты
          </NavLink>
        </li>
        {/* <li className="navigation__point">
          <NavLink to="/questionsAnswers" className={activeClassPoint} onClick={closeNavigate}>Вопрос-ответ</NavLink>
        </li> */}
      </ul>
    </section>
  );
}

export default Navigation;
