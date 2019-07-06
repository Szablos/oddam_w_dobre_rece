import React from 'react';
import Header from './Header';
import YellowBar from './YellowBar';
import FourSteps from './FourSteps';
import About from './About';
import FundationsList from './FundationsList';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <YellowBar />
        <FourSteps />
        <About />
        <FundationsList />
      </main>
      <Contact />
    </>
  )
}

export default App;