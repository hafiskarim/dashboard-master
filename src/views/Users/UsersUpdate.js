import React from "react";
import { FormGroup, Label, Input, Col } from "reactstrap";

const UsersUpdate = () => {
  return (
    <div>
      <FormGroup row>
        <Label sm={2}>First Name</Label>
        <Col md={6}>
          <Input type="text" placeholder="First Name" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Last Name</Label>
        <Col md={6}>
          <Input type="text" placeholder="Last Name" />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label sm={2}>Email</Label>
        <Col md={6}>
          <Input type="email" placeholder="Email" />
        </Col>
      </FormGroup>
    </div>
  );
};

export default UsersUpdate;
