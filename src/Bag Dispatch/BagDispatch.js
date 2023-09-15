import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Table } from "react-bootstrap";
import Sidebar from '../components/Sidebar';

function BagDispatch() {

  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState([]);


  useEffect(function () {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .then(error => console.log(error));
  }, []);

  const onChange = (e) => {
    

    //to fetch the data from API
   const userid= e.target.value;
    // alert(e.target.value);
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}` )
      .then((response) => setSingleUser(response.data))
      .then(error => console.log(error));
  };

  return (
    <div>
      <Sidebar />
      <select className="form-control col-md-3" onChange={onChange}>
        <option value="default">--Select User--</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option >
        ))}
      </select >
      <br />
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <td> ID </td>
            <td> Name </td>
            <td> User Name </td>
            <td> E-mail </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> {singleUser.id}</td>
            <td> {singleUser.name}</td>
            <td> {singleUser.username}</td>
            <td> {singleUser.email}</td>
          </tr>
        </tbody>

      </Table>
    </div>
  );
}



export default BagDispatch;