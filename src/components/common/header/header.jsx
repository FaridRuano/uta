import React, { Fragment } from 'react'
import { Menu } from 'react-feather'
import './style.scss'

const Header = ({activeNav, isOpen}) => {
    
  return (
    <Fragment>
        <div className={isOpen ? 'space-header' : 'space-header cl'}>
            <Menu className='menu-icon' onClick={activeNav}/>
        </div>
    </Fragment>
  )
}

export default Header