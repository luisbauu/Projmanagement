import React, {Fragment, useEffect, useState} from 'react';

const ListCustomer = () =>
{
    const [list,setList] = useState([]);

    const GetListCustomer = async () =>
    {
        try {
            const response = await fetch('http://localhost:5000/customer');
            const jsonData = await response.json();

            setList(jsonData);

        } catch (error) {
            console.log(error.message);
        }
    }
    
    console.log(list);

    useEffect(() =>{
        GetListCustomer();
    } ,[]);
    return (<Fragment>
    <table className="table table-bordered mt-5 text-center">
        <thead>
        <tr>
            <th>Customer No.</th>
            <th>Surname</th>
            <th>Given Name</th>
            <th>Unit No.</th>
            <th>Street</th>
            <th>City</th>
            <th>Phone Number</th>
            <th>Represented</th>
            <th>Rep Name</th>
        </tr>
        </thead>
        <tbody>
        {list.map(tolist =>(
           <tr>
               <td>{tolist.customer_no}</td>
               <td>{tolist.surname}</td>
               <td>{tolist.givenname}</td>
               <td>{tolist.unit_no}</td>
               <td>{tolist.street}</td>
               <td>{tolist.city}</td>
               <td>{tolist.phone_no}</td>
               <td>{tolist.represented}</td>
               <td>{tolist.repname}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </Fragment>)
};

export default ListCustomer;
