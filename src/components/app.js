import React, { Component } from 'react';
import NavMenu from './nav-menu';
import { RouteTransition } from 'react-router-transition';

export default class App extends Component {
  render() {
    return (
      <div className="" >
        <NavMenu />
          <div className="bgOffset"></div>


          <RouteTransition
              pathname={this.props.location.pathname}
              atEnter={{ translateX: 100 }}
              atLeave={{ translateX: 0 } }
              atActive={{ translateX: 0 } }
              mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
          >
                <div className=" container">{this.props.children}</div>
          </RouteTransition>

      </div>
    );
  }
}
