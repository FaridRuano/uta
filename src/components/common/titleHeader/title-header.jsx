title-header.jsx
import React, { Fragment } from 'react'
import './style.scss'
const TitleHeader = ({title, desc}) => {
  return (
    <Fragment>
        <div className='titleheader'>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </Fragment>
  )
}

export default TitleHeader

