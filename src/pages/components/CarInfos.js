import React, { useEffect, useState } from 'react';
import avatar from '../../assets/imgs/user.png';
import Img from '../../components/Img';
import {
  BriefcaseIcon,
  CogIcon,
  HeartIcon,
  LiquidIcon,
  ModelIcon,
  NumberIcon,
  StarIcon,
  StarSolidIcon,
  UsersIcon,
} from '../../components/Svg';
import Button from '../../components/Button';

import './styles/CarInfos.scss';
import http from '../../utils/http';
import { useUserContext } from '../../contexts/User';
import { toast } from 'react-toastify';
import Comment from '../../components/Comment/Comment';

const CarInfos = ({ car, comments, setIsRevalidate }) => {
  const [error, setError] = useState(null);
  const { user } = useUserContext();
  const [localLiked, setLocalLiked] = useState(false);

  const addFavorite = async () => {
    if (car?.customer_id === user?.customer_id)
      return 'Bạn không thể yêu thích xe của chính mình!';
    if (!!car?.favorite_car_id) {
      try {
        const { data } = await http.delete(
          `/delete_favorite_car?favorite_car_id=${car?.favorite_car_id}`
        );
        if (data.status === 1) {
          toast('Đã bỏ khỏi mục Xe ưa thích');
          setLocalLiked((prev) => !prev);
          setIsRevalidate((prev) => !prev);
        }
      } catch (error) {
        setError('Không thành công, thử lại sau!');
      }
    } else {
      try {
        const { data } = await http.post('/add_favorite_car', {
          car_id: car?.car_id,
          customer_id: user?.id || localStorage.getItem('USER_ID'),
        });
        if (data.status === 1) {
          toast('Đã thêm vào mục Xe ưa thích');
          setLocalLiked((prev) => !prev);
          setIsRevalidate((prev) => !prev);
        }
      } catch (error) {
        setError('Không thành công, thử lại sau!');
      }
    }
  };

  useEffect(() => {
    console.log('???');
    setLocalLiked(!!car?.favorite_car_id);
  }, [car?.favorite_car_id]);

  return (
    <div className="CarInfos">
      <div className="infos">
        <div className="base-infos">
          <div className="name">{car?.model_name}</div>
          <div className="car-info">
            <div className="block-info">
              <StarSolidIcon className="star-icon icon" />
              <span>{car?.rate ? Number(car?.rate).toFixed(1) : '5.0'}</span>
            </div>
            <div className="block-info">
              <BriefcaseIcon className="icon" />
              <span>{car?.count_journeys} chuyến</span>
            </div>
          </div>
        </div>
        <Button
          disabled={!user}
          variant="outline"
          className={`like-btn ${localLiked ? 'liked' : ''}`}
          onClick={addFavorite}
        >
          <HeartIcon />
        </Button>
      </div>
      <div className="main-infos">
        <div className="main-info">
          <UsersIcon />
          <div className="t-value">
            <div className="title">Số ghế</div>
            <div className="value">{car?.number_seats} chỗ</div>
          </div>
        </div>
        <div className="main-info">
          <NumberIcon />
          <div className="t-value">
            <div className="title">Biển số</div>
            <div className="value">{car?.number_plate}</div>
          </div>
        </div>
        <div className="main-info">
          <CogIcon />
          <div className="t-value">
            <div className="title">Đời xe</div>
            <div className="value">2018</div>
          </div>
        </div>
        <div className="main-info">
          <ModelIcon />
          <div className="t-value">
            <div className="title">Hãng xe</div>
            <div className="value">{car?.brand_name}</div>
          </div>
        </div>
        {/* <div className="main-info">
          <LiquidIcon />
          <div className="t-value">
            <div className="title">Nhiên liệu</div>
            <div className="value">Xăng</div>
          </div>
        </div> */}
      </div>
      <div style={{ color: '#767676', fontSize: 15 }} className="description">
        <div className="title">Mô tả</div>
        <div className="value">{car?.description}</div>
      </div>
      <pre
        style={{
          color: '#767676',
          fontSize: 15,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '700px',
        }}
        className="mt-5"
      >
        Quy định khác:{'\n'}◦ Sử dụng xe đúng mục đích.{'\n'}◦ Không sử dụng xe
        thuê vào mục đích phi pháp, trái pháp luật.{'\n'}◦ Không sử dụng xe thuê
        để cầm cố, thế chấp.{'\n'}◦ Không hút thuốc, nhả kẹo cao su, xả rác
        trong xe.{'\n'}◦ Không chở hàng quốc cấm dễ cháy nổ.{'\n'}◦ Không chở
        hoa quả, thực phẩm nặng mùi trong xe.{'\n'}◦ Khi trả xe, nếu xe bẩn hoặc
        có mùi trong xe, khách hàng vui lòng vệ sinh xe sạch sẽ hoặc gửi phụ thu
        phí vệ sinh xe.{'\n'}Trân trọng cảm ơn, chúc quý khách hàng có những
        chuyến đi tuyệt vời !{'\n'}
        {'                '}
      </pre>
      <div className="mt-5"></div>
      <div className="on_xe">Chủ xe</div>
      <div className=" d-flex align-items-center mt-2">
        <img src={avatar} alt="avatar" height="80px" width="80px" />
        <div className="info3">
          <div className="name ms-3">{user?.name_display}</div>
        </div>
      </div>
      <div className="mt-3"></div>
      {comments.length > 0 && (
        <div className="comments mt-4">
          <div className="comment_grap">
            <StarSolidIcon className="" width="16" height="16" fill="#f0c541" />
            <div className="ms-1">
              {car?.rate_avg ? Number(car?.rate_avg).toFixed(1) : '--'}{' '}
            </div>
            <span className="ms-1">•</span>{' '}
            <div className="ms-1 dg_f">
              {car?.count_comment || '--'} đánh giá
            </div>
          </div>

          <div className="rows mt-3">
            {comments.map((cmt) => (
              <Comment
                comment={cmt.comment}
                create_at={cmt.create_at}
                create_by={cmt.create_by}
                rate={cmt.rate}
                name={cmt?.name_display}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarInfos;
