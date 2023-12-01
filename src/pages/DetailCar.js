import React, { useEffect, useState } from 'react';

import CarInfos from './components/CarInfos';
import ActionRent from './components/ActionRent';
import Img from '../components/Img';

import './styles/DetailCar.scss';
import { useParams } from 'react-router-dom';
import http from '../utils/http';
import { IMAGES_URL } from '../configs/urls';
import { useUserContext } from '../contexts/User';
import useScrollToTop from '../hooks/useScrollToTop';

const DetailCar = () => {
  const { user } = useUserContext();
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [comments, setComments] = useState([]);
  const [isRevalidate, setIsRevalidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useScrollToTop();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await http.get('/get_details_car', {
          params: {
            id,
            customer_id: user?.id || localStorage.getItem('USER_ID') || 0,
          },
        });
        setCar(data[0]);
      } catch (error) {
        console.log('>> Check | error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, user, isRevalidate]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await http.get('/get_list_feeback', {
          params: {
            car_id: id,
          },
        });
        setComments(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id, user]);

  const carImages = car?.image?.split('-');

  return (
    <div className="DetailCar page-layout flash">
      <div className="images">
        {carImages?.map((img, index) => (
          <Img src={`${IMAGES_URL}/${img}`} alt="car" key={index} />
        ))}
      </div>
      <div className="info-and-actions">
        <CarInfos
          setIsRevalidate={setIsRevalidate}
          car={car}
          comments={comments}
        />
        <ActionRent car={car} />
      </div>
    </div>
  );
};

export default DetailCar;
