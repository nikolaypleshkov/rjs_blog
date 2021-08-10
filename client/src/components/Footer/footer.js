import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div class="container py-5">
        <div class="row py-4">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 footer-headers">
            <h1 className="hig-header">devblog</h1>
            <h6 class="text-uppercase mt-4 min-header"> DEV.bg е най-голямата ИТ общонст в българия</h6>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">За Devblog.bg</h6>
            <ul class="list-unstyled mb-0 footer-navlink">
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  За нас
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  Екип
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  Реклама
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">DEV.bg Events</h6>
            <ul class="list-unstyled mb-0 footer-navlink">
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  Потребителски групи
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  ИТ Събития
                </a>
              </li>
              <li class="mb-2">
                <a href="#" class="text-muted footer-ul-link">
                  Партньори
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-lg-0">
            <h6 class="text-uppercase font-weight-bold mb-4">Контакти</h6>
            <p class="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div class="p-1 rounded border">
              <div class="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  class="form-control border-0 shadow-0"
                />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link">
                    <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4">
        <div class="container text-center">
          <p class="text-muted mb-0 py-2">
            © 2021 DEVBLOG All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
