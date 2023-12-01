import React from 'react';
import { Link } from 'react-router-dom';

import Login from '../modals/Login';
import Register from '../modals/Register';
import useModal from '../../hooks/useModal';

import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/user.png';

import Button from '../Button';
import { ChevronDownIcon } from '../Svg';

import './Header.scss';
import { useUserContext } from '../../contexts/User';
import { VERIFY_FLAG } from '../../pages/RegisterCar';
import PendingVerify from '../modals/PendingVerify';

export const ROLES = {
  GUEST: 1,
  OWNER: 2,
  ADMIN: 3,
};

const Header = () => {
  const { user } = useUserContext();
  const [showRegister] = useModal(<Register />);
  const [showPending] = useModal(<PendingVerify />);
  const [showLogin] = useModal(<Login switchToRegister={showRegister} />);
  const isLogin = !!JSON.parse(localStorage.getItem('USER_ID'));
  return (
    <div className="Header">
      <Link to="/">
        <img id="header-logo" src={logo} height="30px" alt="logo" />
      </Link>
      <div className="links">
        <Link to="/about-me" className="link">
          Về chúng tôi
        </Link>

        {isLogin && (
          <Link
            to="/register_car"
            className="link"
            onClick={(e) => {
              if (user?.verify_flg == VERIFY_FLAG.PENDING) {
                showPending();
                e.preventDefault();
              }
            }}
          >
            {user?.role_id == ROLES.OWNER
              ? 'Đăng ký cho thuê xe'
              : 'Trở thành chủ xe'}
          </Link>
        )}

        <div className="divider" />
        {isLogin ? (
          <Link className="link-profile" to="/profile">
            <img src={avatar} alt="avatar" height="40px" width="40px" />
            {user && user.name_display}
            <ChevronDownIcon width="16" height="16" />
          </Link>
        ) : (
          <>
            <div className="register-btn" onClick={showRegister}>
              Đăng ký
            </div>
            <Button className="login-btn" onClick={showLogin}>
              Đăng Nhập
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
