import React from 'react';
import useFileUploader from '@sharedHooks/useFileUploader';
import Upload from './Upload';
import DisplayFiles from './DisplayFiles';

const FileUpload = () => {
  const {
    filesToUpload,
    handleFilesChange,
    handleFilesDragOver,
    handleFilesDrop,
  } = useFileUploader();

  console.log('Files to upload: ', filesToUpload);

  return (
    <div>
      <Upload
        onChange={handleFilesChange}
        onDragOver={handleFilesDragOver}
        onDrop={handleFilesDrop}
      />

      <DisplayFiles files={filesToUpload} />
    </div>
  );
};

export default FileUpload;
