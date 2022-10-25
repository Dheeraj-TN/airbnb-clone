import React from 'react'
import './App.css';
import Home from './Home';
import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import SearchPage from './SearchPage';
// import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
       <Router>
        <Header/>
           
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
             
                 <Route exact path='/search' element={< SearchPage />}></Route>
          </Routes>
        
        <Footer/>
      </Router>
      
   );
  }
}

export default App;
