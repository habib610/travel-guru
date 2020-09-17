import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LocationMoreDetails = (props) => {
  const {
    category,
    name,
    price,
    capacity,
    facility,
    photo,
    stars,
    shortDescription,
    details,
    totalPrice,
  } = props.room;
  return (
    <div style={{color: "black", textAlign:"left", marginTop:"0px"}}>
      <div className="row my-2 px-2 ">
        <div className="col-lg-6">
          <img src={photo} className="img-fluid w-100" alt="" />
        </div>
        <div className="col-lg-6">
          <h5>{name}</h5>
          <p>{capacity}</p>
          <p>{shortDescription}</p>
          <p>{facility}</p>
          <div className="row">
            <div className="col-lg-4">
            
              <b className="d-flex align-items-center">
              <FontAwesomeIcon className="text-warning" icon={faStar} />
                {stars}
              </b>
            </div>
            <div className="col-lg-4">
  <p><strong>${price}/</strong><small>night</small></p>
            </div>
            <div className="col-lg-4">
  <small>{totalPrice}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMoreDetails;
