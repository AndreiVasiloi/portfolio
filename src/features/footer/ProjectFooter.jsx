import React from "react";
import { NavLink } from "react-router-dom";
import "../../css/_footer.scss";

export default function ProjectFooter({ projectsLinks }) {
  return (
    <div className="footer" id="footer">
      <div className="footer__social">
        <h3 className="footer__social-header">Andrei Vasiloi</h3>
        <div className="footer__social-links">
          <div className="footer__social-link">
            <a
              href="https://www.linkedin.com/in/andrei-vasiloi/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer__social-link">
            <a
              href="https://www.facebook.com/andrei.vasiloi"
              target="_blank"
              rel="noreferrer"
              className="facebook-link"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="footer__social-link">
            <a href="mailto:andrei_vasiloi@yahoo.com" className="email-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__sitemap">
        <h3 className="footer__sitemap-header">Sitemap</h3>
        <div className="footer__sitemap-links">
          {projectsLinks.map((link, index) => (
            <NavLink
              key={index}
              to={`/${link.to}`}
              className="footer__sitemap-link"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
      <p className="copyright">&copy; Copyright 2021 by Andrei Vasiloi.</p>
    </div>
  );
}
