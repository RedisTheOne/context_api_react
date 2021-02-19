import React, {useContext} from 'react';
import {  EmployeeContext  } from '../contexts/EmployeeContext';

const Employees = () => {
    const [employee, setEmployees] = useContext(EmployeeContext)
    return (
        <div>
            {employee.map((e, i) => (
                <h1 key={i}>{e.employee_name}</h1>
            ))}
            <button onClick={() => {
                fetch('http://dummy.restapiexample.com/api/v1/employees')
                    .then(res => res.json())
                    .then(d => setEmployees(d.data));
            }}>CHANGE</button>
        </div>
    )
}

export default Employees;