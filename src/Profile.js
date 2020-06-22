import React from 'react';
import { Table } from 'react-bootstrap';
import ProfileData from './ProfileData';

import PTdata from './PTdata'

export default function Profile()
{
return (
        <div>

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  
</Table>


<Table striped bordered hover size="sm">

  <tbody>
    <tr>
      <td>
        <ProfileData
                profileId={PTdata[0].profileId}
                profileFirstName={PTdata[0].profileFirstName}
                profileLastName={PTdata[0].profileLastName}
                profileUserName={PTdata[0].profileUserName}
        />
        <ProfileData
                profileId={PTdata[1].profileId}
                profileFirstName={PTdata[1].profileFirstName}
                profileLastName={PTdata[1].profileLastName}
                profileUserName={PTdata[1].profileUserName}
        />
          <ProfileData
                profileId={PTdata[2].profileId}
                profileFirstName={PTdata[2].profileFirstName}
                profileLastName={PTdata[2].profileLastName}
                profileUserName={PTdata[2].profileUserName}
        />
      </td>
    
    </tr>
    
    
  </tbody>
</Table>
        </div>

)

}