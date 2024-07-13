import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindApplication = () => {
  const [applications, setApplications] = useState([]);
  const [filters, setFilters] = useState({ jobtitle: '', role: '', company: '' });

  const fetchApplications = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(`http://localhost:8080/applications/find`, { params: filters });
      setApplications(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setFilters({ ...filters, role: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'APPLIED':
        return '#b0c4de'; // Light Steel Blue

      case 'REVIEWED':
        return '#f0e68c'; // Khaki

      case 'INTERVIEW_SCHEDULED':
        return '#e6e6fa'; // Lavender

      case 'INTERVIEWED':
        return '#90ee90'; // Light Green

      case 'SELECTED':
        return '#add8e6'; // Light Blue

      case 'OFFER_ACCEPTED':
        return '#98fb98'; // Pale Green

      case 'OFFER_REJECTED':
        return '#ffb6c1'; // Light Pink

      case 'REJECTED':
        return 'red'; // Red for REJECTED status

      default:
        return ''; // Default color
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Applications</h1>

      <div className="row mb-3">
        <div className="col-md-6"> {/* Increase the width by changing col-md-4 to col-md-6 */}
          <form onSubmit={(e) => fetchApplications(e)} className="d-flex">
            <input
              type="text"
              name="jobtitle"
              className="form-control me-2"
              placeholder="Search by Job Title"
              value={filters.jobtitle}
              onChange={handleInputChange}
            />
            <select
              name="role"
              className="form-select me-2"
              value={filters.role}
              onChange={handleRoleChange}
            >
              <option value="">Select Role</option>
              <option value="INTERNSHIP">Intern</option>
              <option value="FULLTIME">Full time</option>
              <option value="CONTRACT">Contract</option>
              {/* Add more options as needed */}
            </select>
            <input
              type="text"
              name="company"
              className="form-control me-2"
              placeholder="Search by Company"
              value={filters.company}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-success">Search</button>
          </form>
        </div>
      </div>

      <div className='table-responsive'>
        <table className='table border shadow'>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Role</th>
              <th>Company</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.jobtitle}</td>
                <td>{app.role}</td>
                <td>{app.company}</td>
                <td style={{ color: getStatusColor(app.status), fontWeight: 'bolder' }}>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FindApplication;
