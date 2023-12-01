import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import VerifyOtp from './VerifyOtp';
import Button from '../Button';

import useCheckbox from '../../hooks/useCheckbox';
import useModal from '../../hooks/useModal';
import useForm from '../../hooks/useForm';

import { PASSWORD, PHONE_NUMBER } from '../../constants/regexs';

import './styles/Register.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import Loader from '../Loader/Loader';
import useScrollToTop from '../../hooks/useScrollToTop';

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
  displayName: {
    required: 'Tên hiển thị không được để trống',
  },
  password: {
    required: 'Mật khẩu không được để trống',
    option: (value) => {
      if (PASSWORD.test(value)) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu yếu, vui lòng thử mật khẩu khác',
  },
  confirmPassword: {
    required: 'Mật khẩu không được để trống',
    option: (value, form) => {
      if (form.password === value) {
        return true;
      }
      return false;
    },
    errorMsg: 'Mật khẩu không khớp',
  },
};

const Register = (props) => {
  const {
    register,
    formState: { dirtyErrors, isError, data },
  } = useForm(rules);
  const { setUserInfo } = useUserContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useScrollToTop();
  const [showVerifyOtp, dismissVerifyOtp] = useModal(
    <VerifyOtp
      phoneNumber={data['phone']}
      onSuccess={() => submitRegister(data)}
    />
  );

  const { isChecked, Checkbox } = useCheckbox(
    'Tôi đồng ý với chính sách của ADDDA'
  );

  const submitRegister = async ({ phone, password, displayName }) => {
    try {
      setIsLoading(true);
      const { data } = await http.post('/register_customer', {
        phone,
        password,
        name_display: displayName,
        // role_id: 1,
        // verify_flg: 0,
      });

      // const { customer_id, status, token } = data;
      if (data.Status === 1) {
        try {
          const { data } = await http.get('/check_login', {
            params: {
              phone,
              password,
            },
          });

          // const { customer_id, status, token } = data;
          if (data.status === 1) {
            setUserInfo(data);
            localStorage.setItem('USER_ID', JSON.stringify(data.customer_id));
            props.onDismiss();
          }
        } catch (error) {
          setError('Đăng nhập thất bại');
        }

        props.onDismiss();
        window.location.href = '/';
        dismissVerifyOtp();
      }
    } catch (error) {
      console.log('>> Check | error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isDisabled = !isChecked || isError;

  const handleBeforeRegister = async ({ phone }) => {
    try {
      setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <Modal label="Đăng ký" {...props}>
      <form className="Register">
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {dirtyErrors['phone'] && (
            <span className="invalid">{error || dirtyErrors['phone']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Tên hiển thị</div>
          <Input {...register('displayName')} />
          {dirtyErrors['displayName'] && (
            <span className="invalid">{dirtyErrors['displayName']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">
            Mật khẩu{' '}
            <span
              style={{
                fontSize: 12,
              }}
            >
              {' '}
              ( gồm 8 ký tự trở lên chứa chữ và số ){' '}
            </span>
          </div>
          <Input {...register('password')} isPasswordInput />
          {dirtyErrors['password'] && (
            <span className="invalid">{dirtyErrors['password']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Nhập lại mật khẩu</div>
          <Input {...register('confirmPassword')} isPasswordInput />
          {dirtyErrors['confirmPassword'] && (
            <span className="invalid">{dirtyErrors['confirmPassword']}</span>
          )}
        </div>
        <Checkbox className="policy" />
        {error && (
          <div className="invalid" style={{ marginTop: 12 }}>
            {error}
          </div>
        )}
        <Button
          type="button"
          size="lg"
          className="register-btn"
          onClick={() => handleBeforeRegister(data)}
          disabled={isDisabled || isLoading}
        >
          {isLoading ? <Loader /> : 'Đăng ký'}
        </Button>
      </form>
    </Modal>
  );
};

export default Register;
