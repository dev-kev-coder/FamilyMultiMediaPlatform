import React, { useState } from 'react';
import FoldersAndFilesContainer from './components/FoldersAndFilesContainer';
import UploadWrapper from './components/UploadWrapper';
import './app.css';

const App = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: '#FFC857',
          height: '3em',
        }}
      >
        This will have header info
      </header>

      <UploadWrapper>
        <FoldersAndFilesContainer />
      </UploadWrapper>
    </>
  );
};

export default App;
