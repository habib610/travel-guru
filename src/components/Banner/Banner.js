import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Banner.css";

const Banner = () => {

  return (
    <div style={{marginTop: '10vh'}}>
      <div className="row">
        <div className="col-sm-12 col-md-3">
          <h1 className="banner-tittle">Cox'Bazar</h1>
          <p>
            Cox's Bazar is a city, fishing port, tourism center and district
            headquarters in southern Bangladesh. It is famous mostly for its
            long natural sandy beach and its..
          </p>
          <Button style={{ background: "orange", border: "none" }}>
            Book Now{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
          </Button>
        </div>
        <div className="col-sm-12 col-lg-3">
          <Link to={"/visiting/coxbazar"}>
          <Card className="card">
            <Card.Img variant="top" src="https://iili.io/2nIrp2.md.png" />
            <Card.Body className="bg-dark">
              <Card.Title className="card-title text-white">Cox's Bazar</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </div>

        <div className="col-sm-12 col-lg-3">
          <Link to={"/visiting/sreemangal"}>
          <Card className="card">
            <Card.Img variant="top" src="https://iili.io/2nIgkl.md.png" />
            <Card.Body  className="bg-dark">
              <Card.Title className="card-title text-white">Sreemangal</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </div>


        <div className="col-sm-12 col-lg-3">
          <Link to={"/visiting/sundarban"}>
          <Card className="card">
            <Card.Img variant="top" src="https://iili.io/2nIU74.md.png" />
            <Card.Body  className="bg-dark">
              <Card.Title className="card-title text-white">Sundarban</Card.Title>
            </Card.Body>
          </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
