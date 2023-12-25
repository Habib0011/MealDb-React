import React from 'react';
import './Item.css'

const Item = (props) => {
    const {strMeal,idMeal,strMealThumb} = props.meal
    const btnInfo = props.btnInfo
    return (
        <div className='meal-item'>
         <div>
         <h2>Name:{strMeal}</h2>
            <p>Id:{idMeal}</p>
            <img src={strMealThumb} alt="" />
         </div>
         <button onClick={() => btnInfo(props.meal)} className='btn-details'>Details</button>
        </div>

    );
};

export default Item;
