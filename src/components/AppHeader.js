import { Button, Container, Navbar } from "react-bootstrap";
import "react-simple-keyboard/build/css/index.css";


function AppHeader ({onShowGamesHistory}) {

  return (
    <Navbar className='app-header'>
      <Container>
          <Navbar.Brand className="brand">Wordle</Navbar.Brand>
          <Button onClick={onShowGamesHistory}>
              Game history
          </Button>
        </Container>
    </Navbar>
  );
}

export default AppHeader;
