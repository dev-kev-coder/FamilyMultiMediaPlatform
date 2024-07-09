import Folder from '@sharedComponents/Folder/Folder';
import React, { useState } from 'react';
import FoldersAndFilesContainer from './components/FoldersAndFilesContainer';
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

      <section
        style={{
          padding: '1.5em',
        }}
      >
        <FoldersAndFilesContainer>
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
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
          <Folder />
        </FoldersAndFilesContainer>
      </section>
    </>
  );
};

export default App;
