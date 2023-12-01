import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import { PHONE_NUMBER } from '../../constants/regexs';

import './styles/AddAddress.scss';
import useForm from '../../hooks/useForm';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const rules = {
  address: {
    required: 'Địa chỉ không được để trống',
  },
};

const AddAddress = ({ modalType = 'add', current, address_id, ...props }) => {
  const { user } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  const submit = async ({ address }) => {
    if (modalType === 'add') {
      try {
        setIsLoading(true);
        const { data } = await http.post('/create_address', {
          customer_id: user?.id || localStorage.getItem('USER_ID'),
          address_name: address,
        });

        // const { customer_id, status, token } = data;
        if (data.Status === 1) {
          props.onDismiss();
          window.location.href = '/profile/my-addresses';
        }

        if (data.Status === 0) {
          setError('Thêm địa chỉ thất bại, vui lòng thử lại!');
        }
      } catch (error) {
        setError('Thêm địa chỉ thất bại, vui lòng thử lại!');
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        setIsLoading(true);
        const { data } = await http.post('/update_address', {
          address_id,
          address_name: address,
        });

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
    }
  };

  return (
    <Modal
      label={modalType === 'add' ? 'Thêm địa chỉ' : 'Cập nhật địa chỉ'}
      {...props}
    >
      <form className="AddAddress" onSubmit={handleSubmit(submit)}>
        <div className="input-section">
          <div className="label">Địa chỉ</div>
          <Input
            placeholder={modalType === 'edit' && current}
            {...register('address')}
          />
          {dirtyErrors['address'] && (
            <span className="invalid">{dirtyErrors['address']}</span>
          )}
        </div>
        <Button size="lg" disabled={isError || isLoading}>
          {modalType === 'add' ? 'Thêm' : 'Cập nhật'}
        </Button>
      </form>
    </Modal>
  );
};

export default AddAddress;
