import React from 'react';
import './Expenseitem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function Expenseitem(props) {

    let title=props.title;

    const clickHandler=()=>{
        title='updated!'
        console.log(title);
    };
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>  
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
}

export default Expenseitem;