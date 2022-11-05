import React from 'react';
import team from '../data/team';
import "./Employees.scss";
import TicketCounter from "./TicketCounter"

const Employees = (props) => {
  

    const employeeJSX = props.empArr.map((emp) => (
        <div className="card">
            <h2 className="card__emp-name">{emp.name}</h2>
            <h3 className="card__emp-role">{emp.role}</h3>
            <TicketCounter />
        </div>
    ));

    return (
        <>
            {employeeJSX}
        </>
    )
}

export default Employees