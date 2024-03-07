import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  // Important: this doesn't work out of the component function or nested function

  const [title, setTitle] = useState(props.expense.title);

  const clickHandler =  () => {
    setTitle('Updated!');
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.expense.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.expense.amount}</div>
      <button onClick={clickHandler}>Change Title!</button>
    </Card>
  );
}

export default ExpenseItem;
