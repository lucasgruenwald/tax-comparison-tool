import React from "react";
import './selection.styles.scss'

function addClass(label, handleClick) {

    var v = document.getElementById(label);

    if (v.className.includes("addCSS")){
        v.className = "selection"
    } else {
        v.className += ' addCSS'
    }

    // and pass along handleClick to app.js
    handleClick(label); 
}

const Selection = ({handleClick, label, ...otherProps}) => (
    <div className='group'>
        <input type='button' 
        className='selection' 
        id={label}
        label={label}
        onClick={() => addClass(label, handleClick)}
        {...otherProps}
        value={label}
        />
        


    </div>
);

export default Selection;
