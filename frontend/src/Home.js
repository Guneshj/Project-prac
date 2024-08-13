//import React from 'react'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Home() {
  const [event_name, setEvent_name] = useState('')
    const [details, setDetails] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event) {
      event.preventDefault();
      axios.post('http://localhost:8081/create', {event_name, details})
      .then(res => {
          console.log(res);
          navigate('/');
      }).catch(err => console.log(err));
  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
            <h2>Add Event</h2>
            <div className='mb-2'>
                <label htmlFor="">Event Name</label>
                <input type="text" placeholder='Enter Event_Name' className='form-control'
                onChange={e => setEvent_name(e.target.value)}
                />
                
            </div>
            <div className='mb-2'>
                <label htmlFor="">Details</label>
                <input type="text" placeholder='Enter Details' className='form-control'
                 onChange={e => setDetails(e.target.value)}
                />
            </div>
            <button className='btn btn-success'>Submit</button>
        </form>
    </div>
</div>
  )
}

export default Home