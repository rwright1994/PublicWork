import Navbar from '../Navigation/Navbar';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Demo from '../Pages/Demo';
import Resume from '../Pages/Resume';
import Templates from '../Pages/Templates';
import Footer from '../Footer/Footer'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/demo" component={Demo}/>
            <Route path='/resume' component={Resume}/>
            <Route path="/templates" component={Templates}/>
          </Switch>
          <Footer/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
