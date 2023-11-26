import React, { useEffect, useRef, useState } from 'react';

const calculateFileSize = (fileSizeInBytes) => {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;

  let fileSize = fileSizeInBytes;

  while (fileSize >= 1024 && unitIndex < units.length - 1) {
    fileSize /= 1024;
    unitIndex++;
  }

  return `${fileSize.toFixed(2)} ${units[unitIndex]}}`;
};

const formatToMonthDayYear = (datetime) => {
  const date = new Date(datetime);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

const confirmWithUser = (callback) => {
  if (!callback)
    return confirm('File Name exists already would you like to upload a copy?');
  else return notification();
};

const addFile = (file, files) => {
  const { name, size, lastModified } = file;

  if (files[name]) return false;

  files[name] = {
    payload: file,
    name,
    size: calculateFileSize(size),
    lastModified: formatToMonthDayYear(lastModified),
  };

  return true;
};

const FileUploaderContainer = ({ notificationCallback }) => {
  const [filesToUpload, setFilesUploaded] = useState({});

  console.log(filesToUpload);

  const handleChange = (e) => {
    const selectedfiles = e.target.files;
    const updatedFilesToUpload = { ...filesToUpload };

    for (const file of selectedfiles) {
      if (updatedFilesToUpload[file.name]) {
        const uploadCopy = confirmWithUser(notificationCallback);

        if (uploadCopy) {
          let copyAdded = false;
          let copyVersionNum = 0;

          while (!copyAdded) {
            let fileCopyName = `${file.name} - (${copyVersionNum})`;

            const fileCopy = new File([file], fileCopyName, {
              type: file.type,
              lastModified: file.lastModified,
            });

            copyAdded = addFile(fileCopy, updatedFilesToUpload);
            copyVersionNum++;
          }
        }
      } else {
        const fileAdded = addFile(file, updatedFilesToUpload);

        if (!fileAdded) alert('Something went wrong');
      }
    }

    setFilesUploaded(updatedFilesToUpload);
  };

  return (
    <div>
      <label htmlFor="file">File</label>
      <input
        id="fileInput"
        name="file"
        type="file"
        multiple
        onChange={handleChange}
      />
    </div>
  );
};

export default FileUploaderContainer;
