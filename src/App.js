import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './footer';
import Header from './Header';
import Banner from './Banner';
import Santosh from './santosh';
import Sdata from './sdata';
import Nav from './Nav';
import Profile from './Profile';
import CarouselCom from './CarouselCom';
import Notfound from './NotFound'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  
  return (
    <Router>
    <>
    <div className="container-fluid">
      
      <Header/>
      <Nav/>
        <Switch>
          <Route exact path="/" component={Banner}/> 
          <Route exact path="/about" component={CarouselCom}/> 
          <Route exact path="/user" component={Profile}/>
          <Route  component={Notfound}/>
        </Switch>
      
      
        
          {Sdata.map((val) => { 
                  return (
                    <Santosh 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                    links={val.links}
                  />
                 );
                  })} 
                                  
               
                
                 <Footer/>
          
        
    </div>
    </>
    </Router>
  );
  
}

export default App;


