import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import useForm from '../../hooks/useForm';

import './styles/UpdateProfile.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import useModal from '../../hooks/useModal';
import VerifyOtp from './VerifyOtp';
import { PHONE_NUMBER } from '../../constants/regexs';

const rules = {
  phone: {
    required: 'Số điện thoại không được để trống',
    option: (value) => {
      if (PHONE_NUMBER.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số điện thoại không hợp lệ',
  },
};

const UpdatePhone = (props) => {
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError, data },
  } = useForm(rules);
  const [error, setError] = useState(null);
  const { user } = useUserContext();
  const [showVerifyOtp, dismissVerifyOtp] = useModal(
    <VerifyOtp
      phoneNumber={data['phone']}
      onSuccess={() => submitUpdatePhone(data)}
    />
  );

  const submitUpdatePhone = async (formData) => {
    try {
      const { data } = await http.put('/change_phone', {
        phone: formData.phone,
        customer_id: user?.id || localStorage.getItem('USER_ID'),
      });
      if (data.status === 1) {
        setError(null);
        props.onDismiss();
        window.location.reload();
        dismissVerifyOtp();
      } else {
        setError('Không thành công, thử lại sau!');
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  const handleBeforeRegister = async ({ phone }) => {
    console.log('>> Check | phone:', phone);
    try {
      // setIsLoading(true);
      const { data } = await http.get('/check_exists_phone', {
        params: {
          phone,
        },
      });

      // const { customer_id, status, token } = data;
      if (data.status === 0) {
        props.onDismiss();
        showVerifyOtp();
      }
      if (data.status === 1) {
        setError('Số điện thoại đã tồn tại!');
      }
    } catch (error) {
      console.log('>> Check | error:', error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <Modal label="Cập nhật số điện thoại" {...props}>
      <form
        className="UpdateProfile"
        onSubmit={handleSubmit(submitUpdatePhone)}
      >
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {dirtyErrors['phone'] && (
            <span className="invalid">{dirtyErrors['phone']}</span>
          )}
        </div>
        {error && <div className="invalid">{error}</div>}
        <Button
          onClick={() => handleBeforeRegister(data)}
          size="lg"
          type="button"
          className="submit-btn"
          disabled={isError}
        >
          Cập nhật
        </Button>
      </form>
    </Modal>
  );
};

export default UpdatePhone;
