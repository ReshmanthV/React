import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css"

import Userlist from './components/UserList';
import EChart from './components/BarChart';
import Createuser from './components/CreateUser';

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <Router>
      <div className="dashboard">
        <nav className="sidebar">

          <Link to="/">
            <span>Add User</span>
          </Link>

          <Link to="/UserList">
            <span>User List</span>
          </Link>

          <Link to="/chart">
            <span>Bar Chart</span>
          </Link>

        </nav>
        <div className="main">
          <Routes>
            <Route path="/" element={<Createuser setUserList={setUserList} />} />
            <Route path="/UserList" element={<Userlist userList={userList} />} />
            <Route path="/chart" element={<EChart data={userList}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
