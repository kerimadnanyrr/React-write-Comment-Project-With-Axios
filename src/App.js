


import { Route, Routes } from 'react-router-dom';

import React from 'react';


import './App.css';
import Writingdetails from './components/Writingdetails';
import Writinglist from './components/Writinglist';
import Writingadd from './components/Writingadd';
import WritingEdit from './components/WritingEdit';



function App() {


  return (
   
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
     
          <Routes>  
          <Route path="/" exact element={ <Writinglist/> } />
          <Route path="/posts/:id" exact element={ <Writingdetails/> } />
          <Route path="/writingadd" element={ <Writingadd/> } />
          <Route path="/posts/:id/edit" element={ <WritingEdit/> } />


          </Routes>




        </div>

      </div>





  );
}

export default App;
