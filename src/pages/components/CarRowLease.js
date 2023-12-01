import React, { useEffect, useState } from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';
import './styles/CarRow.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';
import { RENTAL_TAB_OPTIONS } from './RentalHistory';
import http from '../../utils/http';
import { AddressIcon } from '../../components/Svg';
const CarRowRent = ({ car }) => {
  const carImage = car?.image?.split('-')[0];
  const [error, setError] = useState(null);

  const changeStatus = async (id) => {
    try {
      const { data } = await http.put('/change_status_booking', {
        booking_id: car?.booking_id,
        boocking_status_id: id,
      });
      if (data.status === 1) {
        window.location.href = '/profile/lease';
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  return (
    <div className="CarRow">
      <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />

      <div className="info grap_info">
        <div className="name">{car?.model_name}</div>
        <div className="car-info">
          <div className="block-info smallTxt car_pro_name_rate">
            Ngày bắt đầu:
            <span>
              {car?.start_date} - {car?.start_time}:00
            </span>
          </div>
          <div className="block-info smallTxt car_pro_name_rate">
            Ngày trả xe:
            <span>
              {car?.end_date} - {car?.end_time}:00
            </span>
          </div>
          <div className="car-price">
            <span className="total_price">Tổng số tiền :</span>{' '}
            <span className="price">{convertPrice(+car?.total)}</span> / ngày
          </div>
          <div className="status status2 mt-2">
            Trạng thái: {RENTAL_TAB_OPTIONS[car?.boocking_status_id]}
          </div>
          <div className="address mt-2">
            <AddressIcon className="icon" />
            <span className="title address_c">{car?.address}</span>
          </div>
        </div>
      </div>
      <div className="info">
        {error && <div className="invalid">{error}</div>}
        {car?.boocking_status_id === 2 && (
          <div
            className="actions"
            style={{
              marginTop: 12,
            }}
          >
            <div className="info grap_sen"></div>
            <Button onClick={() => changeStatus(3)}>Đã giao xe</Button>
          </div>
        )}
        {car?.boocking_status_id === 3 && (
          <div
            className="actions"
            style={{
              marginTop: 12,
            }}
          >
            <div className="info grap_sen"></div>
            <Button className="chisai" onClick={() => changeStatus(4)}>
              Đã hoàn thành
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarRowRent;
