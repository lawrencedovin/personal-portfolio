import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar/NavBar';
import Home from './components/main-pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
