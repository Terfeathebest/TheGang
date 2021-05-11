import React, { Component } from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../img/Untitled.png'
import { ButtonContainer } from "./Button";
import Search from "./Search";

export default class Header extends Component {
  render() {
    return (
      <Nav1 className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Navbar.Brand to="/">
          <Link to="/" style={{textDecoration:'none', color:'white'}}>
            <img src={img} alt="store" style={{width:'200px', height:'100px'}} className="navbar-brand" /> THE GANG
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="center"
          aria-controls="basic-navbar-nav"
          bg="dark"
          variant="dark"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav.Item> */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/products" className="nav-link ml ml-auto">
                products
              </Link>
            </li>
          </ul>
          {/* </Nav.Item> */}
          {/* <Nav.Item> */}
            <div className="ml-auto row" 
              style={{
                display: 'flex', 
                justifyContent: "space-around",
                // width: '100%', 
                width: 'inherit',
              }}
            >
              <Search/>
              <div style={{marginLeft: '20px'}}>
                <Link to="/cart" className="ml-auto">
                  <ButtonContainer>
                    <span className="mr-2">
                      <i className="fas fa-cart-plus " />
                    </span>
                    my cart
                  </ButtonContainer>
                </Link>
              </div>
            </div>
          {/* </Nav.Item> */}
        </Navbar.Collapse>
      </Nav1>
    );
  }
}

const Nav1 = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// // const ButtonContainer = styled.button`
// //   text-transform: capitalize;
// // font - size: 1.4rem;
// // background: transparent;
// // border: 0.05rem solid var(--lightBlue);
// // border - radius: 0.5rem;
// // padding: 0.2rem 0.5rem;
// // outline - color: red;
// // cursor: pointer;
// // display: inline - block;
// // margin: 0.2rem 0.5rem 0.2rem 0;
// // transition: all 0.5s ease -in -out;
// //   &: hover {
// //   background: var(--lightBlue);
// //   color: var(--mainBlue);
// // }
// // `;

// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// // import styled from "styled-components";
// // import logo from "../logo.svg";
// import { ButtonContainer } from "./Button";
// import { Nav, Navbar } from "react-bootstrap";
// import Home from "./Home";
// import './navbar.css'

// export default class Header extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar
//           bg="secondary"
//           variant="dark"
//           expand="lg"
//           className="grey darken-3"
//         >
//           <Navbar.Brand href="/">
//             The Gang
//           </Navbar.Brand>
//           <Navbar.Toggle
//           style={{left:'100px'}}
//             className="center"
//             aria-controls="basic-navbar-nav"
//             bg="dark"
//             variant="dark"
//           />
//           <Navbar.Collapse id="basic-navbar-nav">
            // <Nav
            //   className="justify-content-center right hi grey darken-3 short"
            //   activeKey="/"
            // >
//               <Nav.Item>
//                 <Nav.Link href="/products" eventKey="/products">
//                   Products
//                 </Nav.Link>
//               </Nav.Item>

//               <Nav.Item className="ml-auto">
//                 <Nav.Link href="/cart" eventKey="/cart" className="ml-auto">
//                   <button className="bushon ml-auto">
//                     <span className="mr-2 ml-auto">
//                       <i className="fas fa-cart-plus ml-auto" />
//                     </span>
//                     my cart
//                   </button>
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// const Nav = styled.nav`
//   background: var(--mainBlue);
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size:1.3rem;
//     text-transform:capitalize;
//   }
//   @media (max-width: 576px) {
//     .navbar-nav {
//       flex-direction: row !important;
// `;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;

