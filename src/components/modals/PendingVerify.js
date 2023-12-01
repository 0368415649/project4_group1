import React from 'react';

import Modal from './Modal';

import './styles/VerifyIdentificationModal.scss';

const PendingVerify = (props) => {
  return (
    <Modal
      className="VerifyIdentificationModal"
      label="Đang chờ xác minh"
      {...props}
    >
      <div
        className="title"
        style={{
          fontSize: '18px',
          textAlign: 'center',
        }}
      >
        Xác minh của bạn đang được chờ duyệt
      </div>
    </Modal>
  );
};

export default PendingVerify;
