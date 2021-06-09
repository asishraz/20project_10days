import React, { useState } from "react";
import { Container } from "reactstrap";
import Form from "./components/Form";
import List from "./components/List";

const ALL_EXPENSES = [
  { id: 1, time: "12:30pm", amount: 20, operation: "add" },
  { id: 2, time: "12:35pm", amount: 5, operation: "add" },
  { id: 3, time: "12:40pm", amount: 225, operation: "remove" },
];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);

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
      <Form />
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
