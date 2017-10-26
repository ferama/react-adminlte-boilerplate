import React from 'react'
import { Link } from 'react-router-dom'

export default class Aside extends React.Component {
  render() {
    return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="../../dist/img/user2-160x160.jpg" className="img-circle" />
          </div>
          <div className="pull-left info">
            <p>Marco</p>
            <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
          </div>
        </div>
        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">TEST</li>
          <li>
            <Link to="/"><i className="fa fa-dashboard"></i> <span>Home</span></Link>
          </li>
          <li>
            <Link to="/test"><i className="fa fa-pencil-square"></i> <span>Test</span></Link>
          </li>
          <li>
            <Link to="/about-us"><i className="fa fa-sticky-note"></i> <span>About</span></Link>
          </li>
        </ul>
      </section>
    </aside>
  )
  }
}
