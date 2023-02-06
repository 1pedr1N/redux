import Login from "./components/Login";
import Logout from "./components/Logout";

import User from "./components/User";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container>
        <Login />
        <br />
        <Logout />
        <br />
        <User />
      </Container>
    </div>
  );
}

export default App;
