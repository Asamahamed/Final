import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function Home()  {

    const [emp ,setEmp] =useState([])


    const {id} =useParams()

  useEffect(()=>{
    loadUser();
  },[]);

const loadUser = async() =>
{
    const result=await axios.get("http://localhost:8080/users")
    setEmp(result.data);

}

// delete record 

const deleteUser= async (id) =>

{
 await axios.delete(`http://localhost:8080/user/${id}`)
 loadUser()
}


  return (
    <div className='comtainer'>
 <div className='py-4'>

 <table className="table border=1 shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">DrugName</th>
      <th scope="col">Manufacturer</th>
      <th scope="col">Supplier</th>
      <th scope="col">NDC</th>
      <th scope="col">Expritiondate</th>
      <th scope="col">Quantity</th>
      <th scope="col">UnitPrice</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
     {/* get data coding to the table */}
     {
        emp.map((user,index) =>(

            <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.DrugName}</td>
            <td>{user.Manufacturer}</td>
            <td>{user.Supplier}</td>
            <td>{user.NDC}</td>
            <td>{user.Expritiondate}</td>
            <td>{user.Quantity}</td>
            <td>{user.UnitPrice}</td>
            <td>{user.Action}</td>

            <td>
            <button className='btn  btn-primary mx-2'>View</button>
            <Link className='btn  btn-outline-primary mx-2'
             to={`/edituser/${user.id}`}>
              
              Edit</Link>
            <button className='btn  btn-danger mx-2'
            onClick={()=>deleteUser(user.id) }
            
            >Delete</button>

           
            </td>

          </tr>

        )


        )
     }

 {/* emd emp file */}
     
    
    
  </tbody>
</table>

 </div>



    </div>



  )
}
