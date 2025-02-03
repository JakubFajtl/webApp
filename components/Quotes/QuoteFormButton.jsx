import React, { useState } from 'react';

const QuoteFormButton = ({ addQuote }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [quotecontent, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteyear, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuote = { quotecontent, author, quoteyear: parseInt(quoteyear) };

    try {
      const response = await fetch(`http://${__MY_LOCAL_IP__}:5000/api/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuote),
      });

      if (response.ok) {
        const addedQuote = await response.json();
        addQuote(addedQuote); // Add the new quote to the state
        //alert('Quote submitted successfully!');
        setContent('');
        setAuthor('');
        setYear('');
        setIsFormVisible(false); // Hide the form after submission
      } else {
        alert('Failed to submit quote.');
      }
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('An error occurred while submitting the quote.');
    }
  };

  const styles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two equal columns
    gridTemplateRows: 'auto auto', // Two rows
    gap: '16px', // Space between grid items
  };

  return (
    <div>
      {!isFormVisible ? (
        <button onClick={() => setIsFormVisible(true)}>Add Quote</button>
      ) : (
        <form onSubmit={handleSubmit} style={styles}>
          <div style={{ gridColumn: 'span 2', overflow: 'hidden' }}>
            <label htmlFor="content" style={{ textAlign: 'left' }}>
              Content:
            </label>
            <input
              type="text"
              id="content"
              value={quotecontent}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <label htmlFor="author" style={{ textAlign: 'left' }}>
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <label htmlFor="year" style={{ textAlign: 'left' }}>
              Year:
            </label>
            <input
              type="number"
              id="year"
              value={quoteyear}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button type="submit" style={{ gridColumn: 'span 2' }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default QuoteFormButton;