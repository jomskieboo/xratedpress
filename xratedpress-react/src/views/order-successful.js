import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './order-successful.css'

const OrderSuccessful = (props) => {
  return (
    <main className="order-successful-container">
      <Helmet>
        <title>Order-Successful - XratedPress</title>
        <meta property="og:title" content="Order-Successful - XratedPress" />
      </Helmet>
      <header data-role="Header" className="order-successful-header">
        <img
          alt="image"
          src="/external/picture1-1500h.png"
          className="order-successful-image"
        />
        <nav className="order-successful-nav">
          <Link to="/home-for-user" className="order-successful-home">
            Home
          </Link>
          <Link
            to="/contact-us-for-user"
            className="order-successful-contact-us"
          >
            Contact Us
          </Link>
          <Link to="/shop-for-user" className="order-successful-shop">
            Shop
          </Link>
          <Link to="/about-us-for-user" className="order-successful-about-us">
            About Us
          </Link>
        </nav>
        <div className="order-successful-container1">
          <div className="order-successful-btn-group"></div>
        </div>
        <div data-role="BurgerMenu" className="order-successful-burger-menu">
          <svg viewBox="0 0 1024 1024" className="order-successful-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="order-successful-mobile-menu">
          <div className="order-successful-nav1">
            <div className="order-successful-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="order-successful-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="order-successful-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="order-successful-icon02"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="order-successful-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="order-successful-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="order-successful-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <span className="order-successful-text">Welcome!</span>
        <Link to="/" className="order-successful-register button">
          Log Out
        </Link>
      </header>
      <div className="order-successful-banner">
        <h1 className="order-successful-text01">Order Successful!</h1>
        <h4 className="order-successful-text02">Thank you for purchasing.</h4>
        <Link to="/home-for-user" className="order-successful-navlink button">
          Back to Homepage
        </Link>
      </div>
      <footer className="order-successful-footer">
        <div className="order-successful-container3">
          <div className="order-successful-logo">
            <img
              alt="logo"
              src="/external/picture1-1500h.png"
              className="order-successful-image2"
            />
            <span className="order-successful-text03">
              Professional T-Shirt printing company.
            </span>
          </div>
          <div className="order-successful-links-container">
            <div className="order-successful-container4">
              <div className="order-successful-product-container">
                <span className="order-successful-text04">Product</span>
                <Link to="/shop-for-user" className="order-successful-navlink1">
                  Shop
                </Link>
              </div>
              <div className="order-successful-company-container">
                <span className="order-successful-text05">Company</span>
                <Link
                  to="/about-us-for-user"
                  className="order-successful-navlink2"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us-for-user"
                  className="order-successful-navlink3"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="order-successful-container5">
              <div className="order-successful-contact">
                <span className="order-successful-text06">Contact Us</span>
                <span className="order-successful-text07">
                  <span className="order-successful-text08">
                    jomariajaranilla@iskolarngbayan.pup.edu.ph
                  </span>
                  <br></br>
                  <br></br>
                  <span>gerardmarkcperalta@iskolarngbayan.pup.edu.ph</span>
                  <br></br>
                </span>
                <span>+63 919 820 9881</span>
              </div>
              <div className="order-successful-socials">
                <span className="order-successful-text14">Follow Us</span>
                <div className="order-successful-icon-group1">
                  <a
                    href="https://twitter.com/jmrxjrnll"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="order-successful-link"
                  >
                    <svg
                      viewBox="0 0 950.8571428571428 1024"
                      className="order-successful-icon10"
                    >
                      <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/jomskieboo/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="order-successful-link1"
                  >
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="order-successful-icon12"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077925273969"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="order-successful-link2"
                  >
                    <svg
                      viewBox="0 0 602.2582857142856 1024"
                      className="order-successful-icon14"
                    >
                      <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-successful-separator"></div>
        <span className="order-successful-text15">
          © 2023 XRATED PRESS, All Rights Reserved.
        </span>
      </footer>
    </main>
  )
}

export default OrderSuccessful
