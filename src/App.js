import React, { useState } from 'react';
import Editor from './Components/Editor';
import Viewer from './Components/Viewer';

const App = props => {

  const [code, setCode] = useState("");

  const editing = code => {
    setCode(code);
  }

  return (
    <div>
      <h1>Basic Editor</h1>
      <div className="row">
        <div className="col">
          <Editor editing={ editing } />
        </div>
        <div className="col">
          <Viewer code={ code } />
        </div>
      </div>
    </div>
  );
}

export default App;
