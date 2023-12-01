import React, { useEffect, useRef, useState } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  CogIcon,
  EarthIcon,
  ElectricityIcon,
  SearchIcon,
  UpDownArrowIcon,
  VehicleIcon,
} from '../../components/Svg';

import './styles/Filter.scss';

const FILTERS = {
  type: {
    icon: VehicleIcon,
    label: 'Loại xe',
    childs: [
      {
        label: '4 chỗ (Mini)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/4-mini-v2.png',
        id: 1,
      },
      {
        label: '4 chỗ (Sedan)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/4-sedan-v2.png',
        id: 2,
      },
      {
        label: '4 chỗ (Hatchback)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/4-hatchback-v2.png',
        id: 3,
      },
      {
        label: '5 chỗ (CUC Gầm cao)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/5-suv-v2.png',
        id: 4,
      },
      {
        label: '7 chỗ (SUV Gầm cao)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/7-suv-v2.png',
        id: 5,
      },
      {
        label: '7 chỗ (MPV Gầm thấp)',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/7-mpv-v2.png',
        id: 6,
      },
      {
        label: 'Bán tải',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-types/pickup-v2.png',
        id: 7,
      },
    ],
  },
  automaker: {
    icon: EarthIcon,
    label: 'Hãng xe',
    childs: [
      {
        label: 'Audi',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Audi.png',
        id: 1,
      },
      {
        label: 'Baic',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Baic.png',
        id: 2,
      },
      {
        label: 'BMW',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/BMW.png',
        id: 4,
      },
      {
        label: 'Chevrolet',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Chevrolet.png',
        id: 7,
      },
      {
        label: 'Daewoo',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Daewoo.png',
        id: 8,
      },
      {
        label: 'Ford',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Ford.png',
        id: 12,
      },
      {
        label: 'Honda',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Honda.png',
        id: 15,
      },
      {
        label: 'Hyundai',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Hyundai.png',
        id: 16,
      },
      {
        label: 'Isuzu',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Isuzu.png',
        id: 17,
      },
      {
        label: 'Kia',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Kia.png',
        id: 20,
      },
      {
        label: 'Land-Rover',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Land-Rover.png',
        id: 21,
      },
      {
        label: 'Luxgen',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Luxgen.png',
        id: 23,
      },
      {
        label: 'Mazda',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Mazda.png',
        id: 24,
      },
      {
        label: 'Mercedes',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Mercedes.png',
        id: 25,
      },
      {
        label: 'Mitsubishi',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Mitsubishi.png',
        id: 26,
      },
      {
        label: 'Nissan',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Nissan.png',
        id: 28,
      },
      {
        label: 'Peugeot',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Peugeot.png',
        id: 29,
      },
      {
        label: 'Porsche',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Porsche.png',
        id: 30,
      },
      {
        label: 'Suzuki',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Suzuki.png',
        id: 36,
      },
      {
        label: 'Toyota',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Toyota.png',
        id: 38,
      },
      {
        label: 'Vinfast',
        img: 'https://n1-cstg.mioto.vn/m/vehicle-makes/Vinfast.png',
        id: 40,
      },
    ],
  },
  price: {
    icon: UpDownArrowIcon,
    label: 'Sắp xếp theo giá',
    childs: [
      {
        label: 'Tăng dần',
        id: 1,
      },
      {
        label: 'Giảm dần',
        id: 2,
      },
    ],
  },
};

const Filter = ({ filter, setFilter }) => {
  const [hoveredType, setHoveredType] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const onChangeSearch = (e) => {
    const { value } = e.target;

    setFilter((prev) => ({
      ...prev,
      search: value,
    }));
  };

  return (
    <div className="Filter">
      <div className="top-section">
        <Input
          className="filter-input"
          placeholder="Hãy nhập thông tin tìm kiếm ..."
          type="text"
          startIcon={<SearchIcon width="24" />}
          onChange={onChangeSearch}
        />
        <div className="filter-btns">
          {Object.keys(FILTERS).map((type) => {
            const { label, icon } = FILTERS[type];
            return (
              <Button
                startIcon={icon()}
                variant="outline"
                className="filter-btn"
                key={label}
                onMouseOver={() => {
                  setIsShow(true);
                  setHoveredType(type);
                }}
                onMouseOut={() => setIsShow(false)}
              >
                {label}
              </Button>
            );
          })}
        </div>
      </div>
      <div
        className="filter-section"
        onMouseOver={() => setIsShow(true)}
        onMouseOut={() => setIsShow(false)}
      >
        {isShow &&
          Object.keys(FILTERS).map((type) => {
            const { childs } = FILTERS[type];
            const buttonClass = `filter-child-btn btn-${type}`;

            if (!childs) return null;
            return (
              <div
                key={type}
                className={`filter-child-section ${type} ${
                  hoveredType === type ? 'active' : ''
                }`}
              >
                {childs.map((child) => {
                  const { label, img, id } = child;
                  return (
                    <Button
                      variant="outline"
                      className={`${buttonClass} ${
                        id === filter[type] ? 'actived' : ''
                      }`}
                      key={label}
                      onClick={() => {
                        if (id === filter[type]) {
                          setFilter((prev) => {
                            const { [type]: removed, ...rest } = prev;
                            return rest;
                          });
                        } else {
                          setFilter((prev) => ({ ...prev, [type]: id }));
                        }
                        setIsShow(false);
                      }}
                    >
                      {img && <img src={img} alt={buttonClass} />}
                      {label}
                    </Button>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Filter;
