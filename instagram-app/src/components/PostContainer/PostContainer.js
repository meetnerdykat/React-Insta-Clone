import React from 'react';
// import five from '../instaAssets/05.jpg';
import five from '../instaAssets/04.jpg';
import profile from '../instaAssets/profile.png';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer() {
  return (
    <div className="container text-dark">
      <div className="row">
        <div className="col-sm-12 col-md-8 offset-md-2 my-3">
          {/* Card */}
          <div className="card bg-white mb-3 text-left">
            <div className="card-header text-dark">
              <div className="media">
                <img
                  src={profile}
                  className="custom-media img-fluid rounded"
                  width="40"
                  height="40"
                  alt="nine"
                />
                <div className="media-body">
                  <h6 className="small p-3 font-weight-bold mt-0">
                    _simply_rare_
                  </h6>
                </div>
              </div>
            </div>

            <img src={five} className="card-img-top" alt="one" />
            <div className="card-body">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item d-flex justify-content-between align-items-center pt-0 pl-0 pr-3 border-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="26"
                    height="26"
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
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center pt-0 pr-3 border-0">
                  <svg
                    width="17"
                    height="19"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.6851 13.2017C16.4984 11.8767 16.9684 10.3112 16.9684 8.63387C16.9684 3.86552 13.1699 0 8.48419 0C3.7985 0 0 3.86552 0 8.63387C0 13.4022 3.7985 17.2677 8.48419 17.2677C9.57541 17.2677 10.6185 17.0581 11.5767 16.6762L17 19L15.6851 13.2017ZM8.48419 16.4708C9.59535 16.4708 10.6515 16.2313 11.6056 15.8003L11.6379 15.8387L11.6382 15.8379L15.8926 17.6607L14.8941 13.258L14.79 13.1338C15.6691 11.8603 16.1852 10.3084 16.1852 8.63387C16.1852 4.30567 12.7374 0.796973 8.48419 0.796973C4.23103 0.796973 0.783156 4.30567 0.783156 8.63387C0.783156 12.9621 4.23103 16.4708 8.48419 16.4708Z"
                      fill="black"
                    />
                  </svg>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center pt-0 pr-2 border-0">
                  <svg
                    width="17"
                    height="21"
                    viewBox="0 0 17 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.35355 0.646447C9.15829 0.451184 8.84171 0.451184 8.64645 0.646447L5.46447 3.82843C5.2692 4.02369 5.2692 4.34027 5.46447 4.53553C5.65973 4.7308 5.97631 4.7308 6.17157 4.53553L9 1.70711L11.8284 4.53553C12.0237 4.7308 12.3403 4.7308 12.5355 4.53553C12.7308 4.34027 12.7308 4.02369 12.5355 3.82843L9.35355 0.646447ZM9.5 15L9.5 1H8.5L8.5 15H9.5Z"
                      fill="black"
                    />
                    <path
                      d="M1 10V16C1 18.2091 2.79086 20 5 20H12C14.2091 20 16 18.2091 16 16V10"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </li>

                <li className="list-group-item d-flex ml-auto align-items-center pt-0 pr-2 border-0">
                  <svg
                    width="15"
                    height="20"
                    viewBox="0 0 15 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 18V1H14V18L7.46977 12.2348L1 18Z"
                      stroke="black"
                    />
                  </svg>
                </li>
              </ul>

              <h6 className="small font-weight-bold card-title mb-1">
                73 likes
              </h6>

              <span className="small font-weight-bold pr-2">_simply_rare_</span>
              <span className="small">
                My grandma is the best ever! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam quo eos tempore!
              </span>
            </div>
            <CommentSection />
          </div>

          {/* column div */}
        </div>
      </div>
    </div>
  );
}

export default PostContainer;
