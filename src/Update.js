import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'



const Update = () =>{

    const state = useState();

    const [count, setCount] =useState(0);

const IncNum = () => {
    setCount(count + 1)
    // console.log("clicked" + count++);
};
 return( 
 <>     
       
        <button className="btn btn-primary mr-5" onClick={IncNum}>Count</button>
        <span className="updcont" >{count}</span>
      
     </>
 );
};

export default Update
