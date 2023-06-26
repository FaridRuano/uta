import React, { Fragment } from 'react'
import './style.scss'
import Tabset from '../../components/login/Tabset/tabset'
import Header from '../../components/common/header/header'

const Login = () => {
  return (
    <Fragment>
        <div className='center-container'>
            <Tabset />            
        </div>
    </Fragment>
  )
}

export default Login