import React, { useState, useEffect } from 'react';
import QuoteContainer from './QuoteContainer';
import QuoteFormButton from './QuoteFormButton';

const QuoteScene = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quotes from the backend API
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`http://${__MY_LOCAL_IP__}:5000/api/quotes`);
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        setQuotes(data); // Update the state with the fetched quotes
      } catch (err) {
        setError(err.message); // Set error state if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchQuotes();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to add a new quote to the state
  const addQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
  };

  return (
    <div style={styles.scene}>
      <QuoteContainer quotes={quotes} loading={loading} error={error} />
      <QuoteFormButton addQuote={addQuote} />
    </div>
  );
};

const styles = {
  scene: {
    padding: '20px',
    backgroundColor: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
};

export default QuoteScene;