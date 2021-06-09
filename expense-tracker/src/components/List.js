import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const List = ({ expenses }) => (
  <div>
    <h3 className="display-9">Transactions:</h3>
    <ListGroup>
      {expenses.map((item) => (
        <ListGroupItem key={item.id}>
          {item.time} -{item.amount}-{item.operation}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export default List;
