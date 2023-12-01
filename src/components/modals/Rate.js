import React, { useState } from 'react';

import Modal from './Modal';
import Button from '../Button';
import Input from '../Input';

import './styles/RateModal.scss';
import { convertPrice } from '../../utils/common';
import { useUserContext } from '../../contexts/User';
import http from '../../utils/http';
import useForm from '../../hooks/useForm';
import { StarIcon, StarSolidIcon } from '../Svg';

const rules = {
  comment: {
    required: 'Đánh giá không được để trống',
  },
};

const RateModal = ({ car, ...props }) => {
  console.log('>> Check | car:', car);
  const { user } = useUserContext();
  const [rate, setRate] = useState(0);
  const [rateHover, setRateHover] = useState(0);
  // const renderDate = (date) => {
  //   const [year, month, day] = date.split('-');
  //   return `${day}-${month}-${year}`;
  // };

  const {
    register,
    formState: { dirtyErrors, isError, data: formData },
  } = useForm(rules);

  // const submit = async () => {
  //   try {
  //     const { data: responseData } = await http.post('/create_booking', {
  //       start_date: data.receiveDate,
  //       start_time: data.receiveHour,
  //       end_date: data.giveBackDate,
  //       end_time: data.giveBackHour,
  //       total: +car?.price * daysCount,
  //       address: formData['address'],
  //       create_by: user?.id || localStorage.getItem('USER_ID'),
  //       car_id: car.car_id,
  //     });

  //     if (responseData.status === 1) {
  //       window.location.href = '/profile/my-car';
  //     }
  //   } catch (error) {
  //     console.log('>> Check | error:', error);
  //   }
  // };

  const handleRate = async () => {
    try {
      const { data: responseData } = await http.post('/create_feeback', {
        comment: formData['comment'],
        create_by: user?.id || localStorage.getItem('USER_ID'),
        car_id: car.car_id,
        rate,
      });

      const { data: statusBooking } = await http.put('/change_status_booking', {
        booking_id: car?.booking_id,
        boocking_status_id: 7,
      });

      if (responseData.Status === 1 && statusBooking.status === 1) {
        window.location.href = '/profile/rental';
      }
    } catch (error) {
      console.log('>> Check | error:', error);
    }
  };

  return (
    <Modal className="RateModal" label="Đánh giá xe" {...props}>
      <div className="stars">
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <StarIcon
              className={`star clickable ${i + 1 <= rate ? 'actived' : ''} ${
                i + 1 <= rateHover ? 'actived-hover' : ''
              }`}
              onClick={() => {
                setRate(i + 1);
              }}
              onMouseOver={() => {
                setRateHover(i + 1);
              }}
              onMouseOut={(prev) => {
                setRateHover(0);
              }}
            />
          ))}
      </div>
      <div className="input-section">
        <div className="label">Đánh giá</div>
        <Input {...register('comment')} />
        {dirtyErrors['comment'] && (
          <span className="invalid">{dirtyErrors['comment']}</span>
        )}
      </div>
      <div className="text-center">
        <Button disabled={isError} onClick={handleRate} className="btn_buyy">
          Gửi đánh giá
        </Button>
      </div>
    </Modal>
  );
};

export default RateModal;
