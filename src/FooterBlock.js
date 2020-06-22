import React from 'react'


export default function FooterBlock(props)
{
   
return ( 
<> 

 <div className="col-xs-12 col-sm-3 col-lg-3">
        
        <div className="information">
        <div className="information-title" >{props.title}</div>
        <ul className="list-unstyled">
            <li>{props.link1}</li>
            <li>{props.link2}</li>
            <li>{props.link3}</li>
            <li>{props.link4}</li>
            <li>{props.link5}</li>
        </ul>
        </div>
    </div> 


    
   </>
)

}