import React from 'react';
import './InfoCard.css';


const InfoCard = ({ info }) => {
    return (
      <div className="col-md-2 info-card">
        <div className="d-flex justify-content-center info_container mr-3">
          <img src={info.image} alt="" />
        </div>
      </div>
    );
};

export default InfoCard;