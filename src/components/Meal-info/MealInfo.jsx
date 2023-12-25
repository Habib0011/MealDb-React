import React from 'react';
import './MealInfo.css'

const MealInfo = (props) => {
    const {strInstructions,strMeal} = props.name
    return (
        <div className='meal-info'>
              <h2>meal info</h2>
              <h2>name:{strMeal}</h2>
              <p>Instruction:{strInstructions}</p>
        </div>
    );
};

export default MealInfo;