import React from 'react'


export default function Santosh(props)
{
   
return ( 
<> 

<div className="abc col-xs-12 col-sm-6 col-lg-3">
        <div className="img-cont"> <img src={props.imgsrc} alt="abc" className="img-responsive" /></div>
        <div className="information">
        <div className="information-title" >{props.title}</div>
        <div className="information-desc">{props.desc}</div>
        <a href={props.links} >
        <button>watch now</button>
        </a>
        </div>
    </div>
    
   </>
)

}