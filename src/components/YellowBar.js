import React, {Component} from 'react';
import '../scss/yellowbar.scss';

class YellowBar extends Component {
  state = {
    bags: 10,
    organizations: 5,
    collection: 7
  }

  render() {
    const { bags, organizations, collection } = this.state;
    return (
      <section className="yellow_bar">
        <div>
          <p>{bags}</p>
          <p>ODDANYCH WORKÓW</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse augue leo, luctus at nulla at, maximus tincidunt.
          </p>
        </div>
        <div>
          <p>{organizations}</p>
          <p>WSPARTYCH ORGANIZACJI</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse augue leo, luctus at nulla at, maximus tincidunt.
          </p>
        </div>
        <div>
          <p>{collection}</p>
          <p>ZORGANIZOWANYCH ZBIÓREK</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse augue leo, luctus at nulla at, maximus tincidunt.
          </p>
        </div>
      </section>
    )
  }
}

export default YellowBar;