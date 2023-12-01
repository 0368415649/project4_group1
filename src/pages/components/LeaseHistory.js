import React, { useEffect, useState } from 'react';

import CarRowLease from './CarRowLease';

import './styles/LeaseHistory.scss';
import TabSwitcher from '../../components/Tab/TabSwitcher';
import { useUserContext } from '../../contexts/User';
import http from '../../utils/http';

import no_car from '../../assets/imgs/no_car.png';

const ALL = 'Tất cả';
const WAITING_FOR_CONFIRM = 'Chờ xác nhận';
const WAITING_FOR_DELIVERY = 'Chờ giao xe';
const LEASING = 'Đang thuê xe';
const FINISH = 'Đã hoàn thành';
const REJECTED = 'Bị từ chối';
const CANCELED = 'Bị huỷ';

export const LEASE_TAB_OPTIONS = [
  ALL,
  WAITING_FOR_CONFIRM,
  WAITING_FOR_DELIVERY,
  LEASING,
  FINISH,
  REJECTED,
  CANCELED,
];
const LeaseHistory = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const { user } = useUserContext();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_booking_owner', {
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
    <div className="Tab-content LeaseHistory">
      <TabSwitcher
        option={currentTab}
        setOption={setCurrentTab}
        options={LEASE_TAB_OPTIONS}
        className="Tab-status"
        useIndex
      />
      {cars.length > 0 && (
        <div className="overflow-row">
          {cars.map((car, k) => (
            <CarRowLease car={car} key={k} />
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

export default LeaseHistory;
