import React, { useState } from 'react';
import Add from '../components/Add';
import View from '../components/View';


const Home = () => {
  const [videoAddedResponse,setVideoAddedResponse] = useState("")
  return (
    <div className="d-flex flex-column min-vh-100" style={{ paddingTop: '80px' }}>
      <div className="container flex-grow-1">
        <div className="row mt-3 fw-bolder text-primary text-center">
          <h1>Upcoming Events</h1>
        </div>
        <View videoAddedResponse={videoAddedResponse} />
        <Add setVideoAddedResponse={setVideoAddedResponse} />
      </div>
    </div>
  );
};

export default Home;
