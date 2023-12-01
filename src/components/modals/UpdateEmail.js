import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import useForm from '../../hooks/useForm';

import './styles/UpdateProfile.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const rules = {
  email: {
    required: 'email không được để trống',
  },
};

const UpdateEmail = (props) => {
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);
  const [error, setError] = useState(null);
  const { user } = useUserContext();

  const submitUpdateEmail = async (formData) => {
    try {
      const { data } = await http.put('/change_mail', {
        email: formData.email,
        customer_id: user?.id || localStorage.getItem('USER_ID'),
      });
      if (data.status === 1) {
        setError(null);
        props.onDismiss();
        window.location.reload();
      } else {
        setError('Không thành công, thử lại sau!');
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  return (
    <Modal label="Cập nhật địa chỉ email" {...props}>
      <form
        className="UpdateProfile"
        onSubmit={handleSubmit(submitUpdateEmail)}
      >
        <div className="input-section">
          <div className="label">Email</div>
          <Input {...register('email')} />
          {dirtyErrors['email'] && (
            <span className="invalid">{dirtyErrors['email']}</span>
          )}
        </div>
        {error && <div className="invalid">{error}</div>}
        <Button size="lg" className="submit-btn" disabled={isError}>
          Cập nhật
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateEmail;
