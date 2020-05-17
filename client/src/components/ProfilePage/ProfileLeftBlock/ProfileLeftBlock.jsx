import React from 'react';

import './ProfileLeftBlock.scss';
import plus_img from '../../../img/plus.svg';

const ProfileLeftBlock = () => (
  <div className="profile-block-left">
    <img src={`http://localhost:8000/image/${localStorage.getItem('img')}`} alt=""/>
    <div className="plus-block">
      <img src={plus_img} alt=""/>
    </div>
  </div>
);

export default ProfileLeftBlock;