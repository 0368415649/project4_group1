import React, { useEffect, useState } from 'react';

import {
  AddressIcon,
  AddressOutlineIcon,
  ClockIcon,
  HeartIcon,
  LockIcon,
  LogoutIcon,
  UserIcon,
  VehicleIcon,
  WatchIcon,
} from '../components/Svg';
import UserInfo from './components/UserInfo';
import LeaseHistory from './components/LeaseHistory';
import MyAddress from './components/MyAddress';

import './styles/Profile.scss';
import MyCar from './components/MyCar';
import Favorite from './components/Favorite';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import ChangePassword from './components/ChangePassword';
import RentalHistory from './components/RentalHistory';
import { useUserContext } from '../contexts/User';
import { ROLES } from '../components/Header/Header';
import useScrollToTop from '../hooks/useScrollToTop';

const MY_ACCOUNT = 'Tài khoản của tôi';
const FAVORITE = 'Xe yêu thích';
const MY_CAR = 'Xe của tôi';
const LEASE_HISTORY = 'Lịch sử cho thuê xe';
const RENTAL_HISTORY = 'Lịch sử thuê xe';
const CHANGE_PASSWORD = 'Đổi mật khẩu';
const MY_ADDRESS = 'Địa chỉ của tôi';
const LOG_OUT = 'Đăng xuất';

const Profile = () => {
  const { user } = useUserContext();
  const isLogin = !!JSON.parse(localStorage.getItem('USER_ID'));
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useScrollToTop();
  useEffect(() => {
    const isReLoad = JSON.parse(searchParams.get('re-load'));

    if (isReLoad) {
      searchParams.delete('re-load');
      window.location.reload();
    }
  }, [navigate, searchParams]);

  const TABS = [
    { icon: UserIcon, title: MY_ACCOUNT, path: 'profile' },
    { icon: HeartIcon, title: FAVORITE, path: 'profile/favorite' },
    {
      icon: VehicleIcon,
      title: MY_CAR,
      isHide: user?.role_id == ROLES.GUEST,
      path: 'profile/my-car',
    },
    {
      icon: ClockIcon,
      title: LEASE_HISTORY,
      isHide: user?.role_id == ROLES.GUEST,
      path: 'profile/lease',
    },
    { icon: WatchIcon, title: RENTAL_HISTORY, path: 'profile/rental' },
    { icon: LockIcon, title: CHANGE_PASSWORD, path: 'profile/change-password' },
    {
      icon: AddressOutlineIcon,
      title: MY_ADDRESS,
      path: 'profile/my-addresses',
    },
  ];

  const location = useLocation();

  const [currentTab, setCurrentTab] = useState(() => {
    return TABS.find((t) => `/${t.path}` === location.pathname);
  });

  useEffect(() => {
    if (!isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  const ShowedTab = {
    [MY_ACCOUNT]: <UserInfo />,
    [FAVORITE]: <Favorite />,
    [MY_CAR]: <MyCar />,
    [LEASE_HISTORY]: <LeaseHistory />,
    [RENTAL_HISTORY]: <RentalHistory />,
    [CHANGE_PASSWORD]: <ChangePassword />,
    [MY_ADDRESS]: <MyAddress />,
  }[currentTab.title];

  return (
    <div className="Profile page-layout mt-4 flash">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={TABS} />
      <div className="tab-main">
        <div className="tab-title">{currentTab.title}</div>
        {ShowedTab}
      </div>
    </div>
  );
};

const Tabs = ({ currentTab, setCurrentTab, tabs }) => {
  return (
    <div className="Tab">
      <div className="tabs">
        {tabs.map((tab) => {
          if (tab?.isHide) return null;
          return (
            <Link
              to={`/${tab.path}`}
              key={tab.title}
              className={`tab ${
                currentTab.title === tab.title ? 'selected_item' : ''
              }`}
              onClick={() => setCurrentTab(tab)}
            >
              <div className="icon">{tab.icon()}</div>
              <div className="title">{tab.title}</div>
            </Link>
          );
        })}
        <div
          className={`tab`}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <div className="icon">
            <LogoutIcon />
          </div>
          <div className="title">{LOG_OUT}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
