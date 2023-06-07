import React, { useState } from 'react';
import Card from './Card';
import SearchBar from './searchBar';

const Userlist = ({ userList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <div className='search_bar'>
        <SearchBar handleSearch={handleSearch} />
      </div>
      {userList
        .filter((data) =>
          data.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
        )
        .map((item) => {
          return <Card Name={item.name} Phone={item.phone} State={item.state} City={item.city} Gender={item.gender} />
        })}
    </>
  );
}


export default Userlist;
