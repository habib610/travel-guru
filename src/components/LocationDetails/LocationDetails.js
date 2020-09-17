import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import LocationMoreDetails from '../LocationMoreDetails/LocationMoreDetails';

const LocationDetails = () => {
    const {overView} = useParams();
    const destination = fakeData.filter(place=> place.category === overView);
    console.log(destination);
    let mapsUrl;
    if(overView === 'coxbazar'){
        mapsUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.1055421782607!2d91.97378591424174!3d21.4250961795072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc865db404999%3A0xf44aaf15913e1862!2sSeagull%20Hotel!5e0!3m2!1sen!2sbd!4v1600292262647!5m2!1sen!2sbd"
    }
    if(overView === 'sreemangal'){
        mapsUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.279102896706!2d91.7579147142978!3d24.30189787340257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375179f338f9090d%3A0x57548f3a3ad79890!2sSreemangal%20Tea%20Resort%20and%20Museum!5e0!3m2!1sen!2sbd!4v1600292379076!5m2!1sen!2sbd"
    }
    if(overView === 'sundarban'){
        mapsUrl= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.4703896484766!2d89.73017481426506!3d22.673526634974067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fff6641e167db3%3A0xbda324d3268417b5!2sSundarbans%20Resort!5e0!3m2!1sen!2sbd!4v1600292521013!5m2!1sen!2sbd"
    }
    
    return (
        <div className="bg-white rounded">
            <Row>
                <div className="col-lg-6">
                    {
                        destination.map(place => <LocationMoreDetails room={place} key ={place.id}></LocationMoreDetails>)
                    }
                </div>
                <div className="col-lg-6 p-5">
                <iframe style={{height:"100%", width: "100%"}} src={mapsUrl}></iframe>
                </div>
                
            </Row>
        </div>
    );
};

export default LocationDetails;