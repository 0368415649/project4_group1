import React, { useState } from 'react';
import Modal from './Modal';
import Input from '../Input';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../firebase/setup';
import Button from '../Button';

import './styles/VerifyOtp.scss';
import Loader from '../Loader/Loader';

const VerifyOtp = ({ phoneNumber, onSuccess, ...props }) => {
  const [otpConfirm, setOtpConfirm] = useState('');
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isSentSms, setIsSentSms] = useState(false);
  const [isSendingSms, setIsSendingSms] = useState(false);
  const [isConfirmingOtp, setIsConfirmingOtp] = useState(false);
  const [error, setError] = useState(null);
  const [lock, setLock] = useState(true);

  const submitOtp = () => {
    setIsSentSms(false);
    setIsSendingSms(true);

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha', {
      size: 'invisible',
    });

    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber =
      '+84' + phoneNumber.slice(1, phoneNumber.length);

    signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        setIsSentSms(true);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        setLock(false);
        // ...
      })
      .catch((e) => console.log('???????', e))
      .finally(() => setIsSendingSms(false));
  };

  const confirmOtp = () => {
    setIsConfirmingOtp(true);
    window.confirmationResult
      .confirm(otpConfirm)
      .then((result) => {
        // User signed in successfully.
        setIsOtpValid(!!result.user);
        onSuccess();
        // ...
      })
      .catch((e) => {
        setError('Mã không chính xác, vui lòng nhập lại');
      })
      .finally(() => setIsConfirmingOtp(false));
  };

  return (
    <Modal label="Xác minh số điện thoại" className="VerifyOtp" {...props}>
      <Input
        value={otpConfirm}
        onChange={(e) => setOtpConfirm(e.target.value)}
        placeholder="Nhập mã xác nhận gồm 6 số"
        button={<Button onClick={submitOtp}>Gửi mã</Button>}
        className="otp-confirm"
      />
      {error && <div className="invalid">{error}</div>}
      <Button
        size="lg"
        className="verify-btn"
        disabled={isSendingSms || lock}
        onClick={confirmOtp}
      >
        {isSendingSms || isConfirmingOtp ? <Loader /> : 'Xác nhận'}
      </Button>
    </Modal>
  );
};

export default VerifyOtp;
