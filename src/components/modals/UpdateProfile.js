import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import Dropdown from '../Dropdown';
import useForm from '../../hooks/useForm';

import './styles/UpdateProfile.scss';
import DatePicker from '../DatePicker';
import { getUnixTimeInSecond } from '../../utils/dates';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const rules = {
  displayName: {
    required: 'Tên hiển thị không được để trống',
  },
  gender: {
    required: 'Giới tính không được để trống',
  },
  dateOfBirth: {
    required: 'Ngày sinh không được để trống',
  },
};

const options = [
  { label: 'Nam', value: 'Nam' },
  { label: 'Nữ', value: 'Nữ' },
];
const UpdateProfile = (props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { dirtyErrors, isError, data },
  } = useForm(rules);
  const [error, setError] = useState(null);
  const { user } = useUserContext();

  const submitUpdateProfile = async (formData) => {
    try {
      const { data } = await http.put('/change_profile_customer', {
        name_display: formData.displayName,
        birthday: formData.dateOfBirth,
        sex: formData.gender,
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
    <Modal label="Cập nhật thông tin" {...props}>
      <form
        className="UpdateProfile"
        onSubmit={handleSubmit(submitUpdateProfile)}
      >
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register('displayName')} />
          {dirtyErrors['displayName'] && (
            <span className="invalid">{dirtyErrors['displayName']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Ngày sinh</div>
          <Input type="date" {...register('dateOfBirth')} />
          {dirtyErrors['dateOfBirth'] && (
            <span className="invalid">{dirtyErrors['dateOfBirth']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Giới tính</div>
          <Dropdown
            options={options}
            setOption={setValue}
            {...register('gender')}
          />
          {dirtyErrors['gender'] && (
            <span className="invalid">{dirtyErrors['gender']}</span>
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

export default UpdateProfile;
