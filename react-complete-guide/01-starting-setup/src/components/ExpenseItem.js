import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28th</div>
      <div className="expense-item__description">
        <div>Title</div>
        <div className="expense-item__price">$56</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
