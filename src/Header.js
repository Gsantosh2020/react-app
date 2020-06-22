import React from 'react'

import Update from './Update'
import Logo from './Logo';


export default function Header() {
return(
    <>
      <div className="hd">
            <Logo/>
           <div className="text-right"><Update/></div>  
           
        </div>
      
     </>   
    );
  
};