import React from 'react';
import '../scss/foursteps.scss';
import decoration from '../images/decoration.png';

const FourSteps = () => {
  return (
    <section id="four_steps">
      <div className="four_steps_container">
        <p>Wystarczą 4 proste kroki</p>
        <img src={decoration} alt="" />
        <div>

        </div>
        <button>Załóz konto</button>
      </div>
    </section>
  )
}

export default FourSteps;