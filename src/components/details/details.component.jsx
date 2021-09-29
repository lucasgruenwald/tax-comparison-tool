import React from "react";
import './details.styles.scss'

// let SmartTaxSelections = {

// }

// newLi = <li style={{color:'blue'}}>Live phone/chat support to help you file</li>

// greenSupport(selections){
//     if(selections['I would like phone/chat support']){
//         newLi = <li style={{color:'green'}}>Live phone/chat support to help you file</li>
//     } else {
//         newLi = <li style={{color:'blue'}}>Live phone/chat support to help you file</li>
//     }
// }
    


const Details = ({selections}) => (
    <div className='details'>
        {/* Details! */}
        {/* <div className='product-image'/>
        <div className='product-image'/>
        <div className='product-image'/> */}
        <div>
            <h1>SmartTax</h1>
            <ul>
                <li>Tax software you can log in to and use anywhere</li>
                <li>Online explanations so you can file accurately</li>
                <li>Three simple steps: prep, save and e-file</li>
                <li>details details details details details detils</li>
                <li>details details details details details detils</li>
                <li>details details details details details detils</li>
                <li>$17 + state filing</li>
            </ul>
        </div>
        <div>
            <h1>SmartTax Pro</h1>
            <ul>
                <p>All of the features included in SmartTax and:</p>
                <li className={selections['I would like phone/chat support'].toString()}>Live phone/chat support to help you file</li>
                <li className={selections['I might need audit assistance'].toString()}>Audit Assistance for three full years</li>
                <li>A FREE financial coaching session after you file ($200+ value)!</li>
                <li>details details details details details detils</li>
                <li>details details details details details detils</li>
                <li>$37 + state filing</li>
            </ul>
            {/* <p>support requested: {selections['I would like phone/chat support'].toString()}</p>
            <div className='audit-help'>Audit Help (turn me green)</div> */}
        </div>
        <div>
            <h1>ELP Tax Pro</h1>
            <ul>
                <p>Qualified tax advisors</p>
                <li className={selections['I want a pro to do my taxes'].toString()}>A Ramsey Trusted pro completes your tax return</li>
                <li>Fully vetted and coached by the Ramsey team</li>
                <li>A FREE financial coaching session after you file ($200+ value)!</li>
                <li>details details details details details detils</li>
                <li>details details details details details detils</li>
                <li>Something about pricing?</li>
            </ul>
            {/* <p>support requested: {selections['I would like phone/chat support'].toString()}</p>
            <div className='audit-help'>Audit Help (turn me green)</div> */}
        </div>
    </div>
);

export default Details;
