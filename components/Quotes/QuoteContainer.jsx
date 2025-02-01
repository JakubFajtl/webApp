import React from 'react';
import Quote from './Quote';

const QuoteContainer = ({ quotes }) => {
  return (
    <div style={styles.container}>
      {quotes.map((quote, index) => (
        <Quote
          key={index}
          quote={quote.text}
          author={quote.author}
          year={quote.year}
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
};

export default QuoteContainer;