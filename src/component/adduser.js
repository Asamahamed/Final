import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Adduser() {
let nav=useNavigate()

    //addd user function
    const [user,setUser] =useState({

      DrugName :" ",
      Manufacturer:" ",
      Supplier: " " ,
      NDC :" " ,
      Expritiondate : " ",
      Quantity : " ",
      UnitPrice : " " ,
      


    });
   
    const {  DrugName, Manufacturer, Supplier,  NDC,   Expritiondate, Quantity ,  UnitPrice }=user

// after that create the event call

const onInputChange=(e)=>
{
  setUser({...user, [e.target.name] :e.target.value});
}
  
//Add data into data base from add employee table 

const onSubmit =async (e) =>
{
   e.preventDefault();
   await axios.post("http://localhost:8080/user",user)

   nav("/")
};




//-------------------------------
   




    return (
    <div className='cotainer'>
      
      <div className='row'>
      <div className='col-md-6 offset-md-3 border roumded p-4 mt-2 shadow'>
        
        <h2 className='text-center'> Register User</h2>

        <form onSubmit={(e)=>onSubmit(e)}> 

<div className='mr-3  text-center'  >
<label htmlFor='name' className='form-lable'>Drug Name</label>
<input type={"text" } className ="form-control" placeholder='Enter your Drugname' 
name='username'
value={DrugName}
 onChange={(e) =>onInputChange(e)}
 
 />

</div>

<div className='mr-3  text-center'>
<label htmlFor='manufactor' className='form-lable'> Manufacturer</label>
<input type={"text" } className ="form-control" placeholder='Enter  your manufactor name' 
name='manufactor'  
value={ Manufacturer}
onChange={(e) =>onInputChange(e)}
/>
</div>  


<div className='mr-3  text-center'>
<label htmlFor='suplier' className='form-lable'>Supplier</label>
<input type={"text" } className ="form-control" placeholder='Suplier'
name='suplier' 
value={Supplier} 

onChange={(e) =>onInputChange(e)}
/>

</div>


<div className='mr-3  text-center'>
<label htmlFor='NDC' className='form-lable'>NDC</label>
<input type={"text" } className ="form-control" placeholder='NDC'
name='NDC' 
value={NDC} 

onChange={(e) =>onInputChange(e)}
/>
</div>

<div className='mr-3  text-center'>
<label htmlFor='Expritiondate ' className='form-lable'>Expritiondate </label>
<input type={"text" } className ="form-control" placeholder='Enter your Gmail'
name='Expritiondate ' 
value={Expritiondate } 

onChange={(e) =>onInputChange(e)}
/>

</div>

<div className='mr-3  text-center'>
<label htmlFor=' Quantity ' className='form-lable'> Quantity </label>
<input type={"text" } className ="form-control" placeholder='Enter your Gmail'
name='Quantity' 
value={ Quantity } 

onChange={(e) =>onInputChange(e)}
/>

</div>


<div className='mr-3  text-center'>
<label htmlFor='UnitPrice' className='form-lable'>UnitPrice</label>
<input type={"text" } className ="form-control" placeholder='UnitPrice'
name='UnitPrice' 
value={UnitPrice} 

onChange={(e) =>onInputChange(e)}
/>

</div>


<button type='submit' className='btn btn-outline-primary'>Submit</button>  
<Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link >


</form>
    </div>

    </div>

    </div>
  )
}
