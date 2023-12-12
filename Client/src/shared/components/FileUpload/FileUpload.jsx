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
    handleFilesDragEnter,
    handleFilesDragLeave,
  } = useFileUploader();

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();

    const files = Object.values(filesToUpload);

    for (const file of files) {
      formData.append('Files', file.payload);
    }

    console.log(formData);

    fetch('api/Files/UploadFiles', {
      method: 'POST',
      body: formData,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <Upload
        onChange={handleFilesChange}
        onDragOver={handleFilesDragOver}
        onDrop={handleFilesDrop}
        onDragEnter={handleFilesDragEnter}
        onDragLeave={handleFilesDragLeave}
      />

      <DisplayFiles files={filesToUpload} />

      <button type="button" onClick={handleUpload}>
        Upload Files
      </button>
    </div>
  );
};

export default FileUpload;
