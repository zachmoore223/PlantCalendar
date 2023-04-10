import React, { useState, useEffect } from "react";
import profile_adunia from '../profileImages/profile_adunia.jpg';
import profile_gabriel from '../profileImages/profile_gabriel.jpg';
import profile_josef from '../profileImages/profile_josef.jpg';
import profile_thomas from '../profileImages/profile_thomas.jpg';
import profile_zach from '../profileImages/profile_zach.jpg';


export default function AboutUs () {
const [viewAboutUs, setViewAboutUs] = useState(false);

if (viewAboutUs == true){
return (
<div>
<button className="linksButton" onClick={() => setViewAboutUs(false)}> Hide </button>
<div id="profilePage">

  <figure>
    <img src={profile_adunia} className="profile" />
    <figcaption>Bio for Adunia goes here.</figcaption>
  </figure>

  <figure>
    <img src={profile_gabriel} className="profile" />
    <figcaption>Bio for Gabriel goes here</figcaption>
  </figure>

  <figure>
    <img src={profile_josef} className="profile" />
    <figcaption>Bio for Josef goes here</figcaption>
  </figure>

  <figure>
    <img src={profile_thomas} className="profile" />
    <figcaption>Bio for Thomas goes here</figcaption>
  </figure>

  <figure>
    <img src={profile_zach} className="profile" />
    <figcaption>Bio for Zach goes here</figcaption>
  </figure>

</div>
</div>

     ); }
else {
 return (<button className="linksButton" onClick={() => setViewAboutUs(true)}> About The Creators </button>);
}
}




