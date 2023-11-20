import React, { useEffect, useRef, useState } from 'react';

const calculateRelativeFileSize = (fileSizeInBytes) => {
  // do some calculation that will return the corresponding size
  // I.E. Bytes, KB, MB, GB, ...Etc.
  return fileSizeInBytes;
};

const displayUploadedFiles = (upLoadedFiles) => {
  const reactNodes = [];

  if (Object.keys(upLoadedFiles).length > 0) {
    for (const fileName in upLoadedFiles) {
      const currentFile = upLoadedFiles[fileName];
      const node = (
        <div key={fileName}>
          FileName: {fileName}, FileSize:{currentFile.fileSize}, Date Uploaded:{' '}
          {currentFile.uploadTime}
        </div>
      );

      reactNodes.push(node);
      console.log('reactNodes: ', reactNodes);
    }
  }

  return reactNodes;
};

const FileUploaderContainer = () => {
  const [filesUploaded, setFilesUploaded] = useState({});
  const fileInput = useRef(null);

  const handleChange = (_) => {
    const files = fileInput.current.files;
    const currentFiles = { ...filesUploaded };

    for (let file of files) {
      const { name, size, lastModified } = file;

      if (currentFiles[name]) alert('file already exists');
      else {
        currentFiles[name] = {
          fileName: name,
          fileSize: calculateRelativeFileSize(size),
          uploadTime: lastModified,
        };
      }
    }

    setFilesUploaded(currentFiles);
  };

  return (
    <div>
      <label htmlFor="file">File</label>
      <input
        ref={fileInput}
        id="fileInput"
        name="file"
        type="file"
        multiple
        onChange={handleChange}
      />
      <>{displayUploadedFiles(filesUploaded)}</>
    </div>
  );
};

export default FileUploaderContainer;
