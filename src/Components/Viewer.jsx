import React, { useState, useEffect } from 'react';
import mdToHTML from '../Parser/mdToHTML';

const Viewer = props => {

  const [html, setHtml] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect( () => {
    setHtml(mdToHTML(props.code));
  }, [props.code]);

  return (
    <div>
      <button 
        onClick={ e => setShowCode(true) }
        disabled={showCode}
        className="btn"
      >
        Code
      </button>
      <button 
        onClick={ e => setShowCode(false) }
        disabled={!showCode}
        className="btn"
      >
        Preview
      </button>
      { showCode ? <div id="code">{html}</div> : 
      <div id="preview" dangerouslySetInnerHTML={{__html: html}} /> }
      
      
    </div>
  );

}

export default Viewer;