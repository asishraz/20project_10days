import { React, useState } from "react";

import { Container } from "reactstrap";

import Form from "./components/Form";

const ALL_EXPENSES = [
  { id: 1, name: "Buy a book", amount: 20 },
  { id: 2, name: "Buy a milk", amount: 5 },
  { id: 3, name: "Book a flight ticket", amount: 25 },
];

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  return (
    <Container style={{ marginTop: 20 }}>
      <h3 className="display-6"> Expense Tracker App</h3>
      <div>
        <p>
          {" "}
          Total Expense : {""}
          <span>
            ${" "}
            {expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseInt(currentValue.amount));
            }, 0)}
          </span>
        </p>
      </div>
      <Form />
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
