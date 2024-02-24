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
      Item_ItemId: "Craft03",
      Craft_fertilizerName: "puy kuy",
      Craft_fertilizerFormulaName: "80-80-80",
      Craft_fertilizerType: "Craft",
      Craft_fertilizerPrice: 5000,
      UnitName: "kg",
      Craft_fertilizerWeigth: 200,
      ItemPhoto: null,
      MotherFer1: "puy yai",
      WeigthFer1: 70,
      MotherFer2: "puy leg",
      WeigthFer2: 70,
      MotherFer3: "puy medaim",
      WeigthFer3: 60,
    }

    const formData = new FormData();
    formData.append('Item_ItemId', employeeJson.Item_ItemId);
    formData.append('Craft_fertilizerName', employeeJson.Craft_fertilizerName);
    formData.append('Craft_fertilizerFormulaName', employeeJson.Craft_fertilizerFormulaName);
    formData.append('Craft_fertilizerType', employeeJson.Craft_fertilizerType);
    formData.append('Craft_fertilizerPrice', employeeJson.Craft_fertilizerPrice);
    formData.append('UnitName', employeeJson.UnitName);
    formData.append('Craft_fertilizerWeigth', employeeJson.Craft_fertilizerWeigth);
    formData.append('ItemPhoto', employeeData.image);
    formData.append('MotherFer1', employeeJson.MotherFer1);
    formData.append('WeigthFer1', employeeJson.WeigthFer1);
    formData.append('MotherFer2', employeeJson.MotherFer2);
    formData.append('WeigthFer2', employeeJson.WeigthFer2);
    formData.append('MotherFer3', employeeJson.MotherFer3);
    formData.append('WeigthFer3', employeeJson.WeigthFer3);

    try {
      // Use Axios to send both FormData and JSON
      const response = await axios.post('http://localhost:8080/admin/create_craft',
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
      <h1>InsertCraft</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
        <button type="submit" className='bg-orange-400 p-2 rounded-2xl'>Submit</button>
      </form>
    </div>
  )
}