import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Loadable from 'react-loadable'
import { PageLoader } from './components/PageLoader'

const LoadableHome = Loadable({
  loader: () => import('./containers/Home'),
  loading: PageLoader
})

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route path="/:selectedClass?/:pointString?" component={LoadableHome} />
          </Switch>
        </main>

        <footer>
          {'♥ Chippy - '}
          <Link to="/">Home</Link>
          {' - '}
          <Link to="//github.com/mirague/wow-talent-calculator" target="_blank">Source</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
