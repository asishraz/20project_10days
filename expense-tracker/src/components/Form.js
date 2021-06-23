import React from "react";

import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button,
} from "reactstrap";

const Form = ({ amount, handleAmount, handleSubmitForm }) => (
  <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className="row">
      <Label for="exampleEmail" sm={2}></Label>
      <Col sm={4}>
        <Input
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0"
          value={amount}
          onChange={handleAmount}
          style={{ marginBottom: 15 }}
        />
      </Col>
    </FormGroup>
    <Button type="submit" color="primary" style={{ marginRight: 5 }}>
      Add
    </Button>
    <Button type="submit" color="danger">
      Remove
    </Button>
  </BTForm>
);

export default Form;
