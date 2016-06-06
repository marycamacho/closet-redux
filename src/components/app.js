import React, { Component } from 'react';
import NavMenu from './nav-menu';

export default class App extends Component {
  render() {
    return (
      <div className="" >
        <NavMenu />
        <div className=" container">{this.props.children}</div>
      </div>
    );
  }
}
