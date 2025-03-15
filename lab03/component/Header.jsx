import React from 'react';
import Chefily from '../img/chefify.png'
import RenderItem from './RenderItem';
import avt from '../img/avatar.png'

export default function Header(){
    var array = ['Home', 'Recipes', 'Ingredients', 'Categories', 'About Us']

    return (
        <header className="header">
          <div className="logo"><img src={Chefily} alt="" /></div>
          <input type="text" id='aa' placeholder="Search recipes..." className="search-bar" />

          <nav className="nav">
            <RenderItem array={array}/>
            <button className="login-btn">Your recipe box</button>
            <img src={avt} alt="" />
          </nav>
        </header>
      );
}