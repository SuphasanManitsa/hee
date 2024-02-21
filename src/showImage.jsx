
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ShowImage = () => {
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/select_employee', {
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
    <div>
      {employee && (
        <>
          <h1>Hello World!!</h1>
          <p>EmployeeEId: {employee.EmployeeEId}</p>
          <p>EmployeeSalary: {employee.EmployeeSalary}</p>
          <p>PersonFname: {employee.PersonFname}</p>
          <p>PersonLname: {employee.PersonLname}</p>
          <p>EmployeeUsername: {employee.EmployeeUsername}</p>
          <p>RoleName: {employee.RoleName}</p>
          <p>EmployeeEmail: {employee.EmployeeEmail}</p>
          <p>PersonPhone: {employee.PersonPhone}</p>
          <p>PersonProfile:
            {employee.PersonProfile && (
              <img
                src={`data:image/jpeg;base64,${employee.PersonProfile}`}
                alt="Profile"
                style={{ maxWidth: '200px' }}
              />
            )}
          </p>
        </>
      )}
    </div>
  );
};

export default ShowImage;
