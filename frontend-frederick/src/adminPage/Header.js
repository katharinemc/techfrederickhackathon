import React from 'react'
import {connect} from 'react-redux';

export class Header extends React.Component {

  render() {
    return (
            <h1>Tech Frederick Games Foobar</h1>
    );
  }

}


export default connect()(Header);