import React from 'react';

const Quote = ({ quote, author, year }) => {
  return (
    <div style={styles.quoteContainer}>
      <p style={styles.quoteText}>"{quote}"</p>
      {author?<p style={styles.quoteAuthor}>- {author}{year?", ":""}{year}</p>:""}
      

      {/* <p style={styles.quoteYear}>{year}</p> */}
    </div>
  );
};

const styles = {
  quoteContainer: {
    textAlign: 'center',
    margin: '20px 0 0 0',
    padding: '20px',
    borderLeft: '4px solid #333',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  quoteText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    color: '#333',
    margin: '0 0 0 0',
    //margin: '0 0 10px 0',
  },
  quoteAuthor: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#555',
    margin: '0 0 5px 0',
  },
  quoteYear: {
    fontSize: '1rem',
    color: '#777',
    margin: '0',
  },
};

export default Quote;