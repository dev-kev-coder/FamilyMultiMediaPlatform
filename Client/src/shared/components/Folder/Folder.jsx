import React from 'react';
import PropTypes from 'prop-types';
import UploadUI from '@sharedComponents/Uploader/UploadUI';

const Folder = ({ propName }) => {
  return (
    <>
      <UploadUI id={'id'}>
        {/* <div>folder</div> */}
        {/* <!-- Simple Folder Icon with Tab --> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <rect
            x="2"
            y="6"
            width="20"
            height="14"
            rx="2"
            ry="2"
            fill="#FFD700"
          />
          <rect
            x="2"
            y="4"
            width="10"
            height="4"
            rx="1"
            ry="1"
            fill="#FFD700"
          />
          <rect
            x="2"
            y="4"
            width="10"
            height="4"
            rx="1"
            ry="1"
            fill="rgba(0,0,0,0.1)"
          />
        </svg>

        <svg width="100" height="100" viewBox="0 0 24 24">
          <path
            d="M2 4 H10 A1 1 0 0 1 11 5 V7 A1 1 0 0 1 10 8 H2 Z"
            fill="#FFD700"
          />
        </svg>
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
