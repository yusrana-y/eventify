import React, { useContext, useEffect, useState } from 'react'
import EventCard from './EventCard'
import { getAllEventsAPI } from '../services/allAPI'
import { addVideoResponseContext, deleteVideoResponseContext } from '../contexts/ShareContext'

const View = () => {
  const {videoAddedResponse,setVideoAddedResponse} = useContext(addVideoResponseContext)
  const { videoDeleteResponse, setVideoDeleteResponse } = useContext(deleteVideoResponseContext)

  const [allEvents,setAllEvents] = useState([])
  useEffect(()=>{
    getAllEvents()
  },[videoAddedResponse,videoDeleteResponse])

  const getAllEvents = async ()=>{
    //api call to get all the events
    const result = await getAllEventsAPI()
  setAllEvents(result.data)    
  }
  console.log(allEvents);
  
  return (
    <>
   
  { allEvents?.length>0 ?
    allEvents?.map(event=>(
      <div className="row">
      <div className="col-lg-1"></div>
       <div className="col-lg-10"><EventCard displayData={event} /></div>
       <div className="col-lg-1"></div>
       </div>
    ))
  :
  <div className='text-center fw-bolder text-primary'>No Events. Why don't you come back later?!</div> }
   </>
  )
}

export default View
