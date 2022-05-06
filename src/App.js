import React from "react";
import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Side from "./Side";
import Content from "./Content";


function App() {
  return (
    <div className="App">
       <Header/> 
       <div id="content-side">
        <Side/>
        <Content/>
       </div>
       <Footer/>
     
       
    </div>
  );
}

export default App;
