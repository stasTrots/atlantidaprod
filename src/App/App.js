import { Component } from 'react';

import '../common/reset.css'
import '../common/base.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer';
import BackBody from './Back-body/BackBody';
import CloseBtn from './Back-body/CloseBtn';

class App extends Component {

  state={
    sideDrawerOpen:false,
    filterMenuOpen:false,

  }      
scrollToTop = () => {
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}


pageClickBtn = () => {
  this.setState((pervState) => ({
    
    pageBth:pervState.slice2 + 5,
  }))
  
}
openClickMenu = () => {
    this.setState((pervState) => ({
        sideDrawerOpen:!pervState.sideDrawerOpen
    }))
}
openFilter = () => {
  this.setState((pervState) => ({
    filterMenuOpen:!pervState.filterMenuOpen
  }))
}
closeClickBtn = () => {
  this.setState({
    sideDrawerOpen:false,
    filterMenuOpen:false
  })
}


  render() {
    
  
    return (
      <>
        <Header
        openClickMenu={this.openClickMenu}
        show={this.state.sideDrawerOpen}/>
        <Main 
        openFilter={this.openFilter}
        filterState={this.state.filterMenuOpen}
        scrollToTop={this.scrollToTop}/>
        <Footer/>
        <BackBody />
        <CloseBtn 
        show={this.state.sideDrawerOpen}
        filterState={this.state.filterMenuOpen}
        close={this.closeClickBtn}/>
      </>
    )
  }
}

export default App;
