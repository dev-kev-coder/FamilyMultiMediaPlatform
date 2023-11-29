import { useState } from 'react';

const updateFilesToUploadState = (
  usersFiles,
  filesToUpload,
  setStateCallback,
  maxSize,
) => {
  for (const file of usersFiles) {
    if (filesToUpload[file.name]) {
      const uploadCopy = confirmWithUser();

      if (uploadCopy) {
        let copyAdded = false;
        let copyVersionNum = 0;

        while (!copyAdded) {
          let fileCopyName = `${file.name} - (${copyVersionNum})`;

          const fileCopy = new File([file], fileCopyName, {
            type: file.type,
            lastModified: file.lastModified,
          });

          copyAdded = addFile(fileCopy, filesToUpload);
          copyVersionNum++;
        }
      }
    } else {
      const [fileAdded, errorMessage] = addFile(file, filesToUpload, maxSize);

      if (!fileAdded) alert(errorMessage);
    }

    setStateCallback(filesToUpload);
  }
};
const calculateFileSize = (fileSizeInBytes) => {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;

  let fileSize = fileSizeInBytes;

  while (fileSize >= 1024 && unitIndex < units.length - 1) {
    fileSize /= 1024;
    unitIndex++;
  }

  return `${fileSize.toFixed(2)} ${units[unitIndex]}`;
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

const addFile = (file, files, maxSize) => {
  const { name, size, lastModified } = file;

  if (size > maxSize)
    return [
      false,
      `Error: ${name} is bigger than ${calculateFileSize(maxSize)}`,
    ];

  files[name] = {
    payload: file,
    name,
    size: calculateFileSize(size),
    lastModified: formatToMonthDayYear(lastModified),
  };

  return [true, null];
};

const preventDefaults = (e) => {
  e.stopPropagation();
  e.preventDefault();
};

export default ({ maxFileSize = undefined }) => {
  const maxSize = !maxFileSize || 5 * 1024 * 1024;

  const [filesToUpload, setFilesUploaded] = useState({});

  const handleChange = (e) => {
    const newFiles = e.target.files;

    const updatedFilesToUpload = { ...filesToUpload };

    updateFilesToUploadState(
      newFiles,
      updatedFilesToUpload,
      setFilesUploaded,
      maxSize,
    );
  };

  const handleDragOver = (e) => {
    preventDefaults(e);
  };

  const handleDragEnter = (e) => {
    preventDefaults(e);
  };

  const handleDrop = (e) => {
    preventDefaults(e);

    const newFiles = e.dataTransfer.files;

    const updatedFilesToUpload = { ...filesToUpload };

    updateFilesToUploadState(
      newFiles,
      updatedFilesToUpload,
      setFilesUploaded,
      maxSize,
    );
  };

  return {
    filesToUpload,
    handleFilesDragEnter: handleDragEnter,
    handleFilesChange: handleChange,
    handleFilesDragOver: handleDragOver,
    handleFilesDrop: handleDrop,
  };
};
