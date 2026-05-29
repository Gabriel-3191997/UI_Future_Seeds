import React  from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Content from './components/content'
import FooterSection from './components/footer_section'
import Footer from './components/footer'
import './App.css'


class App extends React.Component{

  render(){

    return(
      <>
      <Navbar />
     
       <Banner />
       <Content />
       <FooterSection />
      <Footer />
      </>
    )
  }
}

export default App
