import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

export default function ViewApplication() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [applicationdata, setApplicationData] = useState({});

    useEffect(() => {
        loadAppData();
    }, []); // Adding an empty dependency array to run the effect only once

    const loadAppData = async () => {
        console.log(id);
        const result = await axios.get(`http://localhost:8080/applications/viewapplication/${id}`);
        setApplicationData(result.data);
        console.log(result.data);
    };


     async function deleteApp(){
       const confirm = window.confirm("Do you want to delete");
       if(confirm){
       await axios.delete(`http://localhost:8080/applications/deleteapplication/${id}`);
       navigate('/');
       }
       else{
        navigate(`/update/${applicationdata.id}`);
       }
    //    await axios.delete(`http://localhost:8080/applications/deleteapplication/${id}`);
    }

    return (
        <div className='container mt-5 mb-5 w-50 p-5 shadow'>
            <h2 className='mb-4'>Application Details</h2>

            <div className='form-group mb-3'>
                <label>Job Title</label>
                <input type='text' className='form-control' value={applicationdata.jobtitle || ''} disabled />
            </div>

            <div className='form-group mb-3'>
                <label>Company</label>
                <input type='text' className='form-control' value={applicationdata.company || ''} disabled />
            </div>

            <div className='form-group mb-3'>
                <label>Role</label>
                <input type='text' className='form-control' value={applicationdata.role || ''} disabled />
            </div>


            <div className='form-group mb-3'>
                <label>Where Did I Found This Position</label>
                <input type='text' className='form-control' value={applicationdata.wheredidyoufind || ''} disabled />
            </div>
            

            <div className='form-group mb-3'>
                <label>Status</label>
                <input type='text' className='form-control' value={applicationdata.status || ''} disabled />
            </div>

            <div className='form-group mb-3'>
                <label>Applied On</label>
                <input type='text' className='form-control' value={applicationdata.appliedon || ''} disabled />
            </div>

            <div className='form-group mb-3'>
                <label>Referral</label>
                <input type='text' className='form-control' value={applicationdata.referral || ''} disabled />
            </div>

            <div className='form-group mb-3'>
                <label>Referral Person</label>
                <input type='text' className='form-control' value={applicationdata.referralperson || ''} disabled />
            </div>


            <Link className="btn btn-outline-success me-2" to={`/update/${applicationdata.id}`}>Update Application</Link>
            <button className="btn btn-outline-danger me-2" onClick={deleteApp}>Delete Application</button>
            <Link className='btn btn-warning me-2' to={`/all`}>Back</Link>
        </div>
    );
}
