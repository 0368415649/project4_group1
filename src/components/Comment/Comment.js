import React from 'react';
import avatar from '../../assets/imgs/user.png';

import './Comment.scss';
import { StarSolidIcon } from '../Svg';

const Comment = ({ comment, rate, create_by, create_at, name }) => {
  return (
    <div className="Comment d-flex">
      <img src={avatar} alt="avatar" height="32px" width="32px" />
      <div className="info">
        <div className="name">{name || 'abc'}</div>
        <div className="rate">
          {Array(rate)
            .fill(null)
            .map((r) => (
              <StarSolidIcon width="16px" height="16px" fill="#f0c541" />
            ))}
        </div>
        <div className="text">{comment}</div>
      </div>
      <div className="date ">{create_at.split(' ')[0]}</div>
    </div>
  );
};

export default Comment;
