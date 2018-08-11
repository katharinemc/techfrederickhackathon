import React from 'react'
import {connect} from 'react-redux';


export class Leaderboard extends React.Component {

  render() {   
  
    // const results = this
    // .props
    // .results
    // .map((item, index) => {

    //   let productList;
    //   if (this.props.kind === 'looks') {
    //     productList = item
    //       .products
    //       .map( (product, index) => {
    //         return <li key={index}>{product.brand} {product.category}, {product.name}, {product.shade}<br /></li>
    //       })
    //   }

    var divStyle = {
      textAlign: "center",
      fontSize: "50px"
    }
    
  return (
    <div className="container-fluid">
    {/* header */}
    
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-2">
            <div class="pos-f-t">
              <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4">
                  <a href="#"><h5 class="text-black h4">Leaderboard</h5></a>
                  <a href="#"><h5 class="text-black h4">Games</h5></a>
                  <a href="#"><h5 class="text-black h4">Teams</h5></a>
                </div>
              </div>
              <nav class="navbar navbar-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>
            </div>
          </div>
          <div className="col-md-6">
            <h1 style={divStyle}>Leaderboard</h1>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-1"></div>
        </div>
        {/* leaderboard */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <ul class="list-group" style={{fontSize: "30px"}}>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">60</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">58</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">54</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">51</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">46</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">45</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">40</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">38</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">37</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">34</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">31</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">26</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Cras justo odio</b>
              <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Dapibus ac facilisis in</b>
              <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <b>Morbi leo risus</b>
              <span className="badge badge-primary badge-pill">1</span>
            </li>
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
    </div>
    );
  }
}


export default connect()(Leaderboard);