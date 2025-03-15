import React from 'react';

export default function Footer()
{
    return (
        <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Learn More</h4>
          <a href="#">About Us</a>
          <a href="#">FAQ</a>
          <a href="#">Blog</a>
        </div>
        <div className="footer-section">
          <h4>Recipes</h4>
          <a href="#">Pasta</a>
          <a href="#">Salads</a>
          <a href="#">Healthy</a>
          <a href="#">Desserts</a>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <input type="email" placeholder="Your email..." />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>🍳 Chefily | All rights reserved</p>
      </div>
    </footer>
    )
}