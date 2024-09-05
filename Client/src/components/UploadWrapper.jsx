import React from 'react';
import PropTypes from 'prop-types';
import validateFileExtentions from '@sharedUtils/validateFileExtentions';
import './UploadWrapper.css';
import UploadUI from '../shared/components/Uploader/UploadUI';

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
    >
      {/* <div style={{ padding: '20px' }}>{children}</div> */}
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
