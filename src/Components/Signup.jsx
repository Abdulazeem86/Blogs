import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  
  const[data,setData] = useState(
    {Name:"",
     Address:"",
     phoneNumber:Number,
     emailAddress:"",
      userName:"",
      password:"",
      confirmPassword:"",
    })

  const signUpData =()=>{
    console.log(data)
    axios.post("http://localhost:3002/signup",data)
    .then((response)=>{
        console.log(response.data)
        if (response.data.Status=="Success") {
          alert("Successfully added the Employee")
          setData({Name:"",
          Address:"",
          phoneNumber:Number,
          emailAddress:"",
           userName:"",
           password:"",
           confirmPassword:"",
         })
        } else {
          alert("Error")
        }
      })
    .catch((err)=>{
      console.log(err)
    })
  }

    const inputHandler = (event)=>{
      const {name,value}=event.target 
      setData(
        (previousState)=>({
          ...previousState,
          [name]:value
        })
      )
    }

  return (
    <div>
    <div className="container">
    <form action="">
    <div className=" row justify-content-center g-3">
      <h3 className= "mt-4 text-center text-primary">User Registration</h3>
        <div className="border border-dark rounded p-5 g-4 col col-12 col-sm-12 col-md-8 col-lg-6 col-xl-6 col-xxl-6">
              <div className="row g-3 ">
                <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control"
                    placeholder='Enter your name' 
                    onChange={inputHandler}
                    value={data.Name} 
                    name="Name"/>
                </div>
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Address</label>
                <input type="text" className="form-control" 
                placeholder='Enter your address'
                value={data.Address} 
                name='Address'
                onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Phone number</label>
                <input type="text" className="form-control"
                placeholder='Enter your Phone number'
                value={data.phoneNumber} 
                name='phoneNumber'
                onChange={inputHandler} />
                </div>
    
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Email address</label>
                <input type="text" className="form-control"
                placeholder='Enter your email address' 
                value={data.emailAddress} 
                name='emailAddress'
                onChange={inputHandler}/>
                </div>
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Username</label>
                <input type="text" className="form-control" 
                placeholder='Enter a user name'
                value={data.userName} 
                name='userName'
                onChange={inputHandler} />
                </div>
    
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Password</label>
                <input type="text" className="form-control" 
                placeholder='Enter the password'
                value={data.password} 
                name='password'
                onChange={inputHandler}/>
                </div>
    
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Confirm password</label>
                <input type="text" className="form-control"
                placeholder='Re-enter the password'
                value={data.confirmPassword} 
                name='confirmPassword'
                onChange={inputHandler} />
                </div>
    
               
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={signUpData} className="btn btn-success">Signup</button>
                </div>
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href="/">Back to login</a>
                </div>
                </div>
            </div>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup