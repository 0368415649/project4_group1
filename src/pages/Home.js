import React, { useEffect, useState } from 'react';

import Filter from './components/Filter';
import Cars from './components/Cars';

import './styles/Home.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import useModal from '../hooks/useModal';
import Register from '../components/modals/Register';
import Login from '../components/modals/Login';
import Loader from '../components/Loader/Loader';
import useScrollToTop from '../hooks/useScrollToTop';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showRegister] = useModal(<Register />);
  const [showLogin] = useModal(<Login switchToRegister={showRegister} />);
  const navigate = useNavigate();
  useScrollToTop();
  useEffect(() => {
    const isReLogin = JSON.parse(searchParams.get('re-login'));
    const isReLoad = JSON.parse(searchParams.get('re-load'));
    if (isReLogin) {
      localStorage.clear();
      showLogin();
      searchParams.delete('re-login');
      navigate('/', { replace: true });
    }
    if (isReLoad) {
      searchParams.delete('re-load');
      navigate('/', { replace: true });
      window.location.reload();
    }
  }, [navigate, searchParams, setSearchParams, showLogin]);

  const [filter, setFilter] = useState({});
  return (
    <div className="Home page-layout large-margin flash">
      <Filter filter={filter} setFilter={setFilter} />
      <Cars filter={filter} />
      <div className="car_pro_name_sen"></div>
      <section>
        <div className="mt-5">
          <div className="row">
            <div className="col-lg-12 mb-4 mt-2 text-center">
              <h2>Ưu Điểm Của Mioto</h2>
              <h4>
                Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên Mioto.
              </h4>
            </div>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img1.png"
                data-holder-rendered="true"
              />
              <h4>An tâm đặt xe</h4>
              <p style={{ fontSize: 13 }}>
                Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc. Hoàn
                cọc và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày
                trước chuyến đi.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img2.png"
                data-holder-rendered="true"
              />
              <h3>Thủ tục đơn giản</h3>
              <p style={{ fontSize: 13 }}>
                Chỉ cần có CCCD gắn chip (Hoặc Passport) &amp; Giấy phép lái xe
                là bạn đã đủ điều kiện thuê xe trên Mioto.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img6.png"
                data-holder-rendered="true"
              />
              <h3>Lái xe an toàn</h3>
              <p style={{ fontSize: 13 }}>
                Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV,
                MPV, Bán tải.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img3.png"
                data-holder-rendered="true"
              />
              <h3>Thanh toán dễ dàng</h3>
              <p style={{ fontSize: 13 }}>
                Đa dạng hình thức thanh toán: ATM, thẻ Visa &amp; Ví điện tử
                (Momo, VnPay, ZaloPay).
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img4.png"
                data-holder-rendered="true"
              />
              <h3>Giao xe tận nơi</h3>
              <p style={{ fontSize: 13 }}>
                Bạn có thể lựa chọn giao xe tận nhà/sân bay... Phí tiết kiệm chỉ
                từ 15k/km.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mt-3">
              <img
                className="rounded-circle"
                alt="140x140"
                style={{ width: 240, height: 200 }}
                src="https://localhost:44307/Image/Home/img5.png"
                data-holder-rendered="true"
              />
              <h3>Dòng xe đa dạng</h3>
              <p style={{ fontSize: 13 }}>
                Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV,
                MPV, Bán tải.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5" />
        <div className="col-lg-12 mb-4 mt-2 text-center">
          <h3>Hướng Dẫn Thuê Xe</h3>
          <h5>
            Chỉ với 4 bước đơn giản để trải nghiệm thuê xe Mioto một cách nhanh
            chóng.
          </h5>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-5 col-sm-11 text-center">
            <img
              className="rounded-circle"
              alt="140x140"
              style={{ width: 240, height: 200 }}
              src="https://localhost:44307/Image/Home/img7.png"
              data-holder-rendered="true"
            />
            <h5 style={{ fontSize: 14 }}>Đặt xe trên web ADDDA</h5>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-11 text-center">
            <img
              className="rounded-circle"
              alt="140x140"
              style={{ width: 240, height: 200 }}
              src="https://localhost:44307/Image/Home/img8.png"
              data-holder-rendered="true"
            />
            <h5 style={{ fontSize: 14 }}>Nhận xe</h5>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-11 text-center">
            <img
              className="rounded-circle"
              alt="140x140"
              style={{ width: 240, height: 200 }}
              src="https://localhost:44307/Image/Home/img9.png"
              data-holder-rendered="true"
            />
            <h5 style={{ fontSize: 14 }}>Bắt đầu hành trình</h5>
          </div>
          <div className="col-lg-3 col-md-5 col-sm-11 text-center">
            <img
              className="rounded-circle"
              alt="140x140"
              style={{ width: 240, height: 200 }}
              src="https://localhost:44307/Image/Home/img10.png"
              data-holder-rendered="true"
            />
            <h5 style={{ fontSize: 14 }}>Trả xe &amp; kết thúc chuyến đi</h5>
          </div>
          <div style={{ clear: 'both' }} />
        </div>
      </section>
    </div>
  );
};

export default Home;
