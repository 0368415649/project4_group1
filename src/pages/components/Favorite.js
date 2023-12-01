import React, { useEffect, useState } from 'react';

import CarRow from './CarRow';

import './styles/Favorite.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import CarRowFav from './CarRowFav';

import no_car from '../../assets/imgs/no_car.png';

const Favorite = () => {
  const [cars, setCars] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await http.get('/get_favorite_car', {
          params: {
            customer_id: user?.id || localStorage.getItem('USER_ID'),
          },
        });
        setCars(data || []);
      } catch (error) {}
    })();
  }, [user?.id]);

  return (
    <div className="Tab-content Favorite">
      {cars.length > 0 && (
        <div className="overflow-row">
          {cars.map((car, k) => (
            <CarRowFav car={car} key={k} />
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

export default Favorite;
