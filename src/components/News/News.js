// import HeaderMain from '../HeaderMain/HeaderMain.js';
import newsList from '../../utils/newsList';

function News (props) {
//   console.log(newsList)
  function card (newNumber, key) {
    // console.log(newNumber.photos.length)
    let styleNew = false;
    if (newNumber.photos.length > 1) {styleNew = true}
    if (styleNew) {
      return (
        <li className="news__point" key={key}>
          <h3 className='news__pointHeading'>{newNumber.heading}</h3>
          <p className='news__pointDate'>{newNumber.date}</p>
          {newNumber.text.map((p, index)=>{
            return (<p className='news__pointText' key={index}>{p}</p>)
          })}
          {newNumber.photos.map((photo, index)=>{
            return (<img src={photo} className="news__pointImg" alt="фото новостей" key={index}/>)
          })}
        </li>
      )
    } else {
      return (
        <li className="news__point" key={key}>
          <h3 className='news__pointHeading'>{newNumber.heading}</h3>
          <p className='news__pointDate'>{newNumber.date}</p>
            {newNumber.photos.map((photo, index)=>{
              return (<img src={photo} className="news__pointImg news__pointImgOnePhoto" align="left" alt="фото новостей" key={index}/>)
            })}
              {newNumber.text.map((p, index)=>{
                return (<p className='news__pointText' key={index}>{p}</p>)
              })}
        </li>
      )
    }
  }

  return (
    <section className="news">
      {/* <HeaderMain headingText="Новости"/> */}
      <ul className='news__list'>
        {newsList.map( item => { return (card(item, item.newsId)) })}
      </ul>
    </section>
  )
}

export default News