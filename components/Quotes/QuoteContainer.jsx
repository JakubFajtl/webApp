import React, { useState, useEffect } from 'react';
import Quote from './Quote';

const QuoteContainer = () => {
  // State to store the quotes
  const [quotes, setQuotes] = useState([]);
  // State to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quotes from the backend API
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quotes');
        if (!response.ok) {
          throw new Error('Failed to fetch quotes');
        }
        const data = await response.json();
        console.log(data);
        setQuotes(data); // Update the state with the fetched quotes
      } catch (err) {
        setError(err.message); // Set error state if something goes wrong
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchQuotes();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display loading state
  if (loading) {
    return <div style={styles.loading}>Loading quotes...</div>;
  }

  // Display error state
  if (error) {
    return <div style={styles.error}>Error: {error}</div>;
  }

  // Display quotes
  return (
    <div style={styles.container}>
      {quotes.map((quote, index) => (
        <Quote
          key={quote.id}
          quote={quote.quotecontent} // Use 'quote.quote' to match the backend response
          author={quote.author}
          year={quote.quoteyear} // Assuming 'year' is part of the quote object
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#555',
    marginTop: '20px',
  },
  error: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'red',
    marginTop: '20px',
  },
};

export default QuoteContainer;