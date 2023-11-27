import React from 'react';

const Upload = ({ onChange, onDragOver, onDrop }) => {
  return (
    <label
      htmlFor="UploadFilesInput"
      onDragOver={onDragOver}
      onDrop={onDrop}
      style={{
        border: '2px dashed black',
        display: 'inline-block',
        cursor: 'pointer',
        backgroundColor: 'maroon',
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
