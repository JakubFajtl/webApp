import React from 'react';
import Quote from './Quote';

const QuoteContainer = ({ quotes, loading, error }) => {
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
      {quotes.map((quote) => (
        <Quote
          key={quote.id}
          quote={quote.quotecontent}
          author={quote.author}
          year={quote.quoteyear}
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