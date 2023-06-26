import React, { Fragment } from 'react'
import './style.scss'
import { File } from 'react-feather'

const TabsetAdmin = ({title}) => {
  return (
    <Fragment>
        <div className='tabset-container'>
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