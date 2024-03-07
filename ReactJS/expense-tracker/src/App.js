import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    { title: "Liquid IV", amount: 29.99, date: new Date(2022, 2, 29) },
    { title: "Marsmello", amount: 8.99, date: new Date(2021, 4, 19) },
    { title: "Chocolate", amount: 2.99, date: new Date(2020, 2, 6) },
    { title: "Apple", amount: 3.99, date: new Date(2022, 2, 16) },
    { title: "Banana", amount: 6.99, date: new Date(2022, 12, 12) },
  ];
  
  const addExpenseHandler = expense => {
    console.log('In App.js');
    expenses.push(expense)
    console.log(JSON.stringify(expenses));
  }
  return (
    <div className="App">
      <h1>Let's Get Started</h1>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
