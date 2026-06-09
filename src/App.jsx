import React from 'react'
import AppContext from './App.context'
import Header from './components/header/header'
import About from './components/about/about'
import Resume from './components/resume/resume'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'

const App = () => (
  <AppContext>
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  </AppContext>
)

export default App
