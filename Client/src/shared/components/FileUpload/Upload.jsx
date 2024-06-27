import React, { useState } from 'react';

const DefaultUploadContainer = ({ isDragOver, children }) => {
  const dragOverStyle = isDragOver
    ? { backgroundColor: 'red' }
    : { backgroundColor: 'blue' };

  return (
    <div
      style={{
        border: '2px dashed black',
        display: 'block',
        cursor: 'pointer',
        // width: '100%',
        // height: '200px',
        ...dragOverStyle,
      }}
      // onDragOver={(e) => e.stopPropagation()}
      // onDragLeave={(e) => e.stopPropagation()}
      // onDrop={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

const Upload = ({
  onChange = null,
  onDrop,
  UploadOverlayComponent = DefaultUploadContainer,
  children,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (onDrop) onDrop(e.dataTransfer.files);
  };

  return (
    <label
      htmlFor="UploadFilesInput"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      // style={{
      //   // overridible styles here
      //   height: '20em',
      //   width: '40em',
      //   // cannot be overridden
      //   border: '2px dashed black',
      //   display: 'block',
      //   cursor: 'pointer',
      //   backgroundColor: '#808080',
      // }}
    >
      <UploadOverlayComponent isDragOver={isDragOver} children={children} />

      <input
        type="file"
        onChange={onChange}
        style={{ display: 'none' }}
        multiple
      />
    </label>
  );
};

export default Upload;
