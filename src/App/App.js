import React, { Component } from 'react';

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
    openScroll:false
  }      
scrollToTop = () => {
  window.scrollTo({
    top:0,
    behavior:'smooth',
    smooth: true
  })
  this.setState({
    openScroll:false
  })
}
openClickMenu = () => {
    this.setState((pervState) => ({
        sideDrawerOpen:!pervState.sideDrawerOpen
    }))
}

closeClickBtn = () => {
  this.setState({
    sideDrawerOpen:false,
  })
}
componentDidMount() {
  window.addEventListener('scroll', this.handleScroll)
}
handleScroll = () => {
  if((window.pageYOffset > document.body.scrollHeight / 4)) {
    this.setState({
      openScroll:true
    }) 
    
  } else {
    this.setState({
      openScroll:false
    })
  }
}

  render() {
    
  
    return (
      <div onScroll={this.handleScroll}>
        <Header
        openClickMenu={this.openClickMenu}
        show={this.state.sideDrawerOpen}/>
        <Main 
        scrollToTop={this.scrollToTop}
        openScroll={this.state.openScroll}/>
        <Footer/>
        <BackBody />
        <CloseBtn 
        show={this.state.sideDrawerOpen}
        close={this.closeClickBtn}/>
      </div>
    )
  }
  
}

export default App;
