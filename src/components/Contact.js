import React, {Component} from 'react';
import '../scss/contact.scss';
import decoration from '../images/decoration.png';

class Contact extends Component {
  state = {
    name: "",
    mail: "",
    msg: "",
    validationName: false,
    validationMail: false,
    ValidationMsg: false,
    errorName: "",
    errorMail: "",
    errorMsg: ""
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    const { name, mail, msg } = this.state;
    e.preventDefault();

    if(name !== "") {
      this.setState({
        validationName: true,
        errorName: ""
      })
    } else {
        this.setState({
          errorName: "Pole imię musi zostać uzupełnione."
        })
    }
    if(mail !== "" && mail.includes("@")) {
      this.setState({
        validationMail: true,
        errorMail: ""
      })
    } else {
      this.setState({
        errorMail: "Pole email musi zostać uzupełnione i zawierać znak @."
      })
    }
    if(msg !== "" && mail.includes("@")) {
      this.setState({
        validationMsg: true,
        errorMsg: ""
      })
    } else {
      this.setState({
        errorMsg: "Pole wiadomość musi zostać uzupełnione."
      })
    }
  }

  render() {
    const { name, mail, msg, validationName, validationMail, validationMsg } = this.state;

      const style = {
        color: "green",
        fontWeight: "bold"
      }

      let validationOk;

      if(validationName === true && validationMail === true && validationMsg === true) {
        validationOk = <p style={style}>Dziękujemy za wiadomość.</p>;

        setTimeout(() => {window.location.reload();},3000);
      }

    return (
      <footer id="contact">
        <div className="img_background">
          <div className="form_container">
            <div>
              <p className="title_paragraph">Skontaktuj się z nami</p>
              <img src={decoration} alt="" />
              <div className="validation_info">
                {validationOk}
                <p>{this.state.errorName}</p>
                <p>{this.state.errorMail}</p>
                <p>{this.state.errorMsg}</p>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
            FORMULARZ KONTAKTOWY
            <br/>
              <input
              name="name"
              type="text"
              placeholder="Imię"
              value={name}
              onChange={this.handleChange}>
              </input>
              <input
              name="mail"
              type="text"
              placeholder="Email"
              value={mail}
              onChange={this.handleChange}>
              </input>
              <br/>
              <textarea
              name="msg"
              type="text"
              placeholder="Wiadomość"
              value={msg}
              onChange={this.handleChange}/>
              <br/>
              <div className="btn_send">
                <button type="submit">Wyślij</button>
              </div>
            </form>
          </div>
          <div className="footer_bottom">
            <span>Copyright &copy; 2019</span>
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Contact;