import React, { useEffect, useState } from 'react';

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

const MyAddressModal = ({ onClick, ...props }) => {
  const { user } = useUserContext();
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/show_address', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setAddresses(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);

  return (
    <Modal className="MyAddressModal" label="Chọn địa chỉ" {...props}>
      {addresses.length > 0 && (
        <div
          className="overflow-row"
          style={{
            maxHeight: 300,
          }}
        >
          {addresses.map((address) => (
            <div
              key={address.address_id}
              onClick={() => onClick(address)}
              className="clickable grap_ic_left1 d-flex align-items-center justify-content-between mt-3"
            >
              <div className="ms-3">{address.address_name}</div>
            </div>
          ))}
          {addresses.length === 0 && (
            <div className="col-lg-12 col-md-6 col-sm-12 text-center">
              <img
                className
                alt="140x140"
                style={{ height: 400, borderRadius: 10 }}
                src="https://localhost:44307/Image/Home/Untitled.png"
                data-holder-rendered="true"
              />
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default MyAddressModal;
