import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup, Label } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <Label for="from-address">From address</Label>
          <input type="text" id="from-address" placeholder="From address" required />
        </FormGroup>
        
        <FormGroup className="form__group">
          <Label for="to-address">To address</Label>
          <input type="text" id="to-address" placeholder="To address" required />
        </FormGroup>
        
        <FormGroup className="form__group">
          <Label for="journey-date">Journey date</Label>
          <input type="date" id="journey-date" placeholder="Journey date" required />
        </FormGroup>
        
        <FormGroup className="form__group">
          <Label for="journey-time">Journey time</Label>
          <input className="journey__time" type="time" id="journey-time" placeholder="Journey time" required />
        </FormGroup>

        <FormGroup className="select__group">
          <Label for="car-type">Car type</Label>
          <select id="car-type">
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>  
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <button type="submit" className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
