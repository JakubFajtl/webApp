import React from 'react';
import QuoteContainer from './QuoteContainer';

const QuoteScene = ({ quotes }) => {
  return (
    <div style={styles.scene}>
      <QuoteContainer quotes={quotes} />
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