import React, { useState } from 'react';

const Button = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#ffffff' : '#000000',
    color: isHovered ? '#000000' : '#ffffff',
    border: isHovered ? '1px solid #FFFFFF' : '1px solid #000000',
    // border: '1px solid #FFFFFF',
    //padding: '10px 20px',
    //margin: '0 10px',
    borderRadius: '0px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    outline: 'none',
    width: '150px', // Fixed width for all buttons
    height: '50px', // Fixed height for all buttons
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const NavigationPanel = ({ onNavigate }) => {
  const navItems = ['Quotes', 'Gallery', 'Games', 'CV', 'QnA'];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //padding: '20px',
    backgroundColor: '#000000',
    //gap: '15px',
    position: 'relative', // Add sticky positioning
    top: 0, // Stick to the top of the viewport
    zIndex: 1000, // Ensure it stays above other content
  };
  return (
    <div style={containerStyle}>
      {navItems.map((item, index) => (
        <Button
          key={index}
          label={item}
          onClick={() => onNavigate(item)} // Pass the selected page to the parent
        />
      ))}
    </div>
  );
};

export default NavigationPanel;