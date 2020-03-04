import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/HomeComponent';
import Pricing from './components/modules/PricingComponent';
import Services from './components/modules/ServicesComponent';
import Stores from './components/modules/StoresComponent';



const routes = [
  {
    url: '/',
    pathName: 'Home',
    component: Home
},{
    url: '/pricing',
    pathName: 'Pricing',
    component: Pricing
},{
    url: '/stores',
    pathName: 'Stores',
    component:Stores
},{
    url: '/services',
    pathName: 'Services',
    component:Services
}
]

const App = () => {
  return (
      <Router>
          <div>
           <Header/>
              <div>
                <Switch>
                  {
                      routes.map((value, index) => {
                          return  <Route  key={index}  path={value.url} component={value.component} exact={true}/>
                      })
                  }
                </Switch>
              </div>
            <Footer />
          </div>
      </Router>
  );
}

export default App;
