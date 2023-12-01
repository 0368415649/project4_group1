import React, { useState } from 'react';

import Modal from './Modal';
import Input from '../Input';
import Button from '../Button';
import { PHONE_NUMBER } from '../../constants/regexs';

import './styles/Login.scss';
import useForm from '../../hooks/useForm';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

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
  password: {
    required: 'Mật khẩu không được để trống',
  },
};

const Login = (props) => {
  const { setUserInfo } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  const submitLogin = async ({ phone, password }) => {
    try {
      setIsLoading(true);
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

      if (data.status === 0) {
        setError('Sai số điện thoại hoặc mật khẩu!');
      }
    } catch (error) {
      setError('Sai số điện thoại hoặc mật khẩu!');
    } finally {
      setIsLoading(false);
    }
  };

  const switchToRegister = () => {
    props.onDismiss();
    props.switchToRegister();
  };

  return (
    <Modal label="Đăng nhập" {...props}>
      <form className="Login" onSubmit={handleSubmit(submitLogin)}>
        <div className="input-section">
          <div className="label">Số điện thoại</div>
          <Input {...register('phone')} />
          {dirtyErrors['phone'] && (
            <span className="invalid">{dirtyErrors['phone']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu 
          <span style={{
            fontSize: 12
          }}> ( gồm 8 ký tự trở lên chứa chữ và số ) </span>
          </div>
          <Input {...register('password')} isPasswordInput />
          {dirtyErrors['password'] && (
            <span className="invalid">{dirtyErrors['password']}</span>
          )}
        </div>
        <div className="forgot-password">Quên mật khẩu</div>
        {error && (
          <div className="invalid" style={{ marginBottom: '16px' }}>
            {error}
          </div>
        )}
        <Button size="lg" disabled={isError || isLoading}>
          Đăng nhập
        </Button>
        <div className="register-switch">
          Bạn chưa là thành viên?{' '}
          <div className="switch" onClick={switchToRegister}>
            Đăng ký ngay
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Login;
