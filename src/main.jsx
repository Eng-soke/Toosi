import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Header from "./Components/Header"
import Menu from "./Components/Menu"
import Show from "./Components/Show"
import Core from './Components/Core'
import Footer from './Components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
      <div>
        <Header />
        <Menu />
        <Show />
       
        < Core />
        <Footer />
      </div>
)
