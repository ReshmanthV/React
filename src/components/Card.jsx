import React, { useState } from 'react';

const Card = (props) => {
  const [isTruncated, setIsTruncated] = useState(true)
  const toggleTruncate = () => {
    setIsTruncated((prev) => !prev)
  }
  return (
    <div  onClick={toggleTruncate}>
      {isTruncated ? <div className='card'>
        <h3 className="card-name">{props.Name}</h3>
        <p>{props.Phone}</p>
      </div> :
        <div className='big-card'>
          <h3 className="card-name">Name : {props.Name}</h3>
          <p>City : {props.City}</p>
          <p>State : {props.State}</p>
          <p>Gender : {props.Gender}</p>
          <p>Mobile : {props.Phone}</p>  </div>}

    </div>
  );
}

export default Card;
