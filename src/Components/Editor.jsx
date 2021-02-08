import React from 'react';


const Editor = props => {

  const onInput = e => {
    console.log(e.target.value);
    props.editing(e.target.value);
  }

  return (
    <div>
      <h1>Editor</h1>
      <form>
        <textarea onChange={ onInput } className="editor"></textarea>
      </form>
    </div>
  );

}

export default Editor;