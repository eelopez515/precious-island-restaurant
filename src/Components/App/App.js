import './App.css';
import { Route } from 'react-router-dom';
//Components
import About from '../About/About';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import Menu from '../Menu/Menu';

function App({ history }) {
  return (
    <div className="App">
      <Header history={history} />
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
    </div>
  );
}

export default App;
