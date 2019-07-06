import React from 'react';
import '../scss/header.scss';
import { Link } from 'react-scroll';
import decoration from '../images/decoration.png';
import headerImg from '../images/header_start_img.jpg'

const SignInUpBtns = () => {
  return (
    <div className="signInUp_btns">
      <button className="signIn">Zaloguj</button>
      <button className="signup">Załóz konto</button>
    </div>
  )
}

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav_list">
        <li><Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Start
        </Link></li>
        <li><Link
          activeClass="active"
          to="four_steps"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          O co chodzi?
        </Link></li>
        <li><Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          O nas
        </Link></li>
        <li><Link
          activeClass="active"
          to="fundations"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Fundacje i organizaje
        </Link></li>
        <li><Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
        >
          Kontakt
        </Link></li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header id="start">
      <img className="header_back" src={headerImg} alt="" />
      <SignInUpBtns />
      <Navigation />
      <div className="information">
        <p>Zacznij pomagać!</p>
        <p>Oddaj rzeczy w zaufane ręce</p>
        <img src={decoration} alt="" />
        <button className="give_away_stuff">Oddaj rzeczy</button>
        <button className="organize_collection">Zorganizuj zbiórkę</button>
      </div>
    </header>
  )
}

export default Header;