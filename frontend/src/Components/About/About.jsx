/* eslint-disable */
import React from "react";
import "./About.css";
import "./../Home/HomePage.css";
import Compassion from "../../assets/vectors/compassion.svg"
import Empowerment from "../../assets/vectors/empowerment.svg"
import Integrity from "../../assets/vectors/integrity.svg"
import Collaboration from "../../assets/vectors/collaboration.svg"
import rectangle from "../../assets/images/rectangle8.png"
import rectangletwo from "../../assets/images/rectangle9.png"
import rectanglethree from "../../assets/images/rectangle10.png"
import rectanglefour from "../../assets/images/rectangle101.png"

const About = () => {
	return (
		<>
			<div className="commonBanner-wrapper about">
				<div className="common-banner">
					<h1 className="our-team-heading">About Us</h1>
					<p className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</p>
				</div>
			</div>
			<div className="our-achievement">
				<div className="our-team-heading">Our Story</div>
				<div className="our-team-caption">
					Mallarpur Naisuva was founded with a vision to make a difference in the lives of those most in need. What began as a small group of individuals inspired by the spirit of social work has evolved into a full-fledged NGO dedicated to rural development and community empowerment.
				</div>
				<div className="our-team-caption">
					Our vision is to break the cycle of poverty and social isolation, restoring hope for a better future. We envision a world where every person has access to resources and opportunities for development, and where no one is left behind.
				</div>
				<div className="our-team-caption">
					Over the years, Mallarpur Naisuva has made significant strides in empowering communities and fostering positive change. From education and healthcare initiatives to women's empowerment programs and environmental conservation efforts, our impact is felt across various sectors.
				</div>
			
			</div>
			<div className="about-gallery">
					<div className="about-gallery-background">
						<h2 class="our-team-heading">We done with <br/>Your help!</h2>
					</div>
					<div className="about-gallery-wrapper">
						<div className="about-gallery-img-one">
							<img src={rectangle}/>
						</div>
						<div className="about-gallery-img-two">
							<div className="about-gallery-img-wrap">
								<img src={rectangletwo}/>
							</div>
						</div>
						<div className="about-gallery-img-three">
							<img src={rectanglethree}/>
						</div>
						<div className="about-gallery-img-four">
							<div className="about-gallery-img-wrap">
								<img src={rectanglefour}/>
							</div>
						</div>
						<div className="about-gallery-dot-one">
						</div>
						<div className="about-gallery-dot-two">
						</div>
						<div className="about-gallery-dot-three">
						</div>
					</div>
				</div>
			<div className="OurValues">
				<div className="our-team-heading">Our Values</div>
				<p className="our-team-caption">
					At Mallarpur Naisuva, we are guided by a set of core values that shape everything we do
				</p>
				<div className="ValuePoints-wrapper">
					<ul className="Values">
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Compassion} />
							</div>
							<p>Compassion</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Empowerment} />
							</div>
							<p>Empowerment</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Integrity} />
							</div>
							<p>Integrity</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Collaboration} />
							</div>
							<p>Collaboration</p>
						</li>

					</ul>
					<div className="ValueHead">Our Values</div>
				</div>

			</div>

			<div className="img-section about">
				<div className="img-section-overlay"></div>
				<div className="img-section-heading">Get Involved</div>
				<span
					className="img-section-caption"
				>
					Join us in our mission to create a brighter future for all. Whether through volunteering, donating, or spreading awareness, your support makes a difference.
				</span>
			</div>
		</>
	);
};

export default About;
