import React from 'react';
import { Link } from 'react-router-dom';

import { DiscordIcon, TelegramIcon } from '../Svg';

import logo from '../../assets/imgs/logo.png';

import './Footer.scss';
import { LINKS } from '../../constants/footer';

const Footer = () => {
  return (
    <div>
      <div
        className="mt-5"
        style={{
          padding: '10px 200px',
          borderTop: '1px solid #c6c6c6',
          borderBottom: '1px solid #c6c6c6',
        }}
      >
        <div className="row">
          <div className="col-sm-5 col-lg-4">
          <Link to="/">
            <img id="header-logo" src={logo} height="30px" alt="logo" />
          </Link>
            <h6>Hotline: 19001008</h6>
            <p>Tổng đài hỗ trợ: 7AM-10PM</p>
            <br />
            <h6>Contact@Mioto.vn</h6>
            <p>Gửi mail cho Mioto</p>
          </div>
          <div className="col-sm-6 col-lg-3 mt-3">
            <h6 className="fw-bold">Chính sách</h6>
            <br />
            <p><Link to="/chinh-sach" >Chính sách và quy định</Link></p>
            <p><Link to="/information-security" >Bảo mật thông tin</Link></p>
            <p><Link to="/general-principles" >Nguyên tắc chung</Link></p>
            <p><Link to="/resolveconflic" >Giải quyết tranh chấp</Link></p>
          </div>
          <div className="col-sm-6 col-lg-2 mt-3">
            <h6 className="fw-bold">Tìm hiểu thêm</h6>
            <br />
            <p><Link to="/general-guidance" >Hướng dẫn chung</Link></p>
            <p><Link to="/instructions-booking-car" >Hướng dẫn đặt xe</Link></p>
            <p>Hỏi và trả lời</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <br />
            <br />
            <p><Link to="/about-me" >Về chúng tôi</Link></p>
            <p>Mioto Blog</p>
            <p>Tuyển dụng</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 col-lg-4">
            <h6>© Công ty Cổ Phần Mioto</h6>
          </div>
          <div className="col-sm-6 col-lg-3">
            <p>Số GCNĐKKD: 03173075121</p>
          </div>
          <div className="col-sm-6 col-lg-2">
            <p>Ngày cấp: 24-05-22</p>
          </div>
          <div className="col-sm-6 col-lg-3">
            <p>Nơi cấp: Sở Kế hoạch và Đầu tư</p>
          </div>
        </div>
      </div>
      {/* Show car  */}
    </div>
  );
};

export default Footer;
