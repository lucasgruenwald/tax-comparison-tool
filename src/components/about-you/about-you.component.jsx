import React from "react";
import './about-you.styles.scss'
import Selection from "../selection/selection.component";

const AboutYou = ({handleClick}) => (
    <div className='about-you'>
        <h3>Do any of these apply?</h3>
        <div className='selections'>
            <Selection handleClick={handleClick} label='I want a pro to do my taxes'/>
            <Selection handleClick={handleClick} label='I might need audit assistance'/>
            <Selection handleClick={handleClick} label='I would like phone/chat support'/>
        </div>
    </div>
);

export default AboutYou;
