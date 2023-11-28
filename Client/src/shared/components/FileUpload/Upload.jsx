import React, { useState } from 'react';

const Upload = ({ onChange, onDragOver, onDrop, onDragEnter }) => {
  const [isOnComponent, setIsOnComponent] = useState(false);

  const toggleIsOnComponent = () => setIsOnComponent((prev) => !prev);

  return (
    <label
      htmlFor="UploadFilesInput"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      onMouseEnter={toggleIsOnComponent}
      onMouseLeave={toggleIsOnComponent}
      style={{
        border: '2px dashed black',
        display: 'block',
        cursor: 'pointer',
        backgroundColor: isOnComponent ? 'blueviolet' : 'maroon',
        height: '300px',
        width: '600px',
      }}
    >
      <h1 style={{ color: 'white' }}>Upload Files</h1>
      <input
        id="UploadFilesInput"
        type="file"
        onChange={onChange}
        style={{
          display: 'none',
        }}
        multiple
      />
    </label>
  );
};

export default Upload;
