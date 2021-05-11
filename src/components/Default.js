// import React from "react";

// export default function Default(props) {
//   console.log(props);

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
//           <h1 className="display-3">404</h1>
//           <h1>error</h1>
//           <h2>page not found</h2>
//           <h3>
//             the requested URL{" "}
//             <span className="text-danger">"{props.location.pathname}"</span> was
//             not found
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import DefaultImage from "../img/Untitled5.png";
import WordLimit from "react-word-limit";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    return (
      <div>
        <div className="col-10 mt-2 mr-sm-5 mr-md-auto col-sm-8 text-capitalize text-left text-danger">
          <h1>404 Page not found</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="col-10 mt-2 mx-sm-5 mx-md-auto col-sm-8 text-capitalize text-center text-danger">
          <h3>
            <WordLimit limit={30}>{this.props.location.pathname}</WordLimit>
          </h3>
        </div>
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <img
              src={DefaultImage}
              style={{ height: "400px", width: "400px" }}
              alt="default-storo"
            />
          </Link>
        </div>
      </div>
    );
  }
}
