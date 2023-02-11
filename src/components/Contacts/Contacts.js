import React from 'react';
import icon_geo from '../../images/icon_geo-position.png';
import icon_telephon from '../../images/icon_telephon.png';
import icon_email from '../../images/icon_email.png';
import icon_workTime from '../../images/icon_workTime.png';

function Contacts() {
  return (
    <section className='contacts'>
      {/* фрейм с интерактивной картой */}
      {/* <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&amp;source=constructor"
      width="600" height="450" frameborder="0">
      </iframe> */}
      <a
        className='contacts__map'
        href='https://yandex.ru/maps/org/avariyno_spasatelnaya_sluzhba_severodvinska/1032440445/?ll=39.847813%2C64.562199&mode=search&sctx=ZAAAAAgBEAAaKAoSCRb7y%2B7J60NAEUzHnGfsI1BAEhIJavgW1o13lz8RZi5weawZeT8iBgABAgMEBSgKOABA4VRIAGIrcHJpY2VzX3NuaXBwZXRzX3JhbmtpbmdfbW9kZWxfdGhyZXNob2xkPTAuN2IhYWRkX3NuaXBwZXQ9dG9wb255bV9kaXNjb3ZlcnkvMS54YhpyYW5raW5nX2Zvcm11bGE9bDJfZGM4NTQ2NWIncmVhcnI9c2NoZW1lX0xvY2FsL0dlby9QcmljZXMvRW5hYmxlZD0xYkJyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlRGlzY292ZXJ5VGV4dFJlcXVlc3RzPTFiNXJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTGlzdERpc2NvdmVyeS9FbmFibGVSZXF1ZXN0cz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlRW1wdHlSZXF1ZXN0cz0xYjVyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlVmVydGljYWw9MWIwcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9Bc2tEaXNjb3ZlcnlGb3JUb3Bvbnltcz0xYjpyZWFycj1zY2hlbWVfTG9jYWwvR2VvL0xpc3REaXNjb3ZlcnkvRW5hYmxlQ29tbW9uUGljTWVudT0xYhpyYW5raW5nX2Zvcm11bGE9bDJfZGM4NTQ2NWoCcnWdAc3MTD2gAQCoAQC9AQFjrdHCAQr9lKfsA5ir94xq6gEA8gEA%2BAEAggId0YHQu9GD0LbQsdCwINGB0L%2FQsNGB0LXQvdC40Y%2BKAgkxODQxMDUzODKSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=39.847813%2C64.562199&source=constructorStatic&sspn=0.060478%2C0.016171&text=cke%3B%2Cf%20cgfctybz&um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&z=14.6
'
        rel='noreferrer'
        target='_blank'
      >
        <img
          className='contacts__mapImg'
          src='https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3Aa333ae325add25579e83da3ea18fdf8fb3b6c9989609f21fd4289d742c48ece5&amp;width=600&amp;height=450&amp;lang=ru_RU'
          alt='Карта'
        />
      </a>
      <ul className='contacts__list'>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img
              className='contacts__pointIcon'
              src={icon_geo}
              alt='Геопозиция'
            />
            Адрес учреждения
          </h3>
          <p className='contacts__pointText'>164500, Архангельская область,</p>
          <p className='contacts__pointText'>
            г. Северодвинск, улица Лесная, 25
          </p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img
              className='contacts__pointIcon'
              src={icon_telephon}
              alt='Телефон'
            />
            Телефон
          </h3>
          <p className='contacts__pointText'>
            +7 (818) 450-00-01 , +7 (818) 456-55-16
          </p>
          <p className='contacts__pointText'>Курсы ГО: +7 (8184) 55-13-77</p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img className='contacts__pointIcon' src={icon_email} alt='Почта' />
            Е-mail
          </h3>
          <p className='contacts__pointText'>sgcc@list.ru</p>
          <p className='contacts__pointText'>Курсы ГО: sgcc.kursy@mail.ru</p>
        </li>
        <li className='contacts__point'>
          <h3 className='contacts__pointHeading'>
            <img
              className='contacts__pointIcon'
              src={icon_workTime}
              alt='Время работы'
            />
            Режим работы курсов гражданской обороны
          </h3>
          <p className='contacts__pointText'>ПН-ПТ — 08.30 — 16.30,</p>
          <p className='contacts__pointText'>Обед — 12.15 — 13.15</p>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
