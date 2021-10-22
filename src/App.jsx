import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/Details';
import GlobalStyleComponent  from '../src/assets/styles/global/styles';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/:userName" exact={true}>
            <DetailsPage />
          </Route>       
        </Switch>
      </Router>
      <GlobalStyleComponent />
    </div>
  );
}

export default App;
