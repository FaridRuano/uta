import React, { Fragment, useState, useEffect } from 'react'
import './style.scss'
import sampleDocument from './docs/format1.htm'
import stringReplace from 'react-string-replace';

const DocViewer = () => {
  const userVariables = {
    DAY: '4',
    MONTH: 'July',
    YEAR: '2023',
  };
  const [documentContent, setDocumentContent] = useState('');
  useEffect(() => {
    fetch(sampleDocument)
      .then(response => response.text())
      .then(content => setDocumentContent(content));
  }, []);

  const replacedContent = documentContent.replace(/\{(.*?)\}/g, (match, key) => {
    return userVariables[key.trim()] || match;
  });

  return (
    <Fragment>
      <div className='doc-warp'>
        <div className='doc-viewer'>
          <div dangerouslySetInnerHTML={{ __html: replacedContent }} />
        </div>
        <div className='doc-params'>
          Parametros
        </div>
      </div>
    </Fragment>
  )
}

export default DocViewer