import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar/NavBar';
import Home from './components/main-pages/Home/Home';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faFacebook, faCoffee)

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
