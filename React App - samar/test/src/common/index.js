import React from "react";
import "../App.css";




 function Navbar() {
      return (
        <nav class="navbar is-danger is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#home">
              <span class="icon">
                <i class="fas fa-info"></i>
              </span>
              Introduction
            </a>

 
            <a class="navbar-item" href="#Edu">
              <span class="icon">
                <i class="fas fa-book"></i>
              </span>
              Education
            </a>





            <a class="navbar-item" href="#pro">
              <span class="icon">
                <i class="fas fa-chart-pie"></i>
              </span>
              <span>project</span>
            </a>

            <a class="navbar-item" href="#con">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span>Contact</span>
            </a>



          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-danger">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
	);
}

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export default Navbar;