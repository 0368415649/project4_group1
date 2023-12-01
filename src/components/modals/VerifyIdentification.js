import React, { useState } from 'react';

import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';
import UploadImage from '../UploadImage/UploadImage';

import useForm from '../../hooks/useForm';

import { CITIZEN_IDENTIFICATION_NUMBER } from '../../constants/regexs';
import http from '../../utils/http';

import './styles/VerifyIdentificationModal.scss';

const rules = {
  identificationNumber: {
    required: 'Số CCCD không được để trống',
    option: (value) => {
      if (CITIZEN_IDENTIFICATION_NUMBER.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Số CCCD không hợp lệ',
  },
  dateOfBirth: {
    required: 'Ngày sinh không được để trống',
  },
  fullName: {
    required: 'Họ và tên không được để trống',
  },
};

const VerifyIdentification = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  const handle = (e) => {
    const file = e.target.files[0];
    setImg1(file);
  };
  const handle2 = (e) => {
    const file = e.target.files[0];
    setImg2(file);
  };

  const upload = async (data) => {
    const formData = new FormData();
    formData.append('image1', img1);
    formData.append('image2', img2);
    formData.append('full_name', data.fullName);
    formData.append('id_number', data.identificationNumber);
    formData.append('birthday', data.dateOfBirth);
    formData.append('customer_id', localStorage.getItem('USER_ID'));

    await http.post('/verify_customer', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    props.onDismiss();
    window.location.href = '/?re-load=true';
  };

  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  return (
    <Modal
      className="VerifyIdentificationModal"
      label="Xác minh danh tính"
      {...props}
    >
      {!isConfirmed && (
        <div className="confirm-action">
          <div className="title">Bạn cần xác minh danh tính để đăng ký xe</div>
          <Button size="lg" onClick={() => setIsConfirmed(true)}>
            Tiến hành xác minh
          </Button>
        </div>
      )}

      {isConfirmed && (
        <form className="Login" onSubmit={handleSubmit(upload)}>
          <div className="input-section">
            <div className="label">Số CCCD</div>
            <Input {...register('identificationNumber')} />
            {dirtyErrors['identificationNumber'] && (
              <span className="invalid">
                {dirtyErrors['identificationNumber']}
              </span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Họ và tên</div>
            <Input {...register('fullName')} />
            {dirtyErrors['fullName'] && (
              <span className="invalid">{dirtyErrors['fullName']}</span>
            )}
          </div>
          <div className="input-section">
            <div className="label">Ngày sinh</div>
            <Input type="date" {...register('dateOfBirth')} />
            {dirtyErrors['dateOfBirth'] && (
              <span className="invalid">{dirtyErrors['dateOfBirth']}</span>
            )}
          </div>
          <div className="images">
            <div className="image">
              <div className="label">Mặt trước CCCD</div>
              <UploadImage className="identity" onChange={handle} />
              {/* <input type="file" accept="image/*" onChange={handle} /> */}
            </div>
            <div className="image">
              <div className="label">Mặt sau CCCD</div>
              <UploadImage className="identity" onChange={handle2} />
              {/* <input type="file" accept="image/*" onChange={handle2} /> */}
            </div>
          </div>
          <Button size="lg" className="verify-btn" disabled={isError}>
            Xác minh
          </Button>
        </form>
      )}
    </Modal>
  );
};

export default VerifyIdentification;
