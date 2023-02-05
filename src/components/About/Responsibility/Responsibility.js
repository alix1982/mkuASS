import React from 'react';
import shemaКesponsibility from '../../../images/shemaAss.jpg'

function Responsibility (props) {
  return (
    <section className="responsibility">
      <h3 className="responsibility__heading">Зона ответственности МКУ «АСС Северодвинска»</h3>
      <p className="responsibility__text">
         – территория, на которой проводятся аварийно-спасательные работы силами АСС, ограничена территорией МО «Северодвинск» (
         <a className="responsibility__link" href='https://yandex.ru/maps/geo/munitsipalnoye_obrazovaniye_severodvinsk/53001865/?ll=39.882853%2C64.454812&z=9.07' target="_blank" >см. карту</a>
         ), включая поселения Белое Озеро, Пал-озеро, Ненокса.
      </p>
      <p className="responsibility__text">При необходимости выполнения аварийно-спасательных работ связанных с оказанием первой помощи пострадавшим при возникновении чрезвычайных ситуаций техногенного  характера вне границ МО Северодвинск с целью уменьшения тяжести последствий ЧС выезд производится:</p>
      <ul className="responsibility__list">
        <li className="responsibility__point"> на ликвидацию последствий ДТП:
          <ul>
            <li>По трассе Северодвинск – Архангельск до поселка Рикасиха;</li>
            <li>По трассе Северодвинск – Онега до 90 км дороги.</li>
          </ul>
        </li>
        <li className="responsibility__point"> при разрушении зданий и сооружений с возможными пострадавшими:
          <ul className="responsibility__subList">
            <li className="responsibility__subPoint">посёлок Рикасиха, деревни Личка, Шихариха, Бармино.</li>
          </ul>
        </li>
      </ul>
      <p className="responsibility__text">В отдельных случаях  с целью эффективности проведения ПСР в лесу и внутренних акваториях  проводятся при выходе зоны ответственности за пределы территории МО Северодвинск до 20 км., по решению руководства МКУ «АСС Северодвинска».</p>
      <p className="responsibility__text">Привлечение Учреждения к ликвидации чрезвычайных ситуаций за пределами территории МО Северодвинск во всех остальных случаях осуществляется в порядке, установленном законодательством.</p>
    </section>
  )
}

export default Responsibility
