import React, { useState } from 'react';

const HiddenContentBlock = ({ id, hiddenContent, buttonStyle, contentStyle, useArrowButton, closedButtonText, openButtonText, buttonAlignment }) => {
  const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible((prevState) => !prevState);
  };

  const hiddenContentStyle = {
    maxHeight: isContentVisible ? '500px' : '0',
    overflow: 'hidden',
    transition: 'all 0.5s easy ', 
    ...contentStyle,
  };

  const arrowButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    ...buttonStyle,
  };

  const defaultClosedButtonText = 'Show content';
  const defaultOpenButtonText = 'Hide content';

  const closedButtonLabel = closedButtonText || defaultClosedButtonText;
  const openButtonLabel = openButtonText || defaultOpenButtonText;

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: buttonAlignment === 'left' ? 'flex-start' : buttonAlignment === 'center' ? 'center' : 'flex-end',
  };

  return (
    <div>
      <div style={buttonContainerStyle}>
        {useArrowButton ? (
          <div onClick={() => {
            toggleContentVisibility();
          }} style={arrowButtonStyle}>
            {isContentVisible ? '▲' : '▼'}
          </div>
        ) : (
          <button onClick={() => {
            toggleContentVisibility();
          }} style={{ ...defaultButtonStyle, ...buttonStyle }}>
            {isContentVisible ? openButtonLabel : closedButtonLabel}
          </button>
        )}
      </div>
      <div id={id} style={{ ...hiddenContentStyle }}>
        {hiddenContent}
      </div>
    </div>
  );
};

const defaultButtonStyle = {
  margin: '10px 0',
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default HiddenContentBlock;
