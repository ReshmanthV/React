import React from 'react';
import Form from './Form';


const Createuser = (props) => {
  return (
    <div className="App">
      <Form setUserList={props.setUserList} />
    </div>
  );
}

export default Createuser;
