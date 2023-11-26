import React, { useEffect, useRef, useState } from 'react';

const calculateFileSize = (fileSizeInBytes) => {
  // do some calculation that will return the corresponding size
  // I.E. Bytes, KB, MB, GB, ...Etc.
  return fileSizeInBytes;
};

const formatToMonthDayYear = (datetime) => {
  // format date in more userfriendly format
  return datetime;
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

    for (let file of selectedfiles) {
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
