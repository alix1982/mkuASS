import React from 'react';
import statisticList from '../../../utils/statisticsList';

function Statistics (props) {
  let trip = 0;
  let rescued = 0;
  statisticList.forEach((element) => {
    trip += element.trip;
    rescued += element.rescued;
  })
  function renderingSell (classDiv, year, trip, rescued, key) {
    return (
      <div className={`statistics__headingTab ${classDiv}`} key={key}>
        <p className="statistics__sell">{year}</p>
        <p className="statistics__sell">{trip}</p>
        <p className="statistics__sell">{rescued}</p>
      </div>
    )
  }
  return (
    <section className="statistics">
      <h3 className="statistics__heading">Статистические даные о работе МКУ «АСС Северодвинска»</h3>
      {renderingSell ("", "Год", "Выездов", "Спасено", 0)}
      {statisticList.map(item => {
        return( renderingSell ("statistics__byYear", item.year, item.trip, item.rescued, item.id) )
      })}
      {renderingSell ("", "", trip, rescued, 9999)}
    </section>
  )
}

export default Statistics