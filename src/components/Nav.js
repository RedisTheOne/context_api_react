import React, {useContext} from 'react';
import {  EmployeeContext  } from '../contexts/EmployeeContext';

const Nav = () => {
    const [employee] = useContext(EmployeeContext)
    return (
        <div>
            <h1>Employees: {employee.length}</h1>
            <br /><hr /><br />
        </div>
    )
}

export default Nav;