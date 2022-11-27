import React from 'react';
import icon_geo from '../../images/icon_geo-position.png';
import icon_telephon from '../../images/icon_telephon.png';
import icon_email from '../../images/icon_email.png';
import icon_workTime from '../../images/icon_workTime.png';

function Contacts (props) {
//   console.log("ok")
  return (
    <section className="contacts">
      {/* фрейм с интерактивной картой */}
      {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&amp;source=constructor" 
      width="600" height="450" frameborder="0">
      </iframe> */}
      <a className="contacts__map" href="https://yandex.ru/maps/?um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&amp;source=constructorStatic" target="_blank">
        <img className='contacts__mapImg' src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&amp;width=600&amp;height=450&amp;lang=ru_RU" alt="Карта"/>
      </a>
      <ul className='contacts__list'>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img className='contacts__pointIcon' src={icon_geo} alt="Геопозиция"/>
            Адрес учреждения
          </h3>
          <p className='contacts__pointText'>164500, Архангельская область, <br/> г. Северодвинск, улица Лесная, 25</p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img className='contacts__pointIcon' src={icon_telephon} alt="Телефон"/>
            Телефон
          </h3>
          <p className='contacts__pointText'>sgcc@list.ru</p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img className='contacts__pointIcon' src={icon_email} alt="Почта"/>
            Е-mail
          </h3>
          <p className='contacts__pointText'>164500, Архангельская область, <br/> г. Северодвинск, улица Лесная, 25</p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img className='contacts__pointIcon' src={icon_workTime} alt="Время работы"/>
            Режим работы курсов гражданской обороны
          </h3>
          <p className='contacts__pointText'>
            Режим работы курсов гражданской обороны <br/>
            ПН — 08.30 — 17.30, <br/>
            ВТ-ПТ — 08.30 — 16.30, <br/>
            Обед 12.15 — 13.15 <br/>
            Телефон: (8184) 55-13-77 
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Contacts