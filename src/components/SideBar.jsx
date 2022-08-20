import React from 'react';

function SideBar() {
  return (
    <>
      <div className="flex-shrink-0 p-3 bg-white side-bar">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <i className="bi pe-none me-2" width="30" height="24" />
          <span className="fs-5 fw-semibold">Collapsible</span>
        </a>
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="false"
            >
              Home
            </button>
            <div className="collapse" id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="link-dark d-inline-flex text-decoration-none rounded"
                  >
                    Reports
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export { SideBar };
