import React, { Component } from 'react'
import Main from './components/main'
import Header from './components/header'
import Cart from './components/cart'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (

	<div id="wrapper">

		<div className="wrapper-holder">


    <Header />
    <Main />


    <Cart />

    </div>


    <Footer />

  </div>

    );
  }
}

export default App
