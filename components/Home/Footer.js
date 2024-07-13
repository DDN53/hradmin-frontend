import React from "react";
import "../Home/Footer.css";
import { TfiHandPointRight } from "react-icons/tfi";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { ImVimeo2 } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { TiSocialDribbbleCircular } from "react-icons/ti";
import { TiSocialVimeoCircular } from "react-icons/ti";
import {
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
} from "../../assests";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div className="newsletter-container">
          <h2>Weekly Newsletter</h2>
          <p className="footer-paragraph">
            There are many variations of passages of lorem ipsum available.
          </p>
        </div>
        <div className="newsletter-subscribe">
          <input type="email" placeholder="Enter Your Mail" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section about">
          <div className="about-us">
            <h3>About Us</h3>
            <p className="about-us-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="contact-info">
              <p>
                <i class="fa fa-phone"></i> | (+94) 11 434 7575
              </p>
              <p>
                <i class="fa fa-map-marker"></i> | 42 Lily Ave, Colombo 00600
              </p>
            </div>
          </div>
        </div>
        <div className="footer-section latest-news">
          <h3>Latest News</h3>
          <ul class="custom-list">
            <li>
              <a href="#" class="custom-link">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </a>
              <span>5 Minutes Ago</span>
            </li>
            <li>
              <a href="#" class="custom-link">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
              </a>
              <span>5 Minutes Ago</span>
            </li>
          </ul>
        </div>
        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul class="custom-list">
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                Support Forums
              </a>
            </li>
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                Communication
              </a>
            </li>
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                Rules & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="contact-link">
                <TfiHandPointRight className="hand-icon" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section customer-service-images">
          <h3>Customer Service</h3>
          <div className="image-grid">
            <img src={customer1} alt="Service 1" />
            <img src={customer2} alt="Service 2" />
            <img src={customer3} alt="Service 3" />
          </div>
          <div className="image-grid">
            <img src={customer4} alt="Service 1" />
            <img src={customer5} alt="Service 2" />
            <img src={customer6} alt="Service 3" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 All Rights Reserved. Site By Xiteb®</p>
        <div className="footer-social-icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <TiSocialVimeoCircular />
          </a>
          <a href="#">
            <AiFillTwitterCircle />
          </a>
          <a href="#">
            <AiFillBehanceCircle />
          </a>
          <a href="#">
            <TiSocialDribbbleCircular />
          </a>
        </div>
        <div class="up side-arrow">
          <FaArrowUpLong />
        </div>
      </div>
    </footer>
  );
}
