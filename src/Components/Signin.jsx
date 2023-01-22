import React, { useState } from 'react'

const Signin = () => {

    const[data,setData] = useState({Username:"", Password:""})

  const displayData =()=>{
    console.log(data)
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
    <div className="row justify-content-center">
    <h3 className= "text-center text-primary mt-3">User Login</h3>
        <div className="border border-dark rounded p-5 g-4  col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className="form-control"
                        name='Username'
                        placeholder='Enter your username'
                        value={data.Username}
                        onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password"  id="" className="form-control" 
                        placeholder='Enter your password'
                        value={data.Password} 
                        name='Password'
                        onChange={inputHandler}
                         />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={displayData} className="btn btn-success">Login</button>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <a href="/Signup">New users click here</a>
        </div>
                </div>
            
        </div>
    </div>
   </div>
   </div>
  )
}

export default Signin