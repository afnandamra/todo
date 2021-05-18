import PaginationProvider from './context/pagenation.js';
import ToDo from './components/todo/todo-connected.js';
import NavBar from './components/header/Navbar.js';
import './app.scss';

const App = () => {
  return (
    <>
      <NavBar />
      <PaginationProvider>
        <ToDo />
      </PaginationProvider>
    </>
  );
};

export default App;
