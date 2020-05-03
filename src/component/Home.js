import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const handleSubmit = () => {
    return history.push("/select-captain");
  };

  return (
    <Jumbotron>
      <Button variant="primary" onClick={handleSubmit}>
        SelectCaptain
      </Button>
    </Jumbotron>
  );
};

export default Home;
