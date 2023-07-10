import React from 'react'

const Admin = () => {
  return (
    <div>Admin</div> 
  )
}


import React, { Fragment, useState } from 'react'
import './style.scss'
import TitleHeader from '../../components/common/titleHeader/title-header'
import Card from '../../components/common/card/card'
import PositiveCheck from '../../components/admin/positive-check/positive-check'
import Hr from '../../components/common/hr/hr'

const Admin = () => {
  const [copyCed, setCopyCed] = useState('yes')
  const [credApro, setCredApro] = useState('yes')
  const [cerMat, setCerMat] = useState('yes')
  return (
    <Fragment>
      <TitleHeader title='Datos del Usuario' desc='Ingresa tu informacion personal que
            sera usada para la generacion de los
            documentos PDF.'/>
      
      <Card>        
        <h2>Formulario de Datos</h2>
        <Hr/>
        <div className='form-admin'>
          <div className='form-admin-in'>
            <label>Copia de Cedula</label>
            <input type='file'/>
          </div>
          {copyCed?(
            <PositiveCheck/>
          ):(
            <Fragment></Fragment>
          )}            
          <div className='form-admin-in'>
            <label>Cedula</label>
            <input/>
          </div>
          <div className='form-admin-in'>
            <label>Nombre</label>
            <input/>
          </div>
          <div className='form-admin-in'>
            <label>Certificado de Creditos Aprobados</label>
            <input type='file'/>              
          </div>
          {credApro?(
            <PositiveCheck/>
          ):(
            <Fragment></Fragment>
          )}              
          <div className='form-admin-in'>
            <label>Nivel</label>
            <input/>
          </div>
          <div className='form-admin-in'>
            <label>Carrera</label>
            <input/>
          </div>
          <div className='form-admin-in'>
            <label>Certificado Matricula</label>
            <input type='file'/>
          </div>            
          {cerMat?(
            <PositiveCheck/>
          ):(
            <Fragment></Fragment>
          )}           
        </div>
      </Card>
    </Fragment>
  )
}

export default Admin