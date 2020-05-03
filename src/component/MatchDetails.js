import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Form, Jumbotron, Button, Col } from "react-bootstrap";

import { useHistory } from "react-router-dom";

const MatchDetails = () => {
  const history = useHistory();

  const handleSubmit = () => {
    return history.push("/home");
  };
  const [value, setValue] = useState(0);

  return (
    <Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control placeholder="Location" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Overs</Form.Label>
            <RangeSlider
              max="20"
              value={value}
              onChange={(changeEvent) => setValue(changeEvent.target.value)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Toss Won By</Form.Label>
            {["Team A", "Team B"].map((team) => (
              <div key={`default-${team}`} className="mb-3">
                <Form.Check
                  type="radio"
                  name="sampleRadio"
                  label={team}
                  id={`disabled-default-${team}`}
                />
              </div>
            ))}
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Elected to</Form.Label>
            {["Bat", "Field"].map((team) => (
              <div key={`default-${team}`} className="mb-3">
                <Form.Check
                  type="radio"
                  name="sampleRadio2"
                  label={team}
                  id={`disabled-default-${team}`}
                />
              </div>
            ))}
          </Form.Group>
        </Form.Row>

        <div style={{ paddingTop: "10px" }}>
          <Button variant="primary" type="submit">
            Begin Match
          </Button>
        </div>
      </Form>
    </Jumbotron>
  );
};

export default MatchDetails;
