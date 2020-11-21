import React, { Suspense, lazy } from 'react';
import '@/App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Loading from '@/components/Loading'
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const History = lazy(() => import('@/pages/History'))


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home"> <Home /></Route>
          <Route exact path="/about"> <About /></Route>
          <Route exact path="/history"> <History /></Route>
          <Route path="*">
            notFind
          </Route>
        </Switch>
      </Router>
    </Suspense>

  );
}

export default App;
