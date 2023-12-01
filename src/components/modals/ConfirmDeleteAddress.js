import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';

import './styles/ConfirmDeleteAddress.scss';
import useForm from '../../hooks/useForm';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const ConfirmDeleteAddress = ({ current, address_id, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = async () => {
    try {
      setIsLoading(true);
      const { data } = await http.get('/delete_address', {
        params: {
          id: address_id,
        },
      });

      // const { customer_id, status, token } = data;
      if (data.Status === 1) {
        props.onDismiss();
        window.location.href = '/profile/my-addresses ';
      }

      if (data.Status === 0) {
        setError('Thêm địa chỉ thất bại, vui lòng thử lại!');
      }
    } catch (error) {
      setError('Thêm địa chỉ thất bại, vui lòng thử lại!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      label="Xác nhận xóa địa chỉ"
      className="ConfirmDeleteAddress"
      {...props}
    >
      <h4>
        Bạn có chắc chắn muốn xóa địa chỉ: <div>{current}?</div>
      </h4>
      <div className="actions">
        <Button onClick={submit}>Xóa</Button>
        <Button variant="outline">Hủy</Button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteAddress;
