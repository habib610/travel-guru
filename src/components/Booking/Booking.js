import React from 'react';
import { Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Duration from '../Duration/Duration';
import './Booking.css'
const Booking = () => {
    const { location} = useParams();
    const destination = fakeData.filter(place=> place.category === location);
    console.log(destination);

    const destinationName = destination[0].category;
    const destinationDetails = destination[0].details;
    return (
        <div>
            <Row>
                <div className="col-lg-5 details">
    <h1 >{destinationName}</h1>
    <p>{destinationDetails}</p>
                </div>
                <div className="col-lg-7">
                    <div className="date">
                        <p><small>Origin</small></p>
                        <p><strong>{destination[0].origin}</strong></p>
                        Destination
                        <p><small>Destination</small></p>
                        <p><strong>{destination[0].Destination}</strong></p>
                        {/* calender here */}
                        <Duration></Duration>
                      <Link to={"/booking/" + destinationName}><button>Start Booking</button></Link> 
                    </div>
                    <div>

                    </div>
                </div>
            </Row>
        
        </div>
    );
};

export default Booking;