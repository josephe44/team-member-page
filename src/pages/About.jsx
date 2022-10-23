import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  return (
    <div>
      <div className="header">
        <ul>
          <li>
            <Link to="/about/policy">Policy</Link>
          </li>
          <li>
            <Link to="/about/terms">Terms</Link>
          </li>
        </ul>
      </div>
      {location.pathname === "/about" ? (
        <div>
          <h2>About Page</h2>
          <p>
            WebsiteName is a Professional WebsiteType Platform. Here we will
            provide you only interesting content, which you will like very much.
            We're dedicated to providing you the best of WebsiteType, with a
            focus on dependability and WebsiteSpeciality. We're working to turn
            our passion for WebsiteType into a booming online website. We hope
            you enjoy our WebsiteType as much as we enjoy offering them to you.
            I will keep posting more important posts on my Website for all of
            you. Please give your support and love.
          </p>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default About;
