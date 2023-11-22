import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {options.map(btn => (
        <button name={btn} key={btn} onClick={onLeaveFeedback}>
          {btn}
        </button>
      ))}
    </div>
  );
};
