import React, { useState } from 'react';
import '../css/style.css';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className='form-div'>
    <form onSubmit={handleSubmit}>
      <label>
        <span className='input-label'>Movie Title:</span>
        <input className='main-input' placeholder='Enter Movie Title' type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>
      <button type="submit">Search</button>
    </form>
    </div>
  );
};

export default SearchForm;
