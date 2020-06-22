import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

export default function Nav()
{
return (
   
    <div className="nav-bar ">
            <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
             <Link to="/user">Users</Link>
            </li>
           
            
           
            </ul>
            
            </div>
            
           
)



}