import React, { Fragment } from 'react'
import './style.scss'
import LogoUta from '../../../assets/images/logo-uta.png'
import MicrosoftLogo from '../../../assets/images/logo-microsoft.png'
import { useNavigate } from 'react-router-dom';

const Tabset = () => {
  const history = useNavigate();

  const routeChange = () => {
    history('/inicio'); // Replace '/new-route' with the desired route path
  };
  return (
    <Fragment>
        <div className='tab-container'>
            <div className='tab-header'>              
              <img className='logo-uta' src={LogoUta} alt="Uta" />
              <div className='tab-header-title'>
                <h2>Universidad</h2>
                <h3>Tecnica de Ambato</h3>
              </div>
            </div>
            <div className='tab-body'>   
              <div className='form-group'>
                <div class="form">
                  <input type="text" name="user" autocomplete="off" required />
                  <label for="user" class="label-name">
                    <span class="content-name">
                      Usuario
                    </span>
                  </label>                
                </div>
                <div className='form'>
                  <input type="password" name="pass" autocomplete="off" required />
                  <label for="pass" class="label-name">
                    <span class="content-name">
                      Contraseña
                    </span>
                  </label>
                </div>
              </div>  
              <div className='buttons-group'>
                <button className='button' onClick={routeChange}>
                  Ingresar
                </button>
                <button className='button microsoft'>
                  <img src={MicrosoftLogo}/>
                  Ingresar con Microsoft
                </button>
              </div>         
            </div>
        </div>
    </Fragment>
  )
}

export default Tabset