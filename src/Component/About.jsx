import React from "react";
import "./About.css";
import img1 from './Assests/JEERA.png'
import img2 from './Assests/LEMON.png'
import img3 from './Assests/REGULAR.png'

const About = () => {
  return (
    <>
      <div className="about-main-cont">
        <div className="about-first-subcont">
          <div className="about-icon">
            <div className="icon1">
              <img
                src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_Whats.png?auto=format"
                alt=""
              />
              <p>What is Sodag?</p>
            </div>
            <div className="icon2">
              <img
                src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-what/desktop/Discover_Icon_The.png?auto=format"
                alt=""
              />
              <p>The sodag Journey</p>
            </div>
          </div>
          <div className="about-text">
            <div className="about-text-row row" style={{ margin: "0" }}>
              <div className="about-text-col col-lg-7 col-md-12 col-sm-12">
                <h2>The Beginning</h2>
                <p>
                  Our story begins in 1850 at a little pharmacy Groat Market,
                  Newcastle, England, where James Crossley sodag, a visionary
                  young man, was struck by a revolutionary idea to put an end to
                  digestive problems, and improve the lives of everyone.
                </p>
                <h2>The Breakthrough</h2>
                <p>
                  With a lot of hard work, and a little bit of luck, sodag Fruit
                  Salts instantly improved the lives of sailors from port to
                  port. To this day, sodag’s trusted formula of ingredients,
                  continues to get to work in 6 seconds, and better the lives of
                  people in India and around the world.
                </p>
              </div>
              <div className="about-pic-col col-lg-5 col-md-12 col-sm-12">
                <img
                  src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-the/desktop/Discover-TheENOJourney-JcENO.jpg?auto=format"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-second-subcont">
          <img
            src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-the/desktop/Discover-TheENOJourney-ENOFactoryUK.jpg?auto=format"
            alt=""
          />
        </div>
        <div className="about-third-subcont">
          <div className="about-third-row row">
            <div className="third-first-col col-lg-4 col-md-12 col-sm-12">
              <img
                src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-the/desktop/Discover-TheENOJourney-QuoteImage.jpg?auto=format"
                alt=""
              />
            </div>
            <div className="third-second-col col-lg-8 col-md-12 col-sm-12">
              <h3>
                "A world of woes is avoided by those who keep and use sodag's
                Fruit Salt; therefore no family should ever be without it."
              </h3>

              <p>- J.C. sodag</p>

              <p>Health Advocate, Philisopher, Writer, Inventor of sodag</p>
            </div>
          </div>
        </div>

        <div className="about-fourth-subcont">
          <div className="about-fourth-row row">
            <div className="fourth-first-col col-lg-8 col-md-12 col-sm-12">
              <h3>Early Advertising Of sodag</h3>

              <p>
                As if his day job wasn’t enough to keep him busy, James kept
                himself occupied by writing most of the sodag ads himself. He even
                brought them to life with a splash of colour by being one of the
                first to publish full-page colour print ads.
              </p>

              <p>
                Advertised as a mild medicine for digestive dysfunctions and
                intestinal problems, sodag started establishing its presence in
                newsstands from the 40s-60s.
              </p>
              <p>
                The introduction of a brand-new foil package in 1959, along with
                many campaigns in the 50s also brought about a change in its
                messaging to providing fast relief on the go.
              </p>
            </div>
            <div className="third-second-col col-lg-4 col-md-12 col-sm-12">
              <img
                src="https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/discover-eno/discover-the/desktop/Discover-TheENOJourney-OCruzeiroMagazine1.jpg?auto=format"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="about-fifth-subcont">
          <h2>Sodag Today</h2>
          <p>
            An innovative brand with credibility, Sodag is now available in
            fantastic flavours, as well as a new screw cap bottle in India for
            ease of use.
          </p>
          
<div class="img_container">
	<div class="img_item">
		<img src={img2}/>
	</div>
	<div class="img_item">
		<img src={img3}/>
	</div>
	<div class="img_item">
		<img src={img1}/>
	</div>
</div>
          <h2>The Taste Of Success</h2>
          <p>
            Today, we are a global brand in many countries including India,
            Brazil, South Africa, Thailand, Malaysia, Venezuela, and Spain.
            While times have changed in the past 150 years, Sodag hasn’t. Hitting
            the acidity roadblock isn’t uncommon when we live life in the fast
            lane. Sodag Fruit Salt gets to work in 6 seconds2. Let not acidity
            ever slow you down. Now get ready to live life non-stop with Sodag.
          </p>
        </div>

        
      </div>
    </>
  );
};

export default About;
