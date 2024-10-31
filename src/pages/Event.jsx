import React, { useEffect, useState } from 'react';
import { getSingleEventAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';

const Event = () => {
  const [singleEvent,setSingleEvent] = useState("")
  const {id} = useParams()

  console.log(id);
  
  useEffect(()=>{
    getSingleEvent()
  },[])

  const getSingleEvent = async()=>{
    const result = await getSingleEventAPI(id)
    setSingleEvent(result.data);
  }
  console.log(singleEvent);
  
  return (
    <div style={{ paddingTop: '80px' }} className="container min-vh-100">
      <div className="row">
        <img 
          src={singleEvent.imageURL} 
          alt="Sunburn Festival Event" 
          className="img-fluid" 
          style={{ maxHeight: '50vh', objectFit: 'cover', width: '100%' }} 
        />
      </div>
      
      <div className="row mt-4">
        <h1>{singleEvent.title}</h1>
        
        <div className="d-flex justify-content-between mt-3 mb-3">
          <h4 className="fs-4 fw-bold">
            <i className="fa-regular fa-calendar me-2"></i>{singleEvent.date}
          </h4>
          <h4 className="fw-bold text-danger fs-5">
            <i className="fa-solid fa-location-dot me-2"></i>{singleEvent.location}
          </h4>
        </div>
        
        <h3 className="text-primary">Event Description:</h3>
        <p>
         {singleEvent.desc}
        </p>
      </div>
    </div>
  );
};

export default Event;
