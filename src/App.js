import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from './component/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const aboutPage = lazy(() => import('./component/AboutPage'));
const restaurantPage = lazy(() => import('./component/RestaurantPage'));
const propsExample = lazy(() => import('./component/PropsExample'));

function App() {
  return (
    <div className="App">
      <Banner />
      <Router>
          <Suspense fallback={<div>loading...</div>}>
              <Switch>
                  <Route exact path={'/'} component={aboutPage}/>
                  <Route path={'/restaurants'} component={restaurantPage}/>
                  <Route path={'/propsExample'} component={propsExample}/>
              </Switch>
          </Suspense>
      </Router>
    </div>
  );
}

export default App;
