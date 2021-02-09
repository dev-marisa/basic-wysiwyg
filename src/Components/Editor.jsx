import React, { useState } from 'react';
import LineNumbers from './LineNumbers';

const getLength = raw => raw.split(/\r\n|\r|\n/).length;

const Editor = props => {

  const [rows, setRows] = useState(1);

  const onInput = e => {
    setRows(getLength(e.target.value));
    props.editing(e.target.value);
  }

  return (
    <div>
      <h1>Editor</h1>
      <div className="row">
        <div className="col-sm p10">
          <LineNumbers max={rows} />
        </div>
        <div className="col">
          <form>
            <textarea onChange={ onInput } className="editor" rows={rows} />
          </form>
        </div>
      </div>
    </div>
  );

}

export default Editor;