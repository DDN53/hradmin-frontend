import React from "react";
import "./Wellcome.css";
import {  wellcome } from "../../assests";

export default function Wellcome() {
  return <div className="wellcome"><div className="images">
  <img src={wellcome} alt="Worker with clipboard" />
  
</div>
<div className="content">
<div class="private-division"></div>


<h2 className="text-with-line-space">
  TransMax Logistics<br/>
  Around <span className="orange-text">the World</span>
</h2>
  <p className="paragrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
 
  <button>More About Us <span>&rarr;</span></button>
</div></div>;
}