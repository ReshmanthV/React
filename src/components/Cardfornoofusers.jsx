import React from 'react';

const Cardfornoofusers = ({ list }) => {
  const listLegth = list.length
  return (
    <div className='Cardfornoofusers'>
        <p>No. of users : {listLegth}</p>
    </div>
  );
}

export default Cardfornoofusers;
