import React from "react";
import "./Home.css";
import image6 from "../Component/Assests/6.jpg";
import image7 from "../Component/Assests/7.jpg";
import image8 from "../Component/Assests/8.jpg";
import image1 from "../Component/Assests/1.jpg";
import image2 from "../Component/Assests/2.jpg";
import image3 from "../Component/Assests/3.jpg";
import image4 from "../Component/Assests/4.jpg";
import image5 from "../Component/Assests/5.jpg";
import  Header from './Header'

function Home() {
  return (
    <>
    <Header/>
    <div className="main-container">
      <section className="about">
        <div className="about-container">
          <h3>ABOUT</h3>
        </div>
        <div className="about-paragraph">
          Welable Pharma is an entity working insistently towards the wellbeing
          of the human kind.With its wide and unique range of products ,it has
          also been taking care of the flora and fauna of mother nature.
        </div>
      </section>

      <section className="products">
        <div className="products about-container">
          <h3>PRODUCTS</h3>
        </div>
        <div className="row cards-container">
          <div className="cards col col-lg-3 col-md-6 col-sm-12">
            <div className="logos center-class">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="cards col col-lg-3 col-md-6 col-sm-12">
            <div className="logos">
              <img src={image5} alt="" />
            </div>
          </div>
          <div className="cards col col-lg-3 col-md-6 col-sm-12">
            <div className="logos">
              <img src={image3} alt="" />
            </div>
          </div>
          <div className="cards col col-lg-3 col-md-6 col-sm-12">
            <div className="logos">
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="videos-cont ">
        <div className="videos about-container">
          <h3>VIDEOS</h3>
        </div>
        <div className="row video-cont ">
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
        </div>
      </section>

      <section className="connections-cont">
        <div className="connections about-container">
          <h3>CONNECTIONS</h3>
        </div>
        <div className="row social-media">
          <div className="facebook-cont  col-lg-6 col-md-6 col-sm-12">
            <div className="fb-heading">
              <h1>FACEBOOK</h1>
            </div>
            <iframe
              src="https://www.facebook.com/profile.php?id=100004966185216"
              frameborder="5"
            >
              <h1>My Facebook Account</h1>
            </iframe>
          </div>
          <div className="facebook-cont col-lg-6 col-md-6 col-sm-12">
            <div
              className="insta-heading"
             
            >
              <h1>INSTAGRAM</h1>
            </div>
            <iframe
              src="https://www.instagram.com/_.satyam.chitransh._/"
              frameborder="5"
            >
              My Instagram Account
            </iframe>
          </div>
        </div>
      </section>
      <section className="network-cont">
        <div className="network about-container">
          <h3>JOIN OUR DISTRIBUTOR NETWORK</h3>
        </div>
       <div className="network-img">
         <div className="network-bg-img">
           <div className="netwotk-text-but">
           <p>
             In constant development, Walable Pharma is looking for new partner to expand its network.
             Come join us !
           </p>
           <button type="button" class="btn btn-primary">Read More</button>
           </div>
         </div>
       </div>
      </section>
    </div>
    </>
  );
}

export default Home;
