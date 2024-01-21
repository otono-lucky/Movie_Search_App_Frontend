import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './component/SearchForm';
import SearchResult from './component/SearchResult';
import './css/style.css';



const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [latestSearches, setLatestSearches] = useState([]);

  useEffect(() => {
    // Fetch latest searches from the backend API
    const fetchLatestSearches = async () => {
      try {
        const searchResponse = await axios.get('https://localhost:7057/api/LatestSearch/get-latest-searches');
        setLatestSearches(searchResponse.data);
      } catch (error) {
        console.error('Error fetching latest searches:', error);
      }
    };

    fetchLatestSearches();
  }, []);

  // useEffect(() => {
    
  //   const storedSearches = localStorage.getItem('latestSearches');
  //   if (storedSearches) {
  //     setLatestSearches(JSON.parse(storedSearches));
  //   }
  // }, []);

 
    const handleSearch = async (query) => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?t=${query}&apikey=ce11fca`);
        const result = response.data;

        const backResponse = await axios.post('https://localhost:7057/api/LatestSearch/save-latest-searches', { query });
        console.log('Backend Response:', backResponse.data);

       const latestSearchResponse = await axios.get('https://localhost:7057/api/LatestSearch/get-latest-searches');
       console.log(latestSearchResponse.data);
       setLatestSearches(latestSearchResponse.data);
  
        // Update search results
        setSearchResults([result]);
  
        // Update latest searches
        // const updatedSearches = [...latestSearches, query].slice(-5);
        // setLatestSearches(updatedSearches);
  
        // Save latest searches to localStorage
        //localStorage.setItem('latestSearches', JSON.stringify(updatedSearches));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  

  return (
    <div>
      <h1 className='main-title'>Movie Search App</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} />
      <div>
        <h2>5 Saved Latest Searches from the Backend</h2>
        <ul>
          {latestSearches.map((search, index) => (
            <li key={index}>{search.query}</li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export default App;
