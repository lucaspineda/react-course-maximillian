import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from 'react'

import "../Expenses/Expenses.css";

function Expenses(props) {
  const [yearFiltered, setYearFiltered] = useState('2020');

  const handleFilterChange = (year) => {
    console.log('here in expenses.js', year)
    setYearFiltered(year)
  }
  return (
    <div>
      <ExpensesFilter selected={yearFiltered} onChangeFilter={handleFilterChange} />
      <Card className="expenses">
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
