import React, { useEffect, useState } from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';
import './styles/CarRow.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';
import { RENTAL_TAB_OPTIONS } from './RentalHistory';
import http from '../../utils/http';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AddressIcon } from '../../components/Svg';
import RateModal from '../../components/modals/Rate';
import useModal from '../../hooks/useModal';

const CarRowRent = ({ car }) => {
  console.log('>> Check | car:', car);
  const carImage = car?.image?.split('-')[0];
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const [visibleRateModal] = useModal(<RateModal />);
  const navigate = useNavigate();

  useEffect(() => {
    const isReLoad = JSON.parse(searchParams.get('re-load'));

    if (isReLoad) {
      searchParams.delete('re-load');
      navigate('/profile/rental', { replace: true });
      window.location.reload();
    }
  }, [navigate, searchParams]);

  const cancel = async () => {
    try {
      const { data } = await http.put('/change_status_booking', {
        booking_id: car?.booking_id,
        boocking_status_id: 6,
      });
      if (data.status === 1) {
        window.location.href = '/profile/rental';
      }
    } catch (error) {
      setError('Không thành công, thử lại sau!');
    }
  };

  return (
    <div className="CarRow">
      <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />

      <div className="info grap_info">
        <div className="name mt-2">{car?.model_name}</div>
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
            <span className="price price_total">
              {convertPrice(+car?.total)}
            </span>
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
        {car?.boocking_status_id === 1 && (
          <div
            className="actions"
            style={{
              marginTop: 12,
            }}
          >
            <div className="info grap_sen"></div>
            <Button className="btn_css" onClick={cancel}>
              Hủy thuê
            </Button>
          </div>
        )}
        {car?.boocking_status_id === 4 && (
          <div
            className="actions"
            style={{
              marginTop: 12,
            }}
          >
            <div className="info grap_sen"></div>
            <Button
              className="btn_css_dg"
              onClick={() => visibleRateModal({ car })}
            >
              Đánh giá
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarRowRent;
