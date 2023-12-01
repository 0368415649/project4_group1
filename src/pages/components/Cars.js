import React, { useEffect, useState } from 'react';

import './styles/Cars.scss';
import CarCard from './CarCard';
import http from '../../utils/http';

import no_car from '../../assets/imgs/no_car.png';

const Cars = ({ filter }) => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await http.get('/get_all_car_search', {
          params: {
            typeCar: filter.type || '',
            brand: filter.automaker || '',
            order_by_price:
              filter.price === 1 ? 'ASC' : filter.price === 2 ? 'DESC' : '',
            name: filter.search || '',
          },
        });
        setCars(data);
      } catch (error) {
        console.log('>> Check | error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [filter]);
  return (
    <>
      {cars.length > 0 && (
        <div className="Cars flash">
          {cars.map((car) => (
            <CarCard key={car?.car_id} car={car} />
          ))}
        </div>
      )}
      {cars.length === 0 && (
        <div>
          <img
            style={{
              margin: '64px auto 0',
              display: 'block',
            }}
            width={220}
            src={no_car}
            alt="no_car"
          />
          <div className="text-center fw-bold">Không tìm thấy xe phù hợp</div>
        </div>
      )}
    </>
  );
};

export default Cars;
