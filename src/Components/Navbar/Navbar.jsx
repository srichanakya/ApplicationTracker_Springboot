import React from 'react'

export default function Navbar() {
  return (
    <div >
     <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Job Application Tracker</a>

    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="btn btn-primary ms-2"  href="/dashboard">Dashboard</a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary ms-2"  href="/add">Add</a>
  </li>
  <li class="nav-item">
  <a class="btn btn-primary ms-2"  href="/find">Find</a>
  </li>
  
  <li class="nav-item">
  <a class="btn btn-primary ms-2"  href="/all">All Applications</a>
  </li>
</ul>
  </div>
</nav>
    </div>
  )
}
