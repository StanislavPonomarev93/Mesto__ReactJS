import React from 'react';

function Spinner() {
  return (
    <>
      <div className="spinner">
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="face">
          <div className="circle"></div>
        </div>
        <div className="loading-text">Loading...</div>
      </div>
    </>
  );
}

export default Spinner;