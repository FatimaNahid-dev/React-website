import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faU } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';


export default function Sidebar() {
  return (
    <>
      <div className="mt-5 col-md-3 position-fixed" style={{ zIndex: 9999 }} >
  <div className="b-example-divider b-example-vr" />
  <div
    className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
    style={{ width: "4.5rem" }}
  >
    <a
      href="/"
      className="d-block p-3 link-body-emphasis text-decoration-none"
      title="Icon-only"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
    >
      <svg className="bi pe-none" width={40} height={32}>
        <use xlinkHref="#bootstrap" />
      </svg>
      <FontAwesomeIcon icon={faU} />
      <span className="visually-hidden">Icon-only</span>
    </a>
    <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
      <li className="nav-item">
        <a
          href="#"
          className="nav-link active py-3 border-bottom rounded-0"
          aria-current="page"
          title="Home"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            className="bi pe-none"
            width={24}
            height={24}
            role="img"
            aria-label="Home"
          >
            <use xlinkHref="#home" />
          </svg>
          <FontAwesomeIcon icon={faHouse} style={{ color: '#0c234b' }} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0 "
          title="Product"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            className="bi pe-none text-center"
            width={24}
            height={24}
            role="img"
            aria-label="Product"
          >
            <use xlinkHref="#speedometer2" />
          </svg>
          <FontAwesomeIcon icon={faProductHunt} style={{ color: '#0c234b' }} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0"
          title="Orders"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            className="bi pe-none text-center"
            width={24}
            height={24}
            role="img"
            aria-label="Orders"
          >
            <use xlinkHref="#table" />
          </svg>
          <FontAwesomeIcon icon={faPhone} style={{ color: '#0c234b' }} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0"
          title="Products"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            className="bi pe-none"
            width={24}
            height={24}
            role="img"
            aria-label="Products"
          >
            <use xlinkHref="#grid" />
          </svg>
          <FontAwesomeIcon icon={faUserPlus} style={{ color: '#0c234b' }}  />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="nav-link py-3 border-bottom rounded-0"
          title="Customers"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <svg
            className="bi pe-none"
            width={24}
            height={24}
            role="img"
            aria-label="Customers"
          >
            <use xlinkHref="#people-circle" />
          </svg>
          <FontAwesomeIcon icon={faRightToBracket} style={{ color: '#0c234b' }} />
        </a>
      </li>
    </ul>
    <div className="dropdown border-top">
      <a
        href="#"
        className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3ooEn3t-hY-3arGLbWOMRp7nTTjQgy1AgA&usqp=CAU"
          alt="mdo"
          width={24}
          height={24}
          className="rounded-circle"
        />
      </a>
      <ul className="dropdown-menu text-small  shadow">
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  </div>

      </div>
    </>
  );
}
