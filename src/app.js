import ToDo from './components/todo/todo.js';
import './app.scss';
import { Navbar } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          Home
        </Navbar.Brand>
      </Navbar>
      <ToDo />
    </>
  );
};

export default App;
