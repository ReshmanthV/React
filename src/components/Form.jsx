import React, { useState } from 'react';
import './Form.css';
// import { useNavigate } from 'react-router-dom';
const Form = ({ setUserList }) => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    gender: '',
    phone: ''
  });

  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserList((prev) => {
      console.log("New item added");
      return [...prev, formData]
    });
    
    setFormData({
      name: '',
      city: '',
      state: '',
      gender: '',
      phone: ''
    })
    setMessage("User added successfully");
  };



  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <u><h2>Add User</h2></u>
        <input type="text" name="name" value={formData.name} placeholder='Name' required onChange={handleInputChange} />
        <br />
        <input type="text" name="city" value={formData.city} placeholder='City' required onChange={handleInputChange} />
        <br />
        <input type="text" name="state" value={formData.state} placeholder='State' required onChange={handleInputChange} />
        <br />
        <input type="text" name="gender" value={formData.gender} placeholder='Gender' required onChange={handleInputChange} />
        <br />
        <input type="tel" name="phone" value={formData.phone} placeholder='Phone' required onChange={handleInputChange} />
        <br />
        <button type="submit">Add</button>
        <div>{message}</div>
      </form>
    </div>
  );
};

export default Form;
