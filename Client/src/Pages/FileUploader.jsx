import React, { useState } from 'react';
import { FileUpload } from '@sharedComponents/FileUpload';

const FileUploaderContainer = ({ notificationCallback }) => {
  return (
    <div>
      <FileUpload />
    </div>
  );
};

export default FileUploaderContainer;
