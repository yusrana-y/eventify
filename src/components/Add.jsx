import React, { useContext, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addEventAPI } from '../services/allAPI';
import { addVideoResponseContext } from '../contexts/ShareContext';

const Add = () => {

  const {videoAddedResponse,setVideoAddedResponse} = useContext(addVideoResponseContext)
  const [eventDetails,setEventDetails] = useState({
    title:"",
    desc:"",
    location:"",
    date:"",
    imageURL:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false);
    setEventDetails({ title:"",
      desc:"",
      location:"",
      date:"",
      imageURL:""})
  }
  const handleShow = () => setShow(true);

  const handleAddEvent = async ()=>{
    console.log("Add Event button clicked") 
    const {title,desc,location,date,imageURL} = eventDetails
    if(title && desc && location && date && imageURL)
    {
      // console.log("proceed to api")
      const result = await addEventAPI(eventDetails)
      if(result.status>=200 && result.status<300)
      {
        alert(`${result.data.title} added succesfully`)
        handleClose()
        setVideoAddedResponse(result)
      }
      else
      {
        alert(result.data)
      }

    }
    else
    {
      alert("Please fill the Event details completely.")
    }
  }


  // console.log(eventDetails)
  
  return (
    <div className='container d-flex gap-3 justify-content-center my-3 text-primary'>
      <h3>Add your event</h3>
      <button className='btn bg-primary text-light' style={{ borderRadius: '50%' }} onClick={handleShow} > <i className="fa-solid fa-plus"></i> </button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'> Uploading Event Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border border-1 rounded p-3'>
            <FloatingLabel
              controlId="floatingInput"
              label="Event Title"
              className="mb-3"
            >
              <Form.Control  type="text" placeholder="Event Title" onChange={e=>{setEventDetails({...eventDetails,title:e.target.value})}}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Event Description"
              className="mb-3"
            >
              <Form.Control  type="text" placeholder="Event Description" onChange={e=>{setEventDetails({...eventDetails,desc:e.target.value})}}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Location"
              className="mb-3"
            >
              <Form.Control  type="text" placeholder="Location"onChange={e=>{setEventDetails({...eventDetails,location:e.target.value})}} />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Date"
              className="mb-3"
              
            >
              <Form.Control  type="date" placeholder="Date" onChange={e=>{setEventDetails({...eventDetails,date:e.target.value})}}/>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Event Image URL"
              className="mb-3"
            >
              <Form.Control  type="text" placeholder="Image URL" onChange={e=>{setEventDetails({...eventDetails,imageURL:e.target.value})}} />
            </FloatingLabel>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary"  onClick={handleAddEvent}>
            Add Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add
