import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddApplication() {



    let navigate = useNavigate();
    const [applicationdata, setApplicationData] = useState({
        jobtitle: "",
        role: "",
        company: "",
        appliedon: "",
        status:"",
        referral: "",
        referralperson: "",
        description:"",
        wheredidyoufind:"",
        username:"",
        password:""
    });

    const { jobtitle, role, company, appliedon, status, referral, referralperson, description, wheredidyoufind,username,password } = applicationdata;

    function dataEntered(e) {
        setApplicationData({ ...applicationdata, [e.target.name]: e.target.value });
    }

    const postData = async (e) =>{
        e.preventDefault();
        console.log(applicationdata);
        await axios.post("http://localhost:8080/applications/addapplications",applicationdata);
        navigate("/");
    }

    return (
        <div className='container mt-5 w-50'>
            <div className='mt-4 shadow p-4 border rounded'>
                <h2 className='text-center mb-4'>Add Application</h2>
                <form onSubmit={(e) => postData(e)}>
                    <div className='form-group mb-3'>
                        <label htmlFor='jobtitle'>Job Title</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='jobtitle' 
                            placeholder='Enter Job Title' 
                            name='jobtitle' 
                            value={jobtitle} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='company'>Company</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='company' 
                            placeholder='Enter Company' 
                            name='company' 
                            value={company} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        />
                    </div>


{/* Add username password description and source of find */}

<div className='form-group mb-3'>
    <label htmlFor='company'>Description (Optional)</label>
    <textarea 
        className='form-control' 
        id='description' 
        placeholder='Enter Description' 
        name='description' 
        value={description} 
        onChange={(e) => dataEntered(e)} 
        maxLength={500} 
        rows={5} 
        
    ></textarea>
</div>

<div className='form-group mb-3'>
                        <label htmlFor='whereDidYouFind'>Where Did I found this job</label>
                        <select 
                            className='form-select' 
                            id='wheredidyoufind' 
                            aria-label='Select Jobboard' 
                            name='wheredidyoufind' 
                            value={wheredidyoufind} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        >
                            <option value='' disabled>Select</option>
                            <option value='LinkedIn'>LinkedIn</option>
                            <option value='Indeed'>Indeed</option>
                            <option value='Monster'>Monster</option>
                            <option value='Careersite'>Careersite</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>



                    <div className='form-group mb-3'>
                        <label htmlFor='whereDidYouFind'>Username</label>
                        <select 
                            className='form-select' 
                            id='username' 
                            aria-label='Select Jobboard' 
                            name='username' 
                            value={username} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        >
                            {/* <option value='' disabled>Select</option> */}
                            <option value='srichanakyayennana@gmail.com'>srichanakyayennana@gmail.com</option>
                            <option value='srichanakyayennana@icloud.com'>srichanakyayennana@icloud.com</option>
                            <option value='srichanakyayennana@outlook.com'>srichanakyayennana@outlook.com</option>
                            {/* <option value='Careersite'>Careersite</option>
                            <option value='Other'>Other</option> */}
                        </select>
                    </div>



                    {/* <div className='form-group mb-3'>
                        <label htmlFor='company'>Username</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='username' 
                            placeholder='Enter Username' 
                            name='username' 
                            value={username} 
                            onChange={(e) => dataEntered(e)} 
                            
                        />
                    </div> */}

                    <div className='form-group mb-3'>
                        <label htmlFor='company'>Password</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='password' 
                            placeholder='Enter Password' 
                            name='password' 
                            value={password} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        />
                    </div>


{/* Add username password description and source of find */}
                    <div className='form-group mb-3'>
                        <label htmlFor='appliedon'>Applied On</label>
                        <input 
                            type='datetime-local' 
                            className='form-control' 
                            id='appliedon' 
                            name='appliedon' 
                            value={appliedon} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='role'>Role</label>
                        <select 
                            className='form-select' 
                            id='role' 
                            aria-label='Select Role' 
                            name='role' 
                            value={role} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        >
                            <option value='' disabled>Select Role</option>
                            <option value='FULLTIME'>FULLTIME</option>
                            <option value='INTERNSHIP'>INTERNSHIP</option>
                            <option value='CONTRACT'>CONTRACT</option>
                        </select>
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='role'>Status of the role</label>
                        <select 
                            className='form-select' 
                            id='status' 
                            aria-label='Status of the application' 
                            name='status' 
                            value={status} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        >
                            <option value='' disabled>Select Status</option>
                            <option value='APPLIED' >APPLIED</option>
                            <option value='REVIEWED'>REVIEWED</option>
                            <option value='INTERVIEW_SCHEDULED'>INTERVIEW_SCHEDULED</option>
                            <option value='INTERVIEWED'>INTERVIEWED</option>
                            <option value='SELECTED'>SELECTED</option>
                            <option value='OFFER_ACCEPTED'>OFFER_ACCEPTED</option>
                            <option value='OFFER_REJECTED'>OFFER_REJECTED</option>

                        </select>
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='referral'>Referral</label>
                        <select 
                            className='form-select' 
                            id='role' 
                            aria-label='Select Referral' 
                            name='referral' 
                            value={referral} 
                            onChange={(e) => dataEntered(e)} 
                            required
                        >
                            <option value='' disabled>Referral</option>
                            <option value='Yes'>Yes</option>
                            <option value='No'>No</option>
                           
                        </select>
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='referralperson'>Referral Person</label>
                        <input 
                            type='text' 
                            className='form-control' 
                            id='referralperson' 
                            placeholder='Enter Referral Person' 
                            name='referralperson' 
                            value={referralperson} 
                            onChange={(e) => dataEntered(e)} 
                            
                        />
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                </form>
            </div>
        </div>
    );
}
