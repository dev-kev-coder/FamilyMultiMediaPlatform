import React from 'react';
import UploadWrapper from './UploadWrapper';

const FoldersAndFilesContainer = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#2C2C2C',
        height: '80vh',
        overflowY: 'auto',
      }}
    >
      <UploadWrapper>{children}</UploadWrapper>
    </div>
  );
};

export default FoldersAndFilesContainer;
