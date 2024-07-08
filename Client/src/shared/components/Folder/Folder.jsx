import React from 'react';
import PropTypes from 'prop-types';
import UploadUI from '@sharedComponents/Uploader/UploadUI';

const Folder = ({ propName }) => {
  return (
    <>
      <UploadUI>
        <div>folder</div>
      </UploadUI>
    </>
  );
};

Folder.propTypes = {
  propName: PropTypes.any, // Adjust the prop type
};

Folder.defaultProps = {
  propName: '', // Set default value
};

export default Folder;
