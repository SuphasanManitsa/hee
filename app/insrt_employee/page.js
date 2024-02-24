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
      EmployeeEId: "E000000100",
      EmployeePId: "145096854096",
      EmployeeSalary: 99,
      EmployeeUsername: "Bunsub",
      EmployeePassword: "1234",
      EmployeeEmail: "asdasd",
      EmployeeBirthday: "10/12/2005",
      PersonFname: "Bunsub",
      PersonLname: "asdad",
      PersonPhone: "324324",
      RoleName: "admin",
      AddressZipcode: "42367",
      AddressProvince: "Cra34535ft03",
      AddressDistrict: "Craf7576t03",
      AddressSubdistrict: "234",
      Address: "12312",
      AddressMoo: "1",
      PersonPhoto: null,
    }

    const formData = new FormData();
    formData.append('Item_ItemId', employeeJson.Item_ItemId);

    formData.append('EmployeeEId', employeeJson.EmployeeEId);
    formData.append('EmployeePId', employeeJson.EmployeePId);
    formData.append('EmployeeSalary', employeeJson.EmployeeSalary);
    formData.append('EmployeeUsername', employeeJson.EmployeeUsername);
    formData.append('EmployeePassword', employeeJson.EmployeePassword);
    formData.append('EmployeeEmail', employeeJson.EmployeeEmail);
    formData.append('EmployeeBirthday', employeeJson.EmployeeBirthday);
    formData.append('PersonFname', employeeJson.PersonFname);
    formData.append('PersonLname', employeeJson.PersonLname);
    formData.append('PersonPhone', employeeJson.PersonPhone);
    formData.append('RoleName', employeeJson.RoleName);
    formData.append('AddressZipcode', employeeJson.AddressZipcode);
    formData.append('AddressProvince', employeeJson.AddressProvince);
    formData.append('AddressDistrict', employeeJson.AddressDistrict);
    formData.append('AddressSubdistrict', employeeJson.AddressSubdistrict);
    formData.append('Address', employeeJson.Address);
    formData.append('AddressMoo', employeeJson.AddressMoo);
    formData.append('PersonPhoto', employeeData.image);

    try {
      const response = await axios.post('http://localhost:8080/admin/insert_employee',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data', },
          withCredentials: true,
        });

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }

  }


  return (
    <div className='text-center'>
      <h1>InsertInsertEmployeeCraft</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <button type="submit" className='bg-orange-400 p-2 rounded-2xl'>Submit</button>
      </form>
    </div>
  )
}