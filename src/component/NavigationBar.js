import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  FormControl,
  Form,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Home from "./Home";
import NewMatch from "./NewMatch";
import SelectPlayer from "./SelectPlayer";
import MatchDetails from "./MatchDetails";

class NavigationBar extends React.Component {
  render() {
    return (
      <Jumbotron>
        <Router>
          <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="home">Cric Scorer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="live-matches">Live Matches</Nav.Link>
                <Nav.Link href="new-match">New Match</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/new-match" component={NewMatch} exact />
            <Route path="/select-captain" component={SelectPlayer} exact />
            <Route path="/select-vice-captain" component={SelectPlayer} exact />
            <Route path="/select-wk" component={SelectPlayer} exact />
            <Route path="/match-details" component={MatchDetails} exact />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Jumbotron>
    );
  }
}
export default NavigationBar;
