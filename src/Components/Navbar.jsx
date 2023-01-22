import React from 'react'


const Navbar = () => {
  return (
    <nav class=" navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">Blogs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./addpost">Add new post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./viewmypost">View my post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./viewallpost">View all posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="./viewmyprofile">View my profile</a>
        </li>
              </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar