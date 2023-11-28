import React from 'react';

const DisplayFiles = ({ files }) => {
  const filesList = Object.values(files);

  return (
    <>
      {filesList.map((file) => {
        return (
          <div key={file.name}>
            <span>{file.name}</span> <span>{file.size}</span>{' '}
            <span>{file.lastModified}</span>
          </div>
        );
      })}
    </>
  );
};

export default DisplayFiles;
