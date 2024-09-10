import React from 'react';
import PropTypes from 'prop-types';
import validateFileExtentions from '@sharedUtils/validateFileExtentions';
import UploadUI from '../shared/components/Uploader/UploadUI';
import './UploadWrapper.css';

const UploadWrapper = ({ children }) => {
  return (
    <UploadUI
      onDrop={(fileList, e) => {
        const files = Object.values(fileList);

        const blockedFiles = validateFileExtentions(files);

        console.log('blocked Files: ', blockedFiles);
      }}
      className="upload-wrapper"
      isDragOverClassName="upload-wrapper-drag-over"
      mode='drop'
    >
      {children}
    </UploadUI>
  );
};

UploadWrapper.propTypes = {
  propName: PropTypes.any, // Adjust the prop type
};

UploadWrapper.defaultProps = {
  propName: '', // Set default value
};

export default UploadWrapper;
