import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResult = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const query = params.get('query') || '';

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/search?query=${query}`);
        setResults(response.data);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for: "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : results.length ? (
        <ul>
          {results.map(item => (
            <li key={item._id}>
              <strong>{item.name}</strong> - {item.description} (${item.price})
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResult;
