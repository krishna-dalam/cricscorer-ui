import React from "react";
import {
  Form,
  Jumbotron,
  Button,
  InputGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import { useHistory } from "react-router-dom";

const NewMatch = () => {
  let players = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];

  //   const [state, setState] = useState({
  //     teamName: "",
  //     player_1_name: "",
  //     player_2_name: "",
  //     player_3_name: "",
  //     player_4_name: "",
  //     player_5_name: "",
  //     player_6_name: "",
  //     player_7_name: "",
  //     player_8_name: "",
  //     player_9_name: "",
  //     player_10_name: "",
  //     player_11_name: "",
  //   });

  const history = useHistory();

  const handleSubmit = (event) => {
    return history.push("/select-captain");
  };

  return (
    <Jumbotron>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupTeamName">
          <Form.Label>Team Name</Form.Label>
          <Form.Control placeholder="Team Name" />
        </Form.Group>
        <Form.Group controlId="formGroupPlayers">
          <Form.Label>Players</Form.Label>

          {players.map((input) => (
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">{input}</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="Name" aria-label={input} />
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton variant="info" value={1}>
                  BAT
                </ToggleButton>
                <ToggleButton variant="info" value={2}>
                  BWL
                </ToggleButton>
                <ToggleButton variant="info" value={3}>
                  ALL
                </ToggleButton>
              </ToggleButtonGroup>
            </InputGroup>
          ))}
        </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </Jumbotron>
  );
};

export default NewMatch;
