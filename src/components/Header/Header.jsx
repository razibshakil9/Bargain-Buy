import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../styles/header.css";
const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/calculator",
    display: "Calculator",
  },
  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contacts",
  },
  {
    path: "/auction",
    display: "Auction",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("navigation");

  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("userToken"); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Remove token
    navigate("/Login"); // Redirect to login page
  };

  return (
    <header className="header">
      {/* =========header top=========== */}
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span>Need Help?</span>
                <span className="header_top_help">
                  <i className="ri-phone-fill"></i> +92-16-4237277
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/Login"
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="ri-login-circle-line"></i> Login
                    </Link>
                    <Link
                      to="/Register"
                      className="d-flex align-items-center gap-1"
                    >
                      <i className="ri-user-line"></i> Register
                    </Link>
                  </>
                ) : (
                  <button onClick={handleLogout} className="btn btn-danger">
                    <i className="ri-logout-circle-line"></i> Logout
                  </button>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ===============header middle================ */}
      <div className="header_middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/" className="d-flex align-items-center gap-3">
                    <i className="ri-car-line"></i>
                    <span>
                      Bargain
                      <br /> N Buy
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Pakistan</h4>
                  <h6>Lahore City,Pakistan</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header_location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line"></i>
                </span>
                <div className="header_location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am to 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="text-end">
              <button className="header_btn btn">
                <Link to="/contact">
                  <i className="ri-phone-line"></i> Request a Call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* ===============MAIN NAVIGATION========== */}
      <div className="main_navbar">
        <Container>
          <div className="navigation_wrapper d-flex align-items-center justify-content-between">
            <span className="mobile_menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
            </span>
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav_active nav_item" : "nav_item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="nav_right">
              <div className="search_box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
