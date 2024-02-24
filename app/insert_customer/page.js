'use client'
import React, { useState } from 'react';
import axios from 'axios';

export default function Page() {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    position: '',
    image: null,
  });
  const handleImageChange = (e) => {
    setEmployeeData({
      ...employeeData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeJson = {
      CustomerId: "C000000001",
      CustomerType: "เสียภาษี",
      AddressZipcode: "46180",
      AddressProvince: "hgf",
      AddressDistrict: "wer",
      AddressSubdistrict: "dsf",
      Address: "1",
      AddressMoo: "11",
      PersonFname: "wer",
      PersonLname: "ssed",
      PersonPhone: "fdgdfg",
      PersonPhoto: null,
    }

    const formData = new FormData();
    formData.append('CustomerId', employeeJson.CustomerId);
    formData.append('CustomerType', employeeJson.CustomerType);
    formData.append('AddressZipcode', employeeJson.AddressZipcode);
    formData.append('AddressProvince', employeeJson.AddressProvince);
    formData.append('AddressDistrict', employeeJson.AddressDistrict);
    formData.append('AddressSubdistrict', employeeJson.AddressSubdistrict);
    formData.append('Address', employeeJson.Address);
    formData.append('AddressMoo', employeeJson.AddressMoo);
    formData.append('PersonFname', employeeJson.PersonFname);
    formData.append('PersonLname', employeeJson.PersonLname);
    formData.append('PersonPhone', employeeJson.PersonPhone);
    formData.append('PersonPhoto', employeeData.image);


    try {
      // Use Axios to send both FormData and JSON
      const response = await axios.post('http://localhost:8080/admin/insert_customer',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data', },
          withCredentials: true,
        });

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

    try {
      // Use Axios to send both FormData and JSON
      const response = await axios.post('http://localhost:8080/admin/insert_tax',
        {
          TaxId: "C01",
          TaxName: "dfgdg",
          TaxIdentificationNumber: "23424",
          TaxPersonNumber: "2434",
        },
        {
          withCredentials: true,
        }
      );

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

  }


  return (
    <div className='text-center'>
      <h1>InsertCustomer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <button type="submit" className='bg-orange-400 p-2 rounded-2xl'>Submit</button>
      </form>
    </div>
  )
}