import React, { useState } from 'react';

const Upload = ({ onChange, onDragOver, onDrop, onDragEnter, onDragLeave }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleOnDragOver = (e) => {
    onDragOver(e);
    setIsDragOver(true);
  };

  const handleOnDragLeave = (e) => {
    onDragLeave(e);
    setIsDragOver(false);
  };

  const handleMouseEnter = (e) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    if (isDragOver) return 'lightblue'; // Color when dragging files over
    if (isHovered) return 'lightgreen'; // Color when mouse hovers over
    return 'white'; // Default color
  };

  return (
    <label
      htmlFor="UploadFilesInput"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDragOver={handleOnDragOver}
      onDragLeave={handleOnDragLeave}
      onDrop={onDrop}
      onDragEnter={onDragEnter}
      style={{
        // overridible styles here
        height: '20em',
        width: '40em',
        // cannot be overridden
        border: '2px dashed black',
        display: 'block',
        cursor: 'pointer',
        backgroundColor: '#808080',
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
