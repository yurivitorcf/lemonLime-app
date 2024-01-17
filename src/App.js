import './App.css';
import Nav from './components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
