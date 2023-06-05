import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Fragment } from 'react';
import './assets/scss/app.scss'
import Sidebar from './components/common/sidebar/sidebar';
import Routers from './routes/routers';


function App() {
  return (
    <Fragment>
      <div className='app-background'>
        <React.StrictMode>
          <BrowserRouter basename={"/"}>
            <Routers />
          </BrowserRouter>
        </React.StrictMode>
      </div>
    </Fragment>    
  );
}

export default App;
