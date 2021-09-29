import React from "react";
import './about-you.styles.scss'
import Selection from "../selection/selection.component";

const AboutYou = ({handleClick}) => (
    <div className='about-you'>
        <h2>Do any of these common scenarios apply to you?</h2>
        <div className='selections'>
            <Selection handleClick={handleClick} label='I am self employed'/>
            <Selection handleClick={handleClick} label='I like personal guidance'/>
            <Selection handleClick={handleClick} label='I invest in cryptocurrency'/>
            <Selection handleClick={handleClick} label='I bought or sold a house'/>
            <Selection handleClick={handleClick} label='I might need audit help'/>
        </div>
    </div>
);

export default AboutYou;
