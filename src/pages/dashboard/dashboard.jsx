import React, { Fragment, useState } from 'react'
import TabsetAdmin from '../../components/dashboard/Tabset/tabset'
import './style.scss'
import { Search, XCircle } from 'react-feather'
import { DOCS } from '../../constants/docs'

const Dashboard = () => {
  const [selTitle, setSelTitle] = useState('Practicas')
  const [search, setSearch] = useState()
  
  const filteredDocs = DOCS.filter((doc) => doc.cat === "practicas");

  return (    
    <Fragment>
      <div className='content-wrap'>
        <div className='tabsets-wrap'>
          <div onClick={()=>setSelTitle("Practicas")}>
            <TabsetAdmin title="Practicas"/>
          </div>
          <div onClick={()=>setSelTitle("Titulacion")}>
            <TabsetAdmin title="Titulacion"/>
          </div>
          <div onClick={()=>setSelTitle("Procesos")}>
            <TabsetAdmin title="Procesos"/>
          </div>
        </div>
      </div>

      <div className='content-wrap'>
        <div className='card-wrap'>
          <div className='card-header'>
            <div className='docs-title'>
              <span>{selTitle}</span>
            </div>
            <div className='search-wrap'>
              <input
                className='search-input'                
                placeholder='Buscar'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
              />
              {search === '' ? (
                <Search className='search-icon'/>
              ):(              
                <XCircle className='search-icon' style={{cursor: 'pointer'}} onClick={()=>setSearch('')}/>
              )}
            </div>
          </div>
          <div className='card-body'>
              <div>
                  {filteredDocs.map((doc) => (
                    <Fragment>
                      <span>{doc.name}</span>

                    </Fragment>
                    
                  ))}
              </div>
          </div>
        </div>        
      </div>
    </Fragment>
  )
}

export default Dashboard