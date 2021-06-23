import React, { useState } from "react";
import { Container } from "reactstrap";
import Form from "./components/Form";
import List from "./components/List";

const ALL_EXPENSES = [
  { id: 1, time: Date().toLocaleString(), amount: 20, operation: "add" },
  { id: 2, time: Date(), amount: 5, operation: "add" },
  { id: 3, time: Date(), amount: 225, operation: "remove" },
];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [amount, setAmount] = useState("");

  const handleAmount = (event) => {
    console.log("Amount ", event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // do something when submitting the form
    if (amount > 0) {
      // single expense object
      const expense = { amount };
      // do not override previous values in the array
      // use spread operator to access previous values
      setExpenses([...expenses, expense]);

      // clean input fields

      setAmount("");
    } else {
      console.log("Invalid expense name or the amount");
    }
  };

  return (
    <Container className="text-center">
      <h3 className="display-6">Expense Tracker- Basic</h3>
      <div>
        <p>
          Balance:{" "}
          <span className="text-success">
            {" "}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </span>
        </p>
      </div>
      <Form
        amount={amount}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm}
      />
      <List expenses={expenses} />
    </Container>
  );
}

export default App;

//Todo Important  points to understand

//* useState hooks returns 2 values, 1- current value of the state object, 2- function to update the state value of the first
//! hooks are always called at the top level of the function
//! before returnin the jsx, hooks should be called

// reduce method syntax
//* array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//? The reduce() method reduces the array to a single value.

//?The return value of the function is stored in an accumulator (result/total).
