import React from 'react';

const FoldersAndFilesContainer = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#2C2C2C',
        height: '80vh',
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default FoldersAndFilesContainer;
