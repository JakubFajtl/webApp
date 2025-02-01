import React from 'react';

const GameContainer = () => {
    const style = {
        width: '900px',
        height: '480px',
    }
  return (
    <div style = {style}>
        <iframe
        title="Embedded Website"
        src="http://localhost:5173/"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};


export default GameContainer;