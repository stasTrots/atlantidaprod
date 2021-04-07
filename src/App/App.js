import { Component } from 'react';

import '../common/reset.css'
import '../common/base.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer';
import BackBody from './Back-body/BackBody';
import CloseBtn from './Back-body/CloseBtn';

class App extends Component {

  render() {

  
    return (
      <>
        <Header/>
        <Main />
        <Footer/>
        <BackBody />
        <CloseBtn />
      </>
    )
  }
}

export default App;
