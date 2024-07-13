import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AppStats() {
  const [statusCounts, setStatusCounts] = useState([]);
  const [jobCounts, setJobCounts] = useState([]);

  useEffect(() => {
    fetchStatusCounts();
    fetchData();
  }, []);

  const fetchStatusCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/applications/countByStatus');
      setStatusCounts(response.data);
    } catch (error) {
      console.error('Error fetching status counts:', error);
    }
  };

  const fetchData = async () =>{
    try {
      const response = await axios.get('http://localhost:8080/applications/filterbydate');
      setJobCounts(response.data);
    } catch (error) {
      console.error('Error fetching job counts:', error);
    }
  }
  return (
    <div className="container mt-5">
      <h1>Application Status</h1>
      <table className="table table-bordered w-100">
        <thead>
          <tr>
            <th>Status</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {statusCounts.map((statusCount) => (
            <tr key={statusCount.status}>
              <td>{statusCount.status}</td>
              <td>{statusCount.count}</td>
            </tr>
          ))}
        </tbody>
      </table>




      <div className="container mt-5">
      <h1>Jobs Applied</h1>
   <table className='table table-bordered w-100'>
    <thead>
      <tr>
        <th>Date</th>
        <th>No.of Applications</th>
      </tr>
    </thead>
    <tbody>
        {jobCounts.map((item, index) => (
          <tr key={index}>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
          </tr>
        ))}
        </tbody>
    </table>
    </div>




    </div>
  );
}
