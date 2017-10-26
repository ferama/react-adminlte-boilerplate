import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Aside from './components/Aside'
import {routes} from './routes'

const App = () => (
  <div className="wrapper">
    <Navbar />
    <Aside />

    <div className="content-wrapper">
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          />
      ))}
    </div>
    <footer className="main-footer">
      <div className="pull-right hidden-xs">
      </div>
    </footer>
  </div>
)

export default App
