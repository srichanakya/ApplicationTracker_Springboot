import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import AppStats from './AppStats';
import MyInfo from './MyInfo';


export default function AllApplications() {

    const {id} = useParams();
    const [applicationdata, setApplicationdata] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        console.log("use effect")
        console.log(id);
        loaddata();
    }, [])


    const loaddata = async ()=>{

       const result = await axios.get("http://localhost:8080/applications/allapplications");
       setApplicationdata(result.data);
      
    }


  return (
    <div className='container mt-4'>

        <h3 className='text-center'>All Applications</h3>






{/* This is table start */}
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Job Title</th>
      <th scope="col">Company</th>
      <th scope="col">Role</th>
      <th scope="col">Applied On</th>
      <th scope="col">Referral</th>
      <th scope="col">Referral Person</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
      
    </tr>
  </thead>
  <tbody>
    {
        applicationdata.map((data, index)=>(
<tr >
      <td key={index}>{data.id}</td>
      <td>{data.jobtitle}</td>
      <td>{data.company}</td>
      <td>{data.role}</td>
      <td>{data.appliedon}</td>
      <td>{data.referral}</td>
      <td>{data.referralperson}</td>
      
      <td>{data.status}</td>
      <td>
        <Link className='btn btn-outline-primary' to={`/view/${data.id}`}>View</Link>

      </td>
    </tr>
        ))
    
}
  </tbody>
</table>


{/* Table end */}

    </div>
  )
}
