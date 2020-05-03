import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SelectPlayer = ({ playerData }) => {
  let players = [
    "Player- 1",
    "Player- 2",
    "Player- 3",
    "Player- 4",
    "Player- 5",
    "Player- 6",
    "Player- 7",
    "Player- 8",
    "Player- 9",
    "Player-10",
    "Player-11",
  ];

  const history = useHistory();

  const handleSubmit = () => {
    history.push("/match-details");
  };

  return (
    <Jumbotron>
      {players.map((player) => (
        <Button variant="outline-primary" size="lg" block>
          {player}
        </Button>
      ))}
      <div style={{ paddingTop: "10px" }}>
        <Button variant="primary" onClick={handleSubmit}>
          Next
        </Button>
      </div>
    </Jumbotron>
  );
};

export default SelectPlayer;
