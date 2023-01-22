import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'

const Addpost = () => {

  const[data,setData] = useState({
    UserId:"",
    Post:""
  })

  const displayPost =()=>{
    console.log(data.blogData)
    axios.post("http://localhost:3002/Addpost",data)
    .then((response)=>{
      console.log(response.data)
      if (response.data.Status=="Success") {
        alert("Successfully added the Post")
        setData(
          { UserId:"",
            Post:""}
        )
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
      <Navbar/>
    <div className="container">
       
    <div className="row">
    <h3 className='mt-4 text-center text-primary'>Add a new post</h3>
        <div className="border border-dark rounded p-5 g-4 g-4 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">

                  
    
                <div className=" col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">User Id</label>
                    <input type="text" className="form-control"
                    placeholder='Enter your User Id'
                    onChange={inputHandler}
                    value={data.UserId}
                    name='UserId' />
                </div>
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Post</label>
                    <textarea type="text" className="form-control" rows={5}
                    placeholder='Add your post here'
                    onChange={inputHandler}
                    value={data.Post}
                    name='Post' />
                </div>
    
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={displayPost} className="btn btn-success">Add post</button>
                </div>
    
                
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Addpost