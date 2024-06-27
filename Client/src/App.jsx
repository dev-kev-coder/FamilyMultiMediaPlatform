import React, { useState } from 'react';
import { Upload } from '@sharedComponents/FileUpload';

const App = () => {
  const handleDragEnter = (e) => {
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      {/* <Upload>
        <div
          style={{
            height: '20em',
            width: '20em',
          }}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          // style={{ padding: '20px', border: '1px solid black' }}
        >
          <h3>Child Component</h3>
        </div>
      </Upload> */}
      <ParentComponent />
    </>
  );
};

const ParentComponent = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();

    // THIS IS KIND OF A FIX.
    // if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
    //   setIsDragging(false);
    // }
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle the drop event here
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ backgroundColor: isDragging ? 'lightblue' : 'white' }}
    >
      <ChildComponent />
      <h2>Parent Component</h2>
    </div>
  );
};

const ChildComponent = () => {
  const handleDragEnter = (e) => {
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{ padding: '20px', border: '1px solid black' }}
    >
      <h3>Child Component</h3>
    </div>
  );
};

export default App;
