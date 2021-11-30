import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

import "../Expenses/Expenses.css";

function Expenses(props) {
  const [yearFiltered, setYearFiltered] = useState("2020");
  console.log('chsmouu', props)

  const handleFilterChange = (year) => {
    console.log("here in expenses.js", year);
    setYearFiltered(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFiltered}
          onChangeFilter={handleFilterChange}
        />
        {props.expenses.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
