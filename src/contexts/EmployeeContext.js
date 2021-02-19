import React, {useState, createContext} from 'react';

export const EmployeeContext = createContext();

export const EmployeeProvider = (props) => {
    const [employee, setEmployees] = useState(JSON.parse(`[{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61","profile_image":""},{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63","profile_image":""}]`));
    return (
        <EmployeeContext.Provider value={[employee, setEmployees]}>
            {props.children}
        </EmployeeContext.Provider>
    )
}