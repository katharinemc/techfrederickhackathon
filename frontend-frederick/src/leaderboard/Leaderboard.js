import React from 'react'
import {connect} from 'react-redux';

export class Leaderboard extends React.Component {

  render() {   
  
    const results = this
    .props
    .results
    .map((item, index) => {

      let productList;
      if (this.props.kind === 'looks') {
        productList = item
          .products
          .map( (product, index) => {
            return <li key={index}>{product.brand} {product.category}, {product.name}, {product.shade}<br /></li>
          })
      }


    return (
            <h1>Barfoo Foobar</h1>
    );
  }

}


export default connect()(Leaderboard);