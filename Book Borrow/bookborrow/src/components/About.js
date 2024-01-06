import React from 'react';
import './About.css';  // Importing main CSS file

function About() {
  return (
    <div style={{ position: "relative" }}>
      
      <div className="SRDetails-box">  {/* Added MissionBox */}
        <h2>Study Room Details</h2>
        </div>

        <div className="SRReservation-box">  {/* Added MissionBox */}
        <h2>Study Room Resrvations</h2>
        </div>
        
        <div className="Bookdetails-box">  {/* Added MissionBox */}
        <h2>Books Details</h2>
        </div>

        <div className="BRdetails-box">  {/* Added MissionBox */}
        <h2>Books Reservation Details</h2>
        </div>

        <table>
  <thead>
    <tr>
      <th>Membership ID</th>
      <th>User Name</th>
      <th>Book Name</th>
      <th>Author</th>
      <th>Approval</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td> <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>


    <div class="table-container">
    <table>
    </table>
    </div>


    
    </div>
  );

}

export default About;