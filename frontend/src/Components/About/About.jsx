/* eslint-disable */
import React from "react";
import "./About.css";
import Compassion from "../../assets/vectors/compassion.svg"
import Empowerment from "../../assets/vectors/empowerment.svg"
import Integrity from "../../assets/vectors/integrity.svg"
import Collaboration from "../../assets/vectors/collaboration.svg"
import Navbar from "../Navbar/Navbar";

const About = () => {
    return (
        <>
        <Navbar />
		<div className="about-us-page">
			<div className="about-upper">
				<div>
					<h2 className="our-team-heading">About Us</h2>
					<p className="our-team-caption">Welcome to Mallarpur Naisuva, where our mission is to empower communities, uplift the vulnerable, and create positive change in society.</p>
				</div>
			</div>
			<div className="our-story-section our-achievement">
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

				<div className="container-image-2">
					<div className="rectangle-7"></div>
					<div className="rectangle-9"></div>
				</div>
				<div className="rectangle-8"></div>
				<div className="rectangle-10"></div>
			</div>
			
			<div className="OurValues">
				<div className="our-team-heading">Our Values</div>
				<p className="OurValues-caption">
					At Mallarpur Naisuva, we are guided by a set of core values that shape everything we do
				</p>
				<div className="ValuePoints-wrapper">
					<ul className="Values">
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Compassion}/>
							</div>
							<p>Compassion</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Empowerment}/>
							</div>
							<p>Empowerment</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Integrity}/>
							</div>
							<p>Integrity</p>
						</li>
						<li className="ValuePoints">
							<div className="ValueImage">
								<img src={Collaboration}/>
							</div>
							<p>Collaboration</p>
						</li>
					
					</ul>
					<div className="ValueHead">Our Values</div>
				</div>

			</div>
			
			<div className="get-involved-section">
				<div className="rectangle-26"></div>
				<div className="get-involved-heading">Get Involved</div>
				<span className="get-involved-caption">
					Join us in our mission to create a brighter future for all. Whether through volunteering, donating, or spreading awareness, your support makes a difference.
				</span>
			</div>
		</div>
        </>
	);
};

export default About;