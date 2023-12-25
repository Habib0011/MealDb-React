import React, { useEffect, useState } from 'react';
import './Meal.css'
import Item from '../Meal-item/Item';
import MealInfo from '../Meal-info/MealInfo';


const Meal = () => {
    const [meals,setMeals] = useState([])
    const [name,setName] = useState([])


useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res=>res.json())
    .then(data =>setMeals(data.meals))

},[])
const btnInfo = (meal) =>{
    setName(meal)
}
    return (
        <div className='main-container'>

            <div className='all-meal'>
            {
            meals.map(meal => <Item
                btnInfo ={btnInfo}
            meal ={meal}>    
            </Item>) 
            }
            </div>
            <div>
              <MealInfo
              name = {name}></MealInfo>

            </div>
           
            
        </div>
    );
};

export default Meal;