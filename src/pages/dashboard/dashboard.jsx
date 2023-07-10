import React, { Fragment, useState } from 'react'

// dashboard jsx commit
import React, { Fragment, useEffect, useState } from 'react'
import TabsetAdmin from '../../components/dashboard/Tabset/tabset'
import './style.scss'
import { File, Search, XCircle } from 'react-feather'
import { DOCS } from '../../constants/docs'
import { Link } from "react-router-dom";
import TitleHeader from '../../components/common/titleHeader/title-header'
import Card from '../../components/common/card/card'
import Hr from '../../components/common/hr/hr'

const Dashboard = () => {
  const [selTitle, setSelTitle] = useState('practicas')
  const [search, setSearch] = useState('')
  const [docs, setDocs] = useState([])
  const [filteredDocs, setFilteredDocs] = useState([])

  const hanTitle = (tit) => {
    setSelTitle(tit)
    setFilteredDocs(docs.filter((doc) => doc.cat === tit))
  }

  useEffect(()=>{
    setDocs(DOCS)
    setFilteredDocs(DOCS.filter((doc) => doc.cat === selTitle))
  },[])  

  useEffect(()=>{    
    
    const result = filteredDocs.filter(item =>{
			return item.name.toLowerCase().match(search.toLowerCase());
		});

    if(search === ''){
      setFilteredDocs(DOCS.filter((doc) => doc.cat === selTitle))
    }else{
      setFilteredDocs(result);
    }
    
  },[search])

  return (    
    <Fragment>
      <TitleHeader title="Documentos" desc="Documentos disponibles para usar."/>
      <div className='content-wrap'>
        <div className='tabsets-wrap'>
          <div onClick={()=>hanTitle("practicas")}>
            <TabsetAdmin title="Practicas"/>
          </div>
          <div onClick={()=>hanTitle("titulacion")}>
            <TabsetAdmin title="Titulacion"/>
          </div>
          <div onClick={()=>hanTitle("procesos")}>
            <TabsetAdmin title="Procesos"/>
          </div>
          </div>          
          <div onClick={()=>hanTitle("docentes")}>
            <TabsetAdmin title="Docentes"/>
          </div>          
        </div>
      </div>

      <div className='content-wrap'>        
        <Card>
          <div className='card-header'>
            <div className='docs-title'>
              <h2>{selTitle.charAt(0).toUpperCase() + selTitle.slice(1).toLowerCase()}</h2>
            </div>
            <div className='search-wrap'>
              <input
                className='search-input'                
                placeholder='Buscar'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search === '' ? (
                <Search className='search-icon'/>
              ):(              
                <XCircle className='search-icon' style={{cursor: 'pointer'}}
                  onClick={()=>setSearch('')}
                />
              )}
            </div>
          </div>
          <Hr/>
          <div className='card-body'>
              <div>
                  {filteredDocs.map((doc) => (
                    <Fragment>
                      <Link to={`/doc-viewer/${doc.id}`} style={{'textDecoration' : 'none'}}>
                        <div className='row-doc' >
                            <File/>
                            <span >{doc.name}</span>
                        </div>
                      </Link>
                    </Fragment>
                    
                  ))}
              </div>
          </div>
        </Card>        
      </div>
    </Fragment>
  )
}

export default Dashboard