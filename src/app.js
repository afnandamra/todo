import ToDo from './components/todo/todo.js';
import './app.scss';
import NavBar from './components/todo/Navbar.js';

const App = () => {
  return (
    <>
      <NavBar />
      <ToDo />
    </>
  );
};

export default App;
