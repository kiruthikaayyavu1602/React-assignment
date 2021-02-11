import React from 'react';
import classes from './Person.module.css';

function Person(){
    return(
        <div className={classes.like}>
           <div className="cut"><h1>Glasses</h1><p>price 20.00</p></div>
           <div className="cut"><h1>Paintings</h1><p>price 20.00</p></div>
           <div className="cut"><h1>Craftings</h1><p>price 20.00</p></div>
           <div className="cut"><h1>Furniture</h1><p>price 20.00</p></div>
        </div>
        
        
    )
}

export default Person;