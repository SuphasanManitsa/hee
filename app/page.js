'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Page() {
  const login = async () => {
    // Get username and password values from input elements
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;

    const response = await axios.post("http://localhost:8080/login",
      {
        username: username,
        password: password,
      }, {
      withCredentials: true
    });
    console.log(response.data);
  };

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/logout",
        {
          withCredentials: true
        });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/test', {
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
      <br />
      <br />
      <br />
      <Link href="/insert_craft" className='bg-orange-400 p-2 rounded-2xl'>InsertCraft</Link>
      <br />
      <br />
      <Link href="/insrt_employee" className='bg-orange-400 p-2 rounded-2xl'>InsrtEmployee</Link>
      <br />
      <br />
      <Link href="/insert_customer" className='bg-orange-400 p-2 rounded-2xl'>InsertCustomer</Link>
      <br />
      <br />
      <br />
      <br />
      <div className='bg-slate-500 p-3'>
        <h1>username :</h1>
        <input type="text" name="username" id="username" />
        <br />
        <br />
        <h1>password :</h1>
        <input type="password" name="password" id="password" />
        <br />
        <br />
        <button onClick={login} type="button" name="submit" className='bg-orange-400 p-2 rounded-2xl'>Login</button>
        <br />
        <br />
        <button onClick={logout} type="button" name="logout" className='bg-orange-400 p-2 rounded-2xl'>Logout</button>

      </div>
    </div>
  )
}