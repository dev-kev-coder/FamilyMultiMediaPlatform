import React from 'react';
import PropTypes from 'prop-types';
import UploadUI from '@sharedComponents/Uploader/UploadUI';
import validateFileExtentions from '@sharedUtils/validateFileExtentions';
import "./Folder.css";

const Folder = ({ propName }) => {
  return (
    <>
      <UploadUI
        onDrop={(fileList, e) => {
          const files = Object.values(fileList);

          const blockedFiles = validateFileExtentions(files);

        console.log('blocked Files: ', blockedFiles);

        }}
        className="folder-upload"
        isDragOverClassName="folder-upload-drag-over"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              flexBasis: '20%',
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H22C23.1 20 24 19.1 24 18V8C24 6.9 23.1 6 22 6H12L10 4Z"
                fill="#FFD700"
              />
              <path
                d="M2 6H10L12 8H22C22.55 8 23 8.45 23 9V18C23 18.55 22.55 19 22 19H2C1.45 19 1 18.55 1 18V7C1 6.45 1.45 6 2 6Z"
                fill="#F1C40F"
              />
            </svg>
          </div>

          <div
            style={{
              flexBasis: '80%',
            }}
          >
            Folder Name
          </div>
        </div>
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
