import React from 'react'
import Navbar from './Navbar'

const Viewallpost = () => {

  const allPost = [{"name":"Azeem","message":"Test message 1", "addedTime":"04-01-22 10:22pm"},
  {"name":"Feby","message":"Test message 2", "addedTime":"06-02-22 08:22pm"},
  {"name":"Nithin","message":"Test message 3", "addedTime":"10-01-22 10:22pm"},
  {"name":"Azeem","message":"Test message 4", "addedTime":"10-01-22 10:22pm"},
  {"name":"Babin","message":"Test message 5", "addedTime":"10-01-22 10:22pm"},
  {"name":"Kurian","message":"Test message 6", "addedTime":"10-01-22 10:22pm"},
  {"name":"Faheem","message":"Test message 7", "addedTime":"10-01-22 10:22pm"},
  {"name":"Azeem","message":"Test message 8", "addedTime":"10-01-22 10:22pm"},
  {"name":"Faheem","message":"Test message 9", "addedTime":"10-01-22 10:22pm"},
  {"name":"Nithin","message":"Test message 10", "addedTime":"10-01-22 10:22pm"}]

  return (
    <div><Navbar/>

   <div className="container">
    <div className="row">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <div className="row">
        <h3>All Posts</h3>
         {
          allPost.map(
            (value,index)=>{
              return  <div className="g-4 col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {value.name}
          </button> 
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          {value.message} <br></br>
          {value.addedTime}
          </div>
        </div>
      </div>
      
    </div>
    </div>
            }
          )

         }
        </div>
      </div>
    </div>
   </div>
   </div>
  )
}

export default Viewallpost