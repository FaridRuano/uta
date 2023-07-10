import React, { Fragment, useContext } from 'react'
import './style.scss'
import { File } from 'react-feather'
import { Context } from '../../../pages/app'

const TabsetAdmin = ({title}) => {
  const [sideOpen, setSideOpen] = useContext(Context)  


export default TabsetAdmin


  return (
    <Fragment>
        <div className={sideOpen?'tabset-container':'tabset-container cld'}>
            <div className='tabset-icon-wrap'>
                <File className='tabset-icon'/>
            </div>
            <div className='tabset-title-wrap'>
                <span className='tabset-title'>
                    {title}
                </span>
            </div>
        </div>
    </Fragment>
  )
}

export default TabsetAdmin

