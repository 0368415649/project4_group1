import React, { Fragment, useEffect, useState } from 'react';

import { ChevronRightIcon } from '../components/Svg';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';

import './styles/RegisterCarForm.scss';
import UploadImage from '../components/UploadImage/UploadImage';
import useForm from '../hooks/useForm';
import http from '../utils/http';
import { useParams } from 'react-router-dom';
import { useUserContext } from '../contexts/User';
import { IMAGES_URL, IMAGES_VERIFY_URL } from '../configs/urls';
import useScrollToTop from '../hooks/useScrollToTop';
import TabSwitcher from '../components/Tab/TabSwitcher';

const rules = {
  description: {
    required: 'Mô tả không được để trống',
  },
  price: {
    required: 'Giá không được để trống',
  },
  address: {
    required: 'Địa chỉ không được để trống',
  },
};

const RegisterCarFormEdit = () => {
  const { id } = useParams();
  const { user } = useUserContext();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [id, user]);

  const [currentStep, setCurrentStep] = useState(0);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [types, setTypes] = useState([]);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [img5, setImg5] = useState(null);
  const [img6, setImg6] = useState(null);

  useScrollToTop();

  const {
    register,
    setValue,
    setFormData,
    formState: { dirtyErrors, isError, data: formData, errors },
  } = useForm(rules);

  useEffect(() => {
    const { description, price, address } = car || {};
    setFormData({ description, price, address });
  }, [car, setFormData]);

  const handle = (e) => {
    const file = e.target.files[0];
    setImg1(file);
  };
  const handle2 = (e) => {
    const file = e.target.files[0];
    setImg2(file);
  };
  const handle3 = (e) => {
    const file = e.target.files[0];
    setImg3(file);
  };
  const handle4 = (e) => {
    const file = e.target.files[0];
    setImg4(file);
  };
  const handle5 = (e) => {
    const file = e.target.files[0];
    setImg5(file);
  };
  const handle6 = (e) => {
    const file = e.target.files[0];
    setImg6(file);
  };

  const isDisabled = () => {
    const { description, address } = errors;

    if (currentStep === 0) {
      return !!(description || address);
    }
  };

  const INFO = 'Thông tin';
  const LEASE = 'Hình ảnh';
  const IMAGE = 'Giấy tờ xe';

  const [currentTab, setCurrentTab] = useState(0);
  const LEASE_TAB_OPTIONS = [INFO, LEASE, IMAGE];

  const ShowedStep = [
    <StepOne
      register={register}
      dirtyErrors={dirtyErrors}
      car={car}
      formData={formData}
    />,
    <StepTwo
      car={car}
      setValue={setValue}
      register={register}
      dirtyErrors={dirtyErrors}
      handle={handle}
      handle2={handle2}
      handle3={handle3}
      handle4={handle4}
    />,
    <StepThree handle5={handle5} handle6={handle6} car={car} />,
  ][currentTab];

  const getPrevButton = () => {
    const disabled = currentStep === 0;
    return {
      disabled,
      type: 'button',
      onClick: () => {
        if (!disabled) setCurrentStep((prev) => prev - 1);
      },
    };
  };

  return (
    <div className="RegisterCarForm page-layout flash">
      {/* <div className="steps">
        {STEPS.map((step, index) => (
          <Fragment key={index}>
            <div className={`step ${currentStep === index ? 'actived' : ''}`}>
              <span>{index + 1}</span>
              {step.label}
            </div>
            {index !== STEPS.length - 1 && <ChevronRightIcon />}
          </Fragment>
        ))}
      </div> */}
      <TabSwitcher
        option={currentTab}
        setOption={setCurrentTab}
        options={LEASE_TAB_OPTIONS}
        className="Tab-status"
        useIndex
      />
      {ShowedStep}

      {/* <div className="buttons">
        <Button size="lg" variant="outline" {...getPrevButton()}>
          Quay lại
        </Button>

        {currentStep === STEPS.length - 1 ? (
          <Button
            disabled={!img1 || !img2 || !img3 || !img4 || !img5 || !img6}
            size="lg"
            onClick={upload}
          >
            Đăng ký
          </Button>
        ) : (
          <Button
            size="lg"
            type="button"
            disabled={isDisabled()}
            onClick={() => setCurrentStep((prev) => prev + 1)}
          >
            Kế tiếp
          </Button>
        )}
      </div> */}
    </div>
  );
};

const StepOne = ({ register, dirtyErrors, car, formData }) => {
  console.log('>> Check | formData:', formData);
  const years = [];

  // Tạo danh sách các năm từ 2070 đến 2023
  for (let year = 2007; year <= 2023; year++) {
    years.push({
      label: year,
      value: year,
    });
  }

  const edit = async () => {
    await http.post('/update_car', {
      car_id: car?.car_id,
      price: formData?.price,
      address: formData?.address,
      description: formData?.description,
    });
    window.location.href = '/profile/my-car';
  };

  return (
    <Fragment>
      <div className="section">
        <div className="title">Biển số xe</div>
        <div className="warning">Bạn không thể thay đổi biển số xe</div>
        <div className="half">
          <Input disabled placeholder={car?.number_plate} />
        </div>
      </div>

      <div className="section">
        <div className="title">Thông số cơ bản</div>
        <div className="warning">
          Thông số cơ bản sẽ không thể thay đổi sau khi đăng ký
        </div>
        <div className="input-group">
          <div className="input-section">
            <div className="label">Hãng xe</div>
            <Input disabled placeholder={car?.brand_name} />
          </div>
          <div className="input-section">
            <div className="label">Mẫu xe</div>
            <Input disabled placeholder={car?.model_name} />
          </div>
          <div className="input-section">
            <div className="label">Loại xe</div>
            <Input disabled placeholder={car?.car_type_name} />
          </div>
          <div className="input-section">
            <div className="label">Năm sản xuất</div>
            <Input disabled placeholder={car?.year_manufacture} />
          </div>
        </div>
      </div>
      <div className="half mt-5">
        <div className="input-section">
          <div className="label">Giá cho thuê mặc định</div>
          <div className="info">Đơn giá theo ngày</div>
          <Input suffix="K" isNumberInput {...register('price', car?.price)} />
          {!formData['price'] && (
            <span className="invalid">{dirtyErrors['price']}</span>
          )}
        </div>
      </div>
      <div className="section">
        <div className="title">Địa chỉ</div>
        <textarea rows={4} {...register('address', car?.address)} />
        {!formData['address'] && (
          <span className="invalid">{dirtyErrors['address']}</span>
        )}
      </div>
      <div className="section">
        <div className="title">Mô tả</div>
        <textarea rows={8} {...register('description', car?.description)} />
        {dirtyErrors['description'] && (
          <span className="invalid">{dirtyErrors['description']}</span>
        )}
      </div>

      <Button size="lg" type="button" onClick={edit}>
        Chỉnh sửa
      </Button>
    </Fragment>
  );
};

const StepThree = ({ handle5, handle6, car }) => {
  const carInspectionImages = car?.vehicle_inspection_image;
  const carRegistrationImages = car?.vehicle_registration_image;
  return (
    <div className="StepThree">
      <div className="section">
        <div className="title">Hình ảnh chứng minh xe</div>
        <div className='d-flex justify-content-between align-items-center '>
            <div className="d_kk ms-55">Đăng ký xe</div>
          </div>
        <UploadImage
          className="identity-car  mx-auto"
          onChange={handle5}
          defaultImage={`${IMAGES_VERIFY_URL}/${carRegistrationImages}`}
          readOnly
          style={{
            marginTop: 40,
            width: '50%',
            height: 220,
          }}
        />
         <div className='d-flex justify-content-between align-items-center '>
            <div className="d_kk ms-55 mt-5">Đăng kiểm</div>
          </div>
        <UploadImage
          className="identity-car  mx-auto"
          onChange={handle6}
          defaultImage={`${IMAGES_VERIFY_URL}/${carInspectionImages}`}
          readOnly
          style={{
            margin: '60px 0 50px',
            width: '50%',
            height: 220,
          }}
        />
      </div>
    </div>
  );
};

const StepTwo = ({ handle, handle2, handle3, handle4, car }) => {
  const carImages = car?.image?.split('-');
  console.log('>> Check | car:', car);
  return (
    <div className="StepThree">
      <div className="section">
        <div className="title">Hình ảnh xe</div>
        <div className="car-images">
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[0]}`}
            onChange={handle}
            style={{
              height: 220,
            }}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[1]}`}
            onChange={handle2}
            style={{
              height: 220,
            }}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[2]}`}
            onChange={handle3}
            style={{
              height: 220,
            }}
          />
          <UploadImage
            className="car"
            defaultImage={`${IMAGES_URL}/${carImages[3]}`}
            onChange={handle4}
            style={{
              height: 220,
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default RegisterCarFormEdit;
