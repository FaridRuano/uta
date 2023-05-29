import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react';
import './assets/scss/app.scss'
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';


function App() {
  return (
    <Fragment>
      <div className='app-background'>
        <BrowserRouter>
            <Routes>
              <Route path='/' exact element={<Login/>}/>
              <Route path='/dashboard' exact element={<Dashboard/>}/>
            </Routes>      
          </BrowserRouter>
      </div>
    </Fragment>    
  );
}

export default App;
