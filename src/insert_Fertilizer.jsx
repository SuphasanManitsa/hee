import React, { useState } from 'react';
import axios from 'axios';

const Fertilizer = () => {
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
            Warehouse_WarehouseId: "1",
            FertilizerName: "hee",
            FertilizerFormulaName: "0-0-0",
            FertilizerType: "pussy",
            FertilizerPrice: 1500,
            UnitName: "tad",
            FertilizerWeigth: 1,
            FertilizerPhoto: null,
        }
        
        const formData = new FormData();
        formData.append('Warehouse_WarehouseId', employeeJson.Warehouse_WarehouseId);
        formData.append('FertilizerName', employeeJson.FertilizerName);
        formData.append('FertilizerFormulaName', employeeJson.FertilizerFormulaName);
        formData.append('FertilizerType', employeeJson.FertilizerType);
        formData.append('FertilizerPrice', employeeJson.FertilizerPrice);
        formData.append('UnitName', employeeJson.UnitName);
        formData.append('FertilizerWeigth', employeeJson.FertilizerWeigth);
        formData.append('FertilizerPhoto', employeeData.image);
        

        // const employeeJson = {
        //     Warehouse_WarehouseId: "3",
        //     ChemicalName: "hee",
        //     ChemicalCommonName: "0-0-0",
        //     ChemicalType: "pussy",
        //     ChemicalIRAC: "ll",
        //     ChemicalPrice: 1500,
        //     UnitName: "tad",
        //     Chemicalweight: 1,
        //     ChemicalPhoto: null,
        // }

        // const formData = new FormData();
        // formData.append('Warehouse_WarehouseId', employeeJson.Warehouse_WarehouseId);
        // formData.append('ChemicalName', employeeJson.ChemicalName);
        // formData.append('ChemicalCommonName', employeeJson.ChemicalCommonName);
        // formData.append('ChemicalType', employeeJson.ChemicalType);
        // formData.append('ChemicalIRAC', employeeJson.ChemicalIRAC);
        // formData.append('ChemicalPrice', employeeJson.ChemicalPrice);
        // formData.append('UnitName', employeeJson.UnitName);
        // formData.append('Chemicalweight', employeeJson.Chemicalweight);
        // formData.append('ChemicalPhoto', employeeData.image);


        // const employeeJson = {
        //     Warehouse_WarehouseId: "1",
        //     OtherName: "hee",
        //     OtherType: "0-0-0",
        //     OtherSize: "pussy",
        //     OtherPrice: 1500,
        //     UnitName: "tad",
        //     OtherWeigth: 1,
        //     OtherPhoto: null,
        // }

        // const formData = new FormData();
        // formData.append('Warehouse_WarehouseId', employeeJson.Warehouse_WarehouseId);
        // formData.append('OtherName', employeeJson.OtherName);
        // formData.append('OtherType', employeeJson.OtherType);
        // formData.append('OtherSize', employeeJson.OtherSize);
        // formData.append('OtherPrice', employeeJson.OtherPrice);
        // formData.append('UnitName', employeeJson.UnitName);
        // formData.append('OtherWeigth', employeeJson.OtherWeigth);
        // formData.append('OtherPhoto', employeeData.image);

        try {
            // Use Axios to send both FormData and JSON
            const response = await axios.post('http://localhost:8080/admin/insert_fertilizer',
            // const response = await axios.post('http://localhost:8080/admin/insert_chemicals',
            // const response = await axios.post('http://localhost:8080/admin/insert_other',
                formData,
                {
                    headers: { 'Content-Type': 'multipart/form-data', },
                    withCredentials: true,
                });

            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>
                Name:
                <input type="text" name="name" value={employeeData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label>
                Position:
                <input type="text" name="position" value={employeeData.position} onChange={handleInputChange} />
            </label>
            <br /> */}
            <label>
                Image:
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Fertilizer;