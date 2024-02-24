'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ea15-202-12-97-197.ngrok-free.app/test', {
          withCredentials: true,
        });
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='text-center'>
      {employee && (<h1>Massage is: {employee.Massage}</h1>)}
    </div>
  )
}