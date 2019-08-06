import React from "react";
import { FormGroup, Label, Input, Col } from "reactstrap";

const UsersAdd = ({ state, handleChange }) => {
  console.log(state.firstName);
  return (
    <div>
      <FormGroup row>
        <Label sm={2}>First Name</Label>
        <Col md={6}>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="First Name"
            value={state.firstName}
            name="firstName"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Last Name</Label>
        <Col md={6}>
          <Input
            type="text"
            onChange={handleChange}
            placeholder="Last Name"
            value={state.lastName}
            name="lastName"
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Email</Label>
        <Col md={6}>
          <Input
            type="email"
            onChange={handleChange}
            placeholder="Email"
            value={state.email}
            name="email"
          />
        </Col>
      </FormGroup>
    </div>
  );
};

export default UsersAdd;
