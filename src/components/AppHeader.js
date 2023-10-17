import { Button, Container, Form, Navbar } from "react-bootstrap";
import "react-simple-keyboard/build/css/index.css";


function AppHeader ({onShowGamesHistory, onToggleTheme, theme}) {

  return (
    <Navbar className='app-header'>
      <Container>
          <Navbar.Brand className="brand">Wordle</Navbar.Brand>
          
          <Form className="d-flex">
            <Form.Check checked={theme==='dark'} type="switch" label='Dark mode' className="theme-switcher me-4" onClick={onToggleTheme}>
            </Form.Check>

            <Button onClick={onShowGamesHistory}>
              Game history
          </Button>
          </Form>
        </Container>
    </Navbar>
  );
}

export default AppHeader;
