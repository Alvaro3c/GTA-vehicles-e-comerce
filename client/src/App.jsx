import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>

      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
