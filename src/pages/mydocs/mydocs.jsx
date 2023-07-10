import React, { Fragment, useEffect, useState } from 'react'
import './style.scss'
import { MYDOCS } from '../../constants/myDocs'
import TitleHeader from '../../components/common/titleHeader/title-header'
import { File } from 'react-feather'

const MyDocs = () => {
  const [myDocs, setMyDocs] = useState([])

  useEffect(()=>{
    setMyDocs(MYDOCS)
  },[])  

  return (
    <Fragment>
      <TitleHeader title='Mis documentos' desc='Documentos generados por el usuario previamente.'/>
      <div className='container-docs'>        
        <div className='docs-table'>
          <div className='docs-table-title'>
            <div style={{width: '25vw'}}>
              <h2>Documento</h2>
            </div>          
            <div style={{width: '10vw', }}>
              <h2>Fecha</h2>
            </div>
            <div>
              <h2>Acciones</h2>
            </div>
          </div>
          <div className='hr'/>
          {myDocs.map((item, i) => (
            <div className='docs-table-row'>
              <div className='table-row' style={{width: '25vw'}}>
                <File/>
                <p>{item.name}</p>
              </div>
              <div className='table-row' style={{width: '10vw', }}>
                <p>{item.date}</p>
              </div>              
              <div className='table-row'>
                <button className='button-mydocs ac'>Actualizar</button>
                <button className='button-mydocs de'>Eliminar</button>
              </div>           
            </div>
          ))}                    
        </div>
      </div>
    </Fragment>
  )
}

export default MyDocs
