import ToDo from './components/todo/todo-connected.js';
import './app.scss';
import NavBar from './components/header/Navbar.js';

const App = () => {
  return (
    <>
      <NavBar />
      <ToDo />
    </>
  );
};

export default App;
