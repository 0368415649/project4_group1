import React, { useEffect, useState } from 'react';

import CarRow from './CarRow';
import no_car from '../../assets/imgs/no_car.png';

import './styles/MyCar.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';

const MyCar = () => {
  const { user } = useUserContext();
  const [cars, setCars] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_all_my_car', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setCars(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);
  return (
    <div className="Tab-content MyCar overflow-row">
      {cars.map((car, k) => (
        <CarRow car={car} key={k} />
      ))}
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

export default MyCar;
