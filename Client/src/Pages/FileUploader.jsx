import React, { useState } from 'react';
import useFileUploader from '../hooks/useFileUploader';

const FileUploaderContainer = ({ notificationCallback }) => {
  const { filesToUpload, handleChange, handleDragOver, handleDrop } =
    useFileUploader();

  console.log('Current Files to upload: ', filesToUpload);

  return (
    <div>
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          backgroundColor: 'maroon',
          border: '2px dashed black',
          height: '300px',
          width: '300px',
          margin: 'auto',
        }}
      >
        <input
          type="file"
          onChange={handleChange}
          style={{
            opacity: 0,
            width: '100%',
            height: '100%',
          }}
          multiple
        />
      </div>
    </div>
  );
};

export default FileUploaderContainer;
