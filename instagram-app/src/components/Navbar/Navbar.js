import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  // constructor gives access to props
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      searchInput: ''
    };
  }

  onChangeHandler = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    // fun part
    // call a function havent made yet
    this.props.filterPosts(this.state.searchInput);
  };

  render() {
    return (
      <nav className="navbar">
        <div className="container px-0 d-flex">
          <div className="col-3 d-flex align-items-center">
            {/* Instagram Icon - On Homepage */}
            <Link className="navbar-brand" to="/postcontainer">
              <svg
                width="27"
                height="28"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.25"
                  y="1.25"
                  width="33.5"
                  height="34.5"
                  rx="8.75"
                  stroke="#333333"
                  strokeWidth="2.5"
                />
                <circle
                  cx="18"
                  cy="19"
                  r="8.75"
                  stroke="#333333"
                  strokeWidth="2.5"
                />
                <circle
                  cx="28.5"
                  cy="8.5"
                  r="2.5"
                  transform="rotate(-180 28.5 8.5)"
                  fill="black"
                />
              </svg>
            </Link>

            {/* Vertical Line Icon - On Homepage */}
            <div>
              <svg
                id="line"
                width="32"
                height="34"
                viewBox="0 0 34 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1V56"
                  stroke="#353535"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Instagram Word */}
            <Link to="/postcontainer" className="nav-link text-dark">
              <h4
                id="instagram-word"
                style={{
                  fontFamily: 'Cookie',
                  fontSize: '2.25em',
                  fontWeight: '500',
                  paddingTop: '15px',
                  marginLeft: '-10px'
                }}
              >
                Instagram
              </h4>
            </Link>
          </div>

          {/* 
          SearchBox Form 
          -add onChange to the input
          */}
          <div className="col-6 d-flex justify-content-center">
            <form
              onSubmit={this.onSubmitHandler}
              className="form-inline px-4 mx-5 my-lg-0 border rounded d-none d-md-block"
            >
              <div className="input-group my-1">
                <input
                  onChange={this.onChangeHandler}
                  value={this.state.searchInput}
                  type="text"
                  className="form-control border-0 bg-transparent"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="btnGroupAddon"
                />

                <div>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-2"
                  >
                    <circle cx="5" cy="5" r="4.5" stroke="#848484" />
                    <path
                      d="M8 9L11 12"
                      stroke="#848484"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>

          <div className="col-3 d-flex justify-content-end align-items-center">
            {/* Explore/Compass Icon - On Homepage */}
            <Link className="nav-link p-1" to="/explore">
              <svg
                width="32"
                height="25"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.0503 11.5049L20.9107 21.6512L19.8955 20.636L22.9189 15.6395L17.9224 18.6629L16.9039 17.6444L27.0503 11.5049Z"
                  fill="#333333"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.9028 17.6426L11.505 27.0503L20.9127 21.6524L16.9028 17.6426Z"
                  fill="#333333"
                />
                <circle
                  cx="19"
                  cy="19"
                  r="16.5"
                  stroke="#333333"
                  strokeWidth="2"
                />
              </svg>
            </Link>

            {/* Like/Heart Icon - On Homepage */}
            <Link className="nav-link p-1" to="/likes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="32"
                height="32"
                viewBox="0 0 192 192"
                style={{ fill: '#000000' }}
              >
                <path d="M0,192v-192h192v192z" fill="none" />
                <g fill="#000">
                  <g id="surface1">
                    <path d="M62.88,34.56c-24.03,0 -43.68,19.41 -43.68,43.32c0,49.035 55.635,74.715 74.4,90.24l2.4,2.04l2.4,-2.04c18.765,-15.525 74.4,-41.205 74.4,-90.24c0,-23.91 -19.65,-43.32 -43.68,-43.32c-13.35,0 -25.11,6.195 -33.12,15.6c-8.01,-9.405 -19.77,-15.6 -33.12,-15.6zM62.88,42.24c12.54,0 23.445,6.345 29.88,15.96l3.24,4.8l3.24,-4.8c6.435,-9.615 17.34,-15.96 29.88,-15.96c19.905,0 36,15.915 36,35.64c0,41.85 -47.085,65.31 -69.12,82.56c-22.035,-17.25 -69.12,-40.71 -69.12,-82.56c0,-19.725 16.08,-35.64 36,-35.64z" />
                  </g>
                </g>
              </svg>
              <span className="sr-only">(current)</span>
            </Link>

            {/* User Icon - On Homepage */}

            <Link className="nav-link p-1" to="/user">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  r="4.50007"
                  transform="matrix(1 0 0 -1 11.2496 5.71355)"
                  stroke="#333333"
                  strokeWidth="1.5"
                />
                <path
                  d="M0.999512 21.8868V21.8868C0.999512 18.0208 4.13356 14.8867 7.99961 14.8867H13.9997C17.8657 14.8867 20.9998 18.0208 20.9998 21.8868V21.8868"
                  stroke="#333333"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">(current)</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
