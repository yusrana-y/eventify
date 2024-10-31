import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { deleteSingleEventAPI } from '../services/allAPI';
import { deleteVideoResponseContext } from '../contexts/ShareContext';


const EventCard = ({displayData}) => {
  const { videoDeleteResponse, setVideoDeleteResponse }= useContext(deleteVideoResponseContext)

  const handleDelete = async(eventId)=>{
    console.log(`delete clicked from ${eventId}`);
    //api call
    const result = await deleteSingleEventAPI(eventId)
    setVideoDeleteResponse(result)
  }
  return (
    <div>
      <div className="d-flex flex-wrap align-items-center border border-primary p-2 mt-2 rounded justify-content-between text-primary">
        <img
          style={{ maxWidth: '100%', height: 'auto', width: '250px', objectFit: 'cover' }}
          src={displayData?.imageURL}
          alt="Event image"
          className='rounded'
        />
        <div className="flex-grow-1 ms-3">
          <h3>{displayData?.title}</h3>
          <h4 className="fs-4 fw-bold"><i className="fa-regular fa-calendar me-2"></i>{displayData?.date}</h4>
          <h4 className="fw-bold text-danger fs-5"><i className="fa-solid fa-location-dot me-2" ></i>{displayData?.location}</h4>
        </div>
        <div>
          <Link  className="btn bg-light rounded text-primary fw-bolder ms-3" to={`/event/${displayData?.id}`} >Details</Link>
          <button type='button'  className="btn bg-light rounded text-primary fw-bolder ms-3" onClick={()=>handleDelete(displayData?.id)} >Delete</button>
        </div>
      </div>


    </div>
  )
}

export default EventCard
