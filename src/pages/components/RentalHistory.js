import React, { useEffect, useState } from 'react';

import no_car from '../../assets/imgs/no_car.png';

import './styles/RentalHistory.scss';
import TabSwitcher from '../../components/Tab/TabSwitcher';
import { useUserContext } from '../../contexts/User';
import http from '../../utils/http';
import CarRowRent from './CarRowRent';

const ALL = 'Tất cả';
const WAITING_FOR_CONFIRM = 'Chờ xác nhận';
const WAITING_FOR_DELIVERY = 'Chờ giao xe';
const LEASING = 'Đang thuê xe';
const FINISH = 'Đã hoàn thành';
const REJECTED = 'Bị từ chối';
const CANCELED = 'Đã huỷ';
const ALL_FINISH = 'Kết thúc';

export const RENTAL_TAB_OPTIONS = [
  ALL,
  WAITING_FOR_CONFIRM,
  WAITING_FOR_DELIVERY,
  LEASING,
  FINISH,
  REJECTED,
  CANCELED,
  ALL_FINISH,
];

const RentalHistory = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { user } = useUserContext();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_booking_user', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
            boocking_status_id: currentTab,
          },
        });
        setCars(data || []);
      } catch (error) {}
    })();
  }, [currentTab, user?.id]);
  return (
    <div className="Tab-content RentalHistory">
      <TabSwitcher
        option={currentTab}
        setOption={setCurrentTab}
        options={RENTAL_TAB_OPTIONS.slice(0, -1)}
        className="Tab-status"
        useIndex
      />
      {cars.length > 0 && (
        <div className="overflow-row">
          {cars.map((car, k) => (
            <CarRowRent car={car} key={k} />
          ))}
        </div>
      )}

      {cars.length === 0 && (
        <img
          style={{
            margin: '64px auto 0',
          }}
          width={220}
          src={no_car}
          alt="no_car"
        />
      )}
    </div>
  );
};

export default RentalHistory;
