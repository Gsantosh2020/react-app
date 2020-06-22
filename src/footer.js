import React from 'react'
import FooterBlock from './FooterBlock'
import Fdata from './Fdata'
export default function Footer()
{
return <div className="row fb">

{Fdata.map((val) => { 
                  return (
                    <FooterBlock 
                        title={val.title}
                        link1={val.link1}
                        link2={val.link2}
                        link3={val.link3}
                        link4={val.link4}
                        link5={val.link5}
                  />
                 );
                  })} 


            
           
            </div>

}