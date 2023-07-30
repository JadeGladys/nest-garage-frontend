import React from "react";
const Menu = () => {
    return(
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div className="offcanvas-lg offcanvas-end bg-body-tertiary" tabIndex={-1} id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/" className="nav-link d-flex align-items-center gap-2" aria-current="page">
                <svg className="bi"><use xlinkHref="#house-fill" /></svg>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="/users" className="nav-link d-flex align-items-center gap-2">
                <svg className="bi"><use xlinkHref="#file-earmark"/></svg>
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#cart"/></svg>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#people"/></svg>
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#graph-up"/></svg>
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#puzzle"/></svg>
                Integrations
              </a>
            </li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#gear-wide-connected"/></svg>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a href="/register" className="nav-link d-flex align-items-center gap-2">
                <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use xlinkHref="#door-closed"/></svg>
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Menu;