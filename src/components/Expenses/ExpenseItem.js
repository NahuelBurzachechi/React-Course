import React from 'react';
import  './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const dateMonth = props.date.toLocaleString('es-ES',{month: 'long'});
    const dateYear = props.date.getFullYear();
    const dateDay = props.date.toLocaleString('es-ES', {day: '2-digit'});

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;