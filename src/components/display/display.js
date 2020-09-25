/* eslint-disable react-hooks/rules-of-hooks */
//react import
import React, { useState} from 'react';
import {
  Link
} from "react-router-dom";
//css import
import './display.css'
//components import
const display = () => {
    const [placeInfo, setPlaceInfo] = useState(
      {
          name: 'Sajek Valley',
          description: "Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls.",
      }
  )
//worst part of my code
    const sajek = () => {
        const sajekInfo = {
                name: 'Sajek Valley',
                description: "Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls.",
            }
        setPlaceInfo(sajekInfo)
    }
    const sreemongol = () => {
        const sreemongolInfo = {
                name: 'Sreemongol',
                description: "Sreemangal is a hilly area covered with tea estates. There are 47 tea gardens in Sreemangal. A large portion of world’s highest quality tea is grown here. It is also called the city of ‘two leaves and a bud. Sreemangal is famous for nature. Once Sreemangal was a part of the Tripura State. The great earthquake of 1897 caused a massive change in the physiography of the area.",

            }
        setPlaceInfo(sreemongolInfo)
    }
    const sundorbon = () => {
        const sundorbonInfo = {
                name: 'Sundorbon',
                description: "The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels.",

            }
        setPlaceInfo(sundorbonInfo)
    }
    const [toggle, setToggle] = useState(true);
    const handleToggle = () => {setToggle(toggle? false : true)}
    return (
        <>
            <div className="d-flex">
                <div className="place-image-card-div">
                    <div className="dynamic-place-details-div">
                        <h1>{placeInfo.name}</h1>
                        <p>{placeInfo.description}</p>
                        <button className="yellow-button" onClick={handleToggle}>
                            {toggle? 'Booking' : 'Go Back'}
                        </button>
                    </div>
                    {
                        toggle
                        ? 
                            <>
                                <div className="place-image-card">
                                    <button className="reset-button">
                                        <img src={require('./Sajek.png')} alt=""
                                    className="card-images" onClick={sajek}/>
                                        <h1 className="card-title">Sajek valley</h1>
                                    </button>
                                </div>
                                <div className="place-image-card">
                                    <button className="reset-button">
                                        <img src={require('./Sreemongol.png')} alt="" className="card-images" onClick={sreemongol} />
                                        <h1 className="card-title">Sreemongol</h1>
                                    </button>
                                </div>
                                <div className="place-image-card">
                                    <button className="reset-button">
                                        <img src={require('./sundorbon.png')} alt="" className="card-images" onClick={sundorbon}/>
                                        <h1 className="card-title">Sundorbon</h1>
                                    </button>
                                </div>
                            </> 
                        :
                        <div>
                                <div className="booking-card">
                                    <label htmlFor="destination">Destination:</label>
                                    <input type="text" className="inputs" id="destination" value={placeInfo.name} /> <br />
                                    <label htmlFor="origin">Origin:</label>
                                    <input type="text" className="inputs" id="origin" value='Dhaka' /> <br/>
                                    <label htmlFor="from" className='for-labels'>From</label>
                                    <label htmlFor="to" className='for-margin for-labels'>To</label>
                                    <br />
                                    <input type="date" className="for" id="from" />
                                    <input type="date" className="for ml-5" id="to" />
                                    <Link to={`/booking/${placeInfo.name}`}>
                                        <button className="start-booking-button">start booking</button>
                                    </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default display;