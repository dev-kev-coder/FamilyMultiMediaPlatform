import React from 'react';
import Folder from './Folder/Folder';

const FoldersAndFilesContainer = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#2C2C2C',
        height: '80vh',
        overflowY: 'auto',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '0',
          backgroundColor: '#2C2C2C',
          height: '4.0em',
        }}
      >
        Header for table here
      </div>

      <Folder />
    </div>
  );
};

export default FoldersAndFilesContainer;
