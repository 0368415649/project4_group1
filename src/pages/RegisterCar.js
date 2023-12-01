import React, { useEffect } from 'react';

import Button from '../components/Button';
import VerifyIdentification from '../components/modals/VerifyIdentification';

import useModal from '../hooks/useModal';

import registerCar from '../assets/imgs/register_car.png';

import './styles/RegisterCar.scss';
import { useUserContext } from '../contexts/User';
import RegisterCarForm from './RegisterCarForm';
import YouAreRejected from '../components/modals/YouAreRejected';
import useScrollToTop from '../hooks/useScrollToTop';

export const VERIFY_FLAG = {
  NOT_VERIFIED: 0,
  PENDING: 1,
  VERIFIED: 2,
  REJECTED: 3,
};

const RegisterCar = () => {
  useScrollToTop();
  const [showVerifyIdentification] = useModal(<VerifyIdentification />);
  const [showYouAreRejected] = useModal(<YouAreRejected />);
  const { user } = useUserContext();

  useEffect(() => {
    if (user?.verify_flg == VERIFY_FLAG.REJECTED) {
      showYouAreRejected();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.verify_flg]);

  return user?.verify_flg == VERIFY_FLAG.VERIFIED ? (
    <RegisterCarForm />
  ) : (
    <div className="RegisterCar page-layout flash">
      <div className="title">Đăng ký xe</div>
      <img src={registerCar} alt="registerCar" />
      <Button
        size="lg"
        className="register-car-btn"
        onClick={showVerifyIdentification}
      >
        Đăng ký xe cho thuê
      </Button>
    </div>
  );
};

export default RegisterCar;
