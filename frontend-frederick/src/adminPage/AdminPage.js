import React from 'react'
import { connect } from 'react-redux';
import './adminPage.css'
import Header from './Header'
import { AdminScore } from './AdminScore';


export class AdminPage extends React.Component {

  render() {
    return (
<div className="App">
<header className="App-header">
<Header />
</header>
<AdminScore />

<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div>

    );
  }

}


export default connect()(AdminPage);