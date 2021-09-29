import React from "react";
import './selection.styles.scss'



const Selection = ({handleClick, label, ...otherProps}) => (
    <div className='group'>
        <input type='checkbox' className='selection' 
        label={label}
        onClick={() => handleClick(label)}
        {...otherProps}/>
        {
            label ?
            <label 
                className={'form-input-label'}>

                {label}

            </label>
            : 
            null
        }


    </div>
);

export default Selection;
