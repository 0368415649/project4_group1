import React, { useState } from 'react';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import { PASSWORD } from '../../constants/regexs';
import Button from '../../components/Button';

import './styles/ChangePassword.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import { useNavigate } from 'react-router-dom';

const rules = {
  oldPassword: {
    required: 'Mật khẩu cũ không được để trống',
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

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { dirtyErrors, isError },
  } = useForm(rules);

  const submitLogin = async (formData) => {
    try {
      setIsLoading(true);
      const { data } = await http.get('/check_password', {
        params: {
          customer_id: user?.id || localStorage.getItem('USER_ID'),
          password: formData?.oldPassword,
        },
      });

      // const { customer_id, status, token } = data;
      if (data.status === 1) {
        await http.put('/change_password', {
          customer_id: user?.id || localStorage.getItem('USER_ID'),
          password: formData?.password,
        });

        setSuccess('Đổi mật khẩu thành công!');
        navigate('/?re-login=true');
      }

      if (data.status === 0) {
        setError('Sai mật khẩu!');
      }
    } catch (error) {
      setError('Không thành công, vui lòng liên hệ với quản trị viên!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Tab-content ChangePassword">
      <form className="ChangePasswordForm" onSubmit={handleSubmit(submitLogin)}>
        <div className="input-section">
          <div className="label">Mật khẩu hiện tại</div>
          <Input {...register('oldPassword')} isPasswordInput />
          {dirtyErrors['oldPassword'] && (
            <span className="invalid">{dirtyErrors['oldPassword']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Mật khẩu mới</div>
          <Input {...register('password')} isPasswordInput />
          {dirtyErrors['password'] && (
            <span className="invalid">{dirtyErrors['password']}</span>
          )}
        </div>
        <div className="input-section">
          <div className="label">Xác nhận mật khẩu mới</div>
          <Input {...register('confirmPassword')} isPasswordInput />
          {dirtyErrors['confirmPassword'] && (
            <span className="invalid">{dirtyErrors['confirmPassword']}</span>
          )}
        </div>
        {error && (
          <div className="invalid" style={{ marginTop: 12 }}>
            {error}
          </div>
        )}
        {success && (
          <div className="success" style={{ marginTop: 12 }}>
            {success}
          </div>
        )}
        <Button disabled={isError} className="finally-btn">
          Đổi mật khẩu
        </Button>
      </form>
    </div>
  );
};

export default ChangePassword;
