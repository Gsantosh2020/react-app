import React from 'react'
import { Table } from 'react-bootstrap'

export default function ProfileData(props)
{
return (
        <div>

<Table striped bordered hover size="sm">
  
  <tbody>
    <tr>
      <td>{props.profileId}</td>
      <td>{props.profileFirstName}</td>
      <td>{props.profileLastName}</td> 
      <td>{props.profileUserName}</td>
    </tr>
    
    
  </tbody>
</Table>
        </div>

)

}