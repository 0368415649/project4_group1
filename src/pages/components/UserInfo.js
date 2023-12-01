import React from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';
import { PenIcon } from '../../components/Svg';
import UpdateProfile from '../../components/modals/UpdateProfile';

import useModal from '../../hooks/useModal';

import './styles/UserInfo.scss';
import { useUserContext } from '../../contexts/User';
import UpdatePhone from '../../components/modals/UpdatePhone';
import UpdateEmail from '../../components/modals/UpdateEmail';

const UserInfo = () => {
  const [showUpdateProfile] = useModal(<UpdateProfile />);
  const [showUpdatePhone] = useModal(<UpdatePhone />);
  const [showUpdateEmail] = useModal(<UpdateEmail />);
  const { user } = useUserContext();

  return (
    <div className="Tab-content UserInfo">
      <div className="heading">
        <div className="title">
          Thông tin tài khoản
          <Button variant="outline" className="edit-btn">
            <PenIcon
              width="16"
              height="16"
              style={{ cursor: 'pointer' }}
              onClick={showUpdateProfile}
            />
          </Button>
        </div>
        <div className="count">
          <span>{user?.count || '0'}</span> chuyến
        </div>
      </div>
      <div className="user-info">
        <div className="user-avatar">
          <Img width="150px" />
          <div className="user-fullname">{user?.name_display}</div>
        </div>
        <div className="info-rows">
          <div className="group-row">
            <div className="info-row">
              <div
                style={{
                  fontsize: 13,
                  color: '#6d6d6d',
                }}
                className="label"
              >
                Ngày sinh
              </div>
              <div className="value">{user?.birthday || '--/--/----'}</div>
            </div>
            <div className="info-row mt-4">
              <div
                style={{
                  fontsize: 13,
                  color: '#6d6d6d',
                }}
                className="label"
              >
                Giới tính
              </div>
              <div className="value">
                {user?.sex ? String(user?.sex).trim() : '--'}
              </div>
            </div>
          </div>
          <div className="info-row">
            <div className="label">Số điện thoại</div>
            <div className="value">
              {user?.phone}{' '}
              <Button
                variant="outline"
                className="edit-btn"
                onClick={showUpdatePhone}
              >
                <PenIcon width="16" height="16" style={{ cursor: 'pointer' }} />
              </Button>
            </div>
          </div>
          <div className="info-row">
            <div className="label">Email</div>
            <div className="value">
              {user?.email}{' '}
              <Button
                variant="outline"
                className="edit-btn"
                onClick={showUpdateEmail}
              >
                <PenIcon width="16" height="16" style={{ cursor: 'pointer' }} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
