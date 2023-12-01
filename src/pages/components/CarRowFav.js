import React from 'react';

import Img from '../../components/Img';
import Button from '../../components/Button';

import { BriefcaseIcon, StarSolidIcon } from '../../components/Svg';

import './styles/CarRow.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';
import { Link } from 'react-router-dom';
import http from '../../utils/http';

const CarRowFav = ({ car }) => {
  const carImage = car?.image?.split('-')[0];

  const deleteCar = async () => {
    try {
      const { data } = await http.delete(
        `/delete_favorite_car?favorite_car_id=${car?.favorite_car_id}`
      );

      if (data?.status === 1) {
        window.location.href = '/profile/favorite';
      }
    } catch (error) {}
  };

  return (
    <div className="CarRow">
      {/* <Img src="" /> */}
      <Img className="car-img" src={`${IMAGES_URL}/${carImage}`} alt="car" />

      <div className="info">
        <div className="name">{car?.model_name}</div>
        <div className="car-info">
          <div className="car-price mt-2">
            <span className="price">{convertPrice(+car?.price)}</span> / ngày
          </div>
          <div className="d-flex  align-items-center fs_22 mt-2">
            <div className="block-info">
              <StarSolidIcon className="star-icon icon" />
              <span>{car?.rate ? Number(car?.rate).toFixed(1) : '5.0'}</span>
            </div>
            <div className="block-info ms-3">
              <BriefcaseIcon className="icon" />
              <span>{car?.count_journeys} chuyến</span>
            </div>
          </div>
        </div>
        <div className="sen"></div>
        <div className="actions">
          <Button onClick={deleteCar}>Bỏ thích</Button>
          <Link to={`/car/${car?.car_id}`} className="view">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarRowFav;
