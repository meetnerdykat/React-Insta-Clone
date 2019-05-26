import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Instagram Icon - On Homepage */}
          <Link className="navbar-brand" to="/home">
            <svg
              id="instagram-icon"
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

          {/* Instagram Word */}
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
          {/* Navbar Toggler - On Homepage */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Right Hand Side Icon Links - On Homepage */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/* Explore/Compass Icon - On Homepage */}
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  <svg
                    width="30"
                    height="32"
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
              </li>

              {/* Like/Heart Icon - On Homepage */}
              <li className="nav-item active">
                <Link className="nav-link" to="/likes">
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
              </li>

              {/* User Icon - On Homepage */}
              <li className="nav-item active">
                <Link className="nav-link" to="/user">
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
                      <path d="M96,40.5c-19.05,0 -34.5,15.45 -34.5,34.5c0,19.05 15.45,34.5 34.5,34.5c19.05,0 34.5,-15.45 34.5,-34.5c0,-19.05 -15.45,-34.5 -34.5,-34.5zM96,49.5c14.1,0 25.5,11.4 25.5,25.5c0,14.1 -11.4,25.5 -25.5,25.5c-14.1,0 -25.5,-11.4 -25.5,-25.5c0,-14.1 11.4,-25.5 25.5,-25.5zM96,121.5c-24.6,0 -47.39883,13.34941 -59.54883,34.64942c-1.2,2.1 -0.45117,4.94941 1.79883,6.14942c0.75,0.45 1.5,0.60058 2.25,0.60058c1.5,0 3.14941,-0.75 3.89941,-2.25c10.5,-18.6 30.30059,-30.14942 51.60059,-30.14942c21.3,0 41.1,11.54941 51.75,30.14942c1.2,2.1 3.89942,2.84941 6.14942,1.64942c2.1,-1.2 2.84941,-3.89942 1.64942,-6.14942c-12.15,-21.3 -34.94883,-34.64942 -59.54883,-34.64942z" />
                    </g>
                  </svg>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
