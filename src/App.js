import React, { useState } from 'react';
import './App.css';
function MultiFieldForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    ageGroup: '',
    message: '',
  });

  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, gender, ageGroup, message } = formData;
    if (!name || !email || !gender || !ageGroup || !message) {
      alert('Please fill in all the fields.');
      return;
    }
    alert('Form submitted successfully');
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <div className="top-bar">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-label">{darkMode ? 'Dark' : 'Light'} Mode</span>
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="gender-group">
          <label>Gender:</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} /> Other
            </label>
          </div>
        </div>

        <div>
          <label>Age Group:</label>
          <select name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
            <option value="">Select Age Group</option>
            <option value="15-25">15-25</option>
            <option value="20+">25+</option>
          </select>
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MultiFieldForm;
