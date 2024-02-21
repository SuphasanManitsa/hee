import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
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

        // Create JSON data for employee
        const employeeJson = {
            Address: "266",
            AddressDistrict: "Khammuang",
            AddressMoo: "1",
            AddressProvince: "Kalasin",
            AddressSubdistrict: "Thongklong",
            AddressZipcode: "46180",
            EmployeeBirthday: "17/10/2003",
            EmployeeEId: "3",
            EmployeeEmail: "hjhgj.m@kkumail.com",
            EmployeePassword: "aqwdwer123",
            EmployeeSalary: 9999,
            EmployeeUsername: "Bunsub",
            PersonFname: "Bunsub",
            PersonId: "1468300057683",
            PersonLname: "Daicum",
            PersonPhone: "0944446969",
            RoleName: "admin",
            image: null,
          }

        // Create FormData for image
        const formData = new FormData();
        formData.append('Address',employeeJson.Address);
        formData.append('AddressDistrict',employeeJson.AddressDistrict);
        formData.append('AddressMoo',employeeJson.AddressMoo);
        formData.append('AddressProvince',employeeJson.AddressProvince);
        formData.append('AddressSubdistrict',employeeJson.AddressSubdistrict);
        formData.append('AddressZipcode',employeeJson.AddressZipcode);
        formData.append('EmployeeBirthday',employeeJson.EmployeeBirthday);
        formData.append('EmployeeEId',employeeJson.EmployeeEId);
        formData.append('EmployeeEmail',employeeJson.EmployeeEmail);
        formData.append('EmployeePassword',employeeJson.EmployeePassword);
        formData.append('EmployeeSalary',employeeJson.EmployeeSalary);
        formData.append('EmployeeUsername',employeeJson.EmployeeUsername);
        formData.append('PersonFname',employeeJson.PersonFname);
        formData.append('PersonId',employeeJson.PersonId);
        formData.append('PersonLname',employeeJson.PersonLname);
        formData.append('PersonPhone',employeeJson.PersonPhone);
        formData.append('RoleName',employeeJson.RoleName);
        formData.append('image', employeeData.image);

        try {
            // Use Axios to send both FormData and JSON
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

export default Upload;













// const url = 'http://localhost:8080/admin/go'



// import React from 'react';
// import axios from 'axios';

// const Upload = () => {
//   const toBase64 = (file) => new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

//   const UploadImage = async () => {
//     const getimage = document.querySelector('input[name=image]');
//     const image = await toBase64(getimage);
//     console.log("hhhhh",image);
//     const response = await axios.post("http://localhost:8080/admin/go",
//     {
//       image,
//     },
//     {
//       withCredentials: true
//     }
//     );
//     console.log("hhhhh",image);
//     console.log(response.data);
//   };

//   return (
//     <>
//       <input type="file" name="image" id="image" />
//       <button onClick={UploadImage} type="button" name="logout">Logout</button>
//     </>
//   );
// };

// export default Upload;


// import React, { useState } from 'react';
// import axios from 'axios';
// const Upload = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       const arrayBuffer = reader.result;
//       const bytes = new Uint8Array(arrayBuffer);

//       setImage(bytes);
//     };

//     reader.readAsArrayBuffer(file);
//   };

//   const handleSubmit = () => {
//     const formData = new FormData();
//     formData.append('image', image);
//     console.log("pp", image);
//     axios.post(url, formData, { withCredentials: true, })
//       .then(response => {
//         console.log(response.data.url);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     console.log("pp", image);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Upload;