import React from 'react';

import Modal from './Modal';
import Button from '../Button';

import './styles/YouAreRejectedModal.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import { VERIFY_FLAG } from '../../pages/RegisterCar';

const YouAreRejected = (props) => {
  const { user } = useUserContext();

  const handle = async () => {
    await http.put('/change_verify_customer', {
      customer_id: user?.id || localStorage.getItem('USER_ID'),
      verify_flg: VERIFY_FLAG.NOT_VERIFIED,
    });
    props.onDismiss();
    window.location.reload();
  };
  return (
    <Modal
      className="YouAreRejectedModal"
      label="Bạn đã bị từ chối"
      notAllowClose={true}
      {...props}
    >
      <div
        className="title"
        style={{
          fontSize: '18px',
          textAlign: 'center',
        }}
      >
        Hãy tiến hành xác minh lại
      </div>
      <Button onClick={handle}>Đã hiểu</Button>
    </Modal>
  );
};

export default YouAreRejected;
