import React, { useState, useEffect } from 'react';
import mdToHTML from '../Parser/mdToHTML';

const Viewer = props => {

  const [html, setHtml] = useState("");

  useEffect( () => {
    setHtml(mdToHTML(props.code));
  }, [props.code]);

  return (
    <div>
      <h1>Viewer</h1>
      <div id="preview" dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );

}

export default Viewer;