import React from 'react'

import Home from './containers/home'
import Test from './containers/test'
import About from './containers/about'

// https://reacttraining.com/react-router/web/example/sidebar

export const routes = [
  { path: '/',
    exact: true,
    main: () => <Home />
  },
  { path: '/test',
    main: () => <Test />
  },
  { path: '/about-us',
    main: () => <About />
  }
]
