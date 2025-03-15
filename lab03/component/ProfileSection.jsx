// src/components/ProfileSection.jsx
import React from 'react';
import avt from '../img/avatar.png'
import share from '../img/share.png'

const ProfileSection = () => {
  return (
    <section className="profile-section">
        <p>Home - <scan style={{color: "pink"}}>Your Recipe Box</scan></p>
      <h1>Emma Gonzalez's Recipe Box</h1>
      <div className="profile-info">
      <div className='info'> 
         <img src={avt} alt="Emma Gonzalez" className="profile-pic" />
        <div>
        Emma Gonzalez is a devoted chef, bringing her expertise as a former writer for the Los Angeles Times. Based in Los Angeles, Emma shares recipes inspired by her City, where she explores the wide side of culinary delights from locally sourced ingredients.
        <br />
        <br />
        <span style={{color:'pink'}}>6.5k Sub</span> <button style={{marginLeft:"10px", background:'Pink', color:"w"}}> <img src={share} style={{ width: "20px", height: "20px" }} alt="" /> shares</button>
        </div>

     </div>
      </div>
    </section>
  );
};

export default ProfileSection;