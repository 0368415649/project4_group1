import React from 'react';
import { Link } from 'react-router-dom';

import Img from '../../components/Img';
import Button from '../../components/Button';
import {
  AddressIcon,
  BriefcaseIcon,
  StarSolidIcon,
} from '../../components/Svg';

import './styles/CarCard.scss';
import { IMAGES_URL } from '../../configs/urls';
import { convertPrice } from '../../utils/common';

const CarCard = ({ car }) => {
  const carImage = car?.image?.split('-')[0];

  return (
    <Link className="CarCard CarCard2" to={`/car/${car?.car_id}`}>
      <div className="imgs">
        <Img
          className="car"
          src={`${IMAGES_URL}/${carImage}`}
          width="100%"
          height="170px"
          alt="car-img"
        />
      </div>
      <div className="car-details">
        <div className="car-name">{car?.model_name}</div>
        <div className="block-info2 mt-2">
          <AddressIcon className="icon" />
          <span>{car?.address}</span>
        </div>
        <div className="car_pro_name_sen"></div>
        <div className="car-info justify-content-between align-items-center">
          <div className="block-info">
            <StarSolidIcon className="star-icon icon rate_color" />
            <span>{car?.rate ? Number(car?.rate).toFixed(1) : '5.0'}</span>
          </div>
          <div className="block-info">
            <BriefcaseIcon className="icon" />
            <span>{car?.count_journeys} chuyến</span>
          </div>
        </div>
        <div className="mt-2 fw-bold">
          <div>
            <span className="price ">{convertPrice(car?.price)} / Ngày</span>{' '}
          </div>
        </div>
        {/* <div className="actions">
          <Button as={Link} to={`/car/${car?.car_id}`} variant="outline">
            Chi tiết
          </Button>
          <Button>Thuê</Button>
        </div> */}
      </div>
    </Link>
  );
};

export default CarCard;
