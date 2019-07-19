import React, {Component} from 'react';
import '../scss/fundationslist.scss';
import decoration from '../images/decoration.png';

class FundationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: false,
      currentPage: 1,
      dataPerPage: 3,
      option: "fundation"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  api = "http://localhost:3000";

  componentDidMount() {
    fetch(`${this.api}/fundations`)
      .then(resp => {
        if (resp.ok) return resp.json();
        throw new Error("Błąd sieci!");
      })
      .then(data => this.setState({data}))
      .catch(e => console.warn(e));
  };

  handleSwitchFundation(typeOfFundation) {
    this.setState ({
      option: typeOfFundation,
      currentPage: 1
    })
  }

  organizationsList() {
    const { currentPage, dataPerPage, data, option } = this.state;
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    let currentData = data.fundation.slice(indexOfFirstData, indexOfLastData);

    if (option === "fundation") {
      currentData = data.fundation.slice(indexOfFirstData, indexOfLastData);
    } else if(option === "organization") {
      currentData = data.organization.slice(indexOfFirstData, indexOfLastData);
    } else if(option === "collection") {
      currentData = data.collection.slice(indexOfFirstData, indexOfLastData);
    }

    const renderData = currentData.map(({id, name, mission, target}) => {
      return (
        <li key={id} className="list">
          <div>
            <span>{option==="fundation" ? "Fundacja" : null}
            {option==="organization" ? "Organizacja" : null}
            {option==="collection" ? "Zbiórka" : null} "{name}"</span>
            <p>Cel i misja: {mission}</p>
            <hr></hr>
          </div>
          <div>
            <p>{target}</p>
            <hr></hr>
          </div>
        </li>
      )
    });

    return renderData
  }

  numbersOfPages() {
    const { currentPage, dataPerPage, data, option } = this.state;
    const pageNumbers = [];

    if (option === "fundation") {
      for (let i = 1; i <= Math.ceil(data.fundation.length / dataPerPage); i++) {
        pageNumbers.push(i);
      }
    } else if(option === "organization") {
      for (let i = 1; i <= Math.ceil(data.organization.length / dataPerPage); i++) {
        pageNumbers.push(i);
      }
    } else if(option === "collection") {
      for (let i = 1; i <= Math.ceil(data.collection.length / dataPerPage); i++) {
        pageNumbers.push(i);
      }
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </li>
      );
    });

    return renderPageNumbers
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { data, option } = this.state;

    if (!data)
      return <h1>Ładuje...</h1>;
    return (
      <section id="fundations">
        <div className="organizations_container">
          <p>Komu pomagamy?</p>
          <img src={decoration} alt="" />
          <div className="options">
            <span
            onClick={this.handleSwitchFundation.bind(this, "fundation")}
            className={option==="fundation" ? "active" : null}
            >Fundacjom
            </span>
            <span
            onClick={this.handleSwitchFundation.bind(this, "organization")}
            className={option==="organization" ? "active" : null}
            >Organizacją pozarządowym
            </span>
            <span
            onClick={this.handleSwitchFundation.bind(this, "collection")}
            className={option==="collection" ? "active" : null}
            >Lokalnym zbiórkom
            </span>
          </div>
          <span className="description">
            W naszej bazie znajdziesz listę zweryfikowanych Fundacji,
            z którymi współpracujemy. Mozesz sprawdzić czym się zajmują,
            komu pomagają i czego potrzebują.
          </span>
          <div className="options_list">
            <ul>
              {this.organizationsList()}
            </ul>
            <ul id="page-numbers">
              {this.numbersOfPages()}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default FundationsList;