import React from 'react';

function Footer (props) {
  return (
    <footer className="footer">
      <p className="footer__partners">Первый проект Alix2019 х Nata.</p>
      <div className="footer__line"></div>
      <div className="footer__nav">
        <p className="footer__copyright">&copy; 2022 Alix</p>
        <ul className="footer__list">
          <li className="footer__point">
            <a className="footer__link" href="https://vk.com/club200175099" target="_blank" rel="noreferrer">Группа в ВК</a>
          </li>
          {/* <li className="footer__point">
            <a className="footer__link" href="https://github.com/alix1982" target="_blank" rel="noreferrer">Github</a>
          </li> */}
        </ul>
      </div>
    </footer>
  )
}

export default Footer