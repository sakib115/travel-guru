/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React from 'react';
// css import
import './booking.css'
import { useParams } from 'react-router-dom';
const booking = () => {
    const { placeName } = useParams()
    return (
        <div className="booking-main-div">
            <div className='text-white container mt-5'>
                <div className="row">
                    <div className="booking-hotels-div col-md-8">
                        <p className='booking-hotel-title1'>252 stays Apr 13-17 3 guests</p>
                        <span className='booking-hotel-title2'>Stay in {placeName}</span>
                        <div className="hotel-details d-flex">
                            <div>
                                <img src={require('./Rectangle 26.png')} className='hotel-img' alt="" />
                            </div>
                            <div>
                                <p className="hotel-title">Light bright airy stylish apt safe peaceful stay</p>
                                <p className='hotel-description'>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <div className="hotel-price"><p>39$</p></div>
                            </div>
                        </div>
                        <div className="hotel-details d-flex">
                            <div>
                                <img src={require('./Rectangle 28.png')} className='hotel-img' alt="" />
                            </div>
                            <div>
                                <p className="hotel-title">Light bright airy stylish apt safe peaceful stay</p>
                                <p className='hotel-description'>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <div className="hotel-price"><p>59$</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="booking-map-div col-md-4">
                        <div className="map-div">
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="500" height="460" id="gmap_canvas" src={`https://maps.google.com/maps?q=${placeName}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default booking;