import React from "react";
import "../../css/_footer.scss";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer__social">
        <h3 className="footer__social-header">Andrei Vasiloi</h3>
        <div className="footer__social-links">
          <div className="footer__social-link">
            <a href="link" className="linkedin-link">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="footer__social-link">
            <a href="link" className="facebook-link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="footer__social-link">
            <a href="link" className="email-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__sitemap">
        <h3 className="footer__sitemap-header">Sitemap</h3>
        <div className="footer__sitemap-links">
          <a href="#home" className="footer__sitemap-link">
            home
          </a>
          <a href="#about" className="footer__sitemap-link">
            about
          </a>
          <a href="#skills" className="footer__sitemap-link">
            skills
          </a>
          <a href="#projects" className="footer__sitemap-link">
            projects
          </a>
        </div>
      </div>
      <p className="copyright">&copy; Copyright 2021 by Andrei Vasiloi.</p>
    </div>
  );
}
