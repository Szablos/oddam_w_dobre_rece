import React from 'react';
import '../scss/foursteps.scss';
import decoration from '../images/decoration.png';

const FourSteps = () => {
  return (
    <section id="four_steps">
      <div className="four_steps_container">
        <p>Wystarczą 4 proste kroki</p>
        <img src={decoration} alt="" />
        <div className="icons-container">
          <div className="icon">
            <i className="fas fa-clipboard-list"></i>
            <p>Wybierz rzeczy</p>
            <hr></hr>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className="icon">
            <i className="fas fa-arrow-down"></i>
            <p>Spakuj je</p>
            <hr></hr>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div className="icon">
            <i className="fas fa-binoculars"></i>
            <p>Zdecyduj komu chcesz pomóc</p>
            <hr></hr>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div className="icon">
            <i className="fas fa-box-open"></i>
            <p>Zamów kuriera</p>
            <hr></hr>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
        <button>Załóz konto</button>
      </div>
    </section>
  )
}

export default FourSteps;