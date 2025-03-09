import React from 'react';
import chefify from '../src/img/chefify.png'; 
import avatar from '../src/img/avatar.png';
import rating1 from '../src/img/rating_1.png';
import rating2 from '../src/img/rating_2.png';
import slider from '../src/img/slider.png'
import nothingFound from '../src/img/nothing.png';
import rating3 from '../src/img/rating_3.png'
import rating4 from '../src/img/rating_4.png'

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo">
            <img src={chefify} alt="Cheffiy Logo" />
        </div>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search ..." />
          </form>
        </div>
        <nav className="nav-links">
          <a href="#">What to cook</a>
          <a href="#">Recipes</a>
          <a href="#">Ingredients</a>
          <a href="#">Occasions</a>
          <a href="#">About Us</a>
        </nav>
        <div className="user-profile">
          <button className="recipe-box">Your Recipe Box</button>
          <img src={avatar} alt="User Profile" />
        </div>
      </header>

      <main className="container">
        <aside className="sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Type</h4>
            <label><input type="checkbox" /> Pan-fried</label>
            <label><input type="checkbox" /> Stir-fried</label>
            <label><input type="checkbox" checked /> Grilled</label>
            <label><input type="checkbox" checked /> Roasted</label>
            <label><input type="checkbox" /> Sauteed</label>
            <label><input type="checkbox" /> Baked</label>
            <label><input type="checkbox" /> Streamed</label>
            <label><input type="checkbox" /> Stewed</label>
          </div>

          <div className="filter-section">
            <h4>Time</h4>
            <img src={slider} className='img111' alt="" />
          </div>

          <div className="filter-section">
            <h4>Rating</h4>
            <label><input type="checkbox" name="rating" /><img src={rating1} alt="Rating 1" /></label>
            <label><input type="checkbox" name="rating" /> <img src={rating2} alt="" /></label>
            <label><input type="checkbox" name="rating" checked /><img src={rating3} alt="" /></label>
            <label><input type="checkbox" name="rating" /><img src={rating4} alt="" /></label>
          </div>

          <button className="apply-btn">Apply</button>
        </aside>

        <section className="results">
          <h2>Sorry, no results were found for “cakescascsa”</h2>
          <div className="not-found">
            <img src={nothingFound} alt="No Results" />
            <p>We have all your Independence Day sweets covered.</p>
            <div className="suggestions">
              <span className="tag">Sweet Cake</span>
              <span className="tag">Black Cake</span>
              <span className="tag">Pozole Verde</span>
              <span className="tag">Healthy Food</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
