/* eslint-disable */
import React, { useEffect } from "react";
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
import { useSelector, useDispatch } from 'react-redux';
import { getAbout, clearErrors } from '../../Actions/AboutUsActions';

const values = [
	{ name: "Compassion", image: Compassion },
	{ name: "Empowerment", image: Empowerment },
	{ name: "Integrity", image: Integrity },
	{ name: "Collaboration", image: Collaboration },
];

const About = () => {

	const dispatch = useDispatch();
	const { about, valueImage, error } = useSelector(state => state.about);

	useEffect(() => {
		dispatch(getAbout());
	}, [dispatch]);

	useEffect(() => {
		if (error) {
			alert(error);
			dispatch(clearErrors());
		}
	}, [error, dispatch]);

	return (
		about && about.length > 0 && (
			<>
				<div className="commonBanner-wrapper about" style={{
					background: about.length > 0 ? `url(${about[0].headerImage.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)` : ""
				}}>
					<div className="common-banner">
						<h1 className="our-team-heading">{about[0].header}</h1>
						<p className="our-team-caption">{about[0].caption}</p>
					</div>
				</div>

				<div className="about-gallery">
					<div className="about-gallery-background">
						<h2 class="our-team-heading">We done with <br />Your help!</h2>
					</div>

					<div className="about-gallery-wrapper">
						<div className="about-gallery-img-one">
							<img src={about[0].images[0].url} />
						</div>
						<div className="about-gallery-img-two">
							<div className="about-gallery-img-wrap">
								<img src={about[0].images[1].url} />
							</div>
						</div>
						<div className="about-gallery-img-three">
							<img src={about[0].images[2].url} />
						</div>
						<div className="about-gallery-img-four">
							<div className="about-gallery-img-wrap">
								<img src={about[0].images[3].url} />
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
					<div className="our-team-heading">{about[0].ourValuesHeader}</div>
					<p className="our-team-caption">
						{about[0].ourValuesContent}
					</p>
					<div className="ValuePoints-wrapper">

						<ul className="Values">
							{valueImage && valueImage.map((value, index) => (
								<li key={index} className="ValuePoints">
									<div className="ValueImage">
										<img src={value.image.url} alt={value.title} />
									</div>
									<p>{value.title}</p>
								</li>
							))}
						</ul>

						<div className="ValueHead">{about[0].caption}</div>
					</div>

				</div>

				<div className="img-section about" style={{
					background: `url(${about[0].getInvolvedImage.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)`
				}}>
					<div className="img-section-overlay"></div>
					<div className="img-section-heading">{about[0].getInvolvedHeader}</div>
					<span
						className="img-section-caption"
					>
						{about[0].getInvolvedCaption}
					</span>
				</div>
			</>
		)
	);
};

export default About;
