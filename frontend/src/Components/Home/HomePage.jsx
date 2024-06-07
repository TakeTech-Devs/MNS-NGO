/* eslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import SVG1 from "../../assets/vectors/saveworld.svg";
import SVG2 from "../../assets/vectors/capable.svg";
import SVG3 from "../../assets/vectors/teamwork.svg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/rectangle8.png";
import img2 from "../../assets/images/rectangle9.png";
import img3 from "../../assets/images/rectangle10.png";
import Navbar from '../Navbar/Navbar';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3// optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 2,
		slidesToSlide: 2 // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 1,
		slidesToSlide: 1 // optional, default to 1.
	}
}


const sliderImageUrl = [
	{
		url: img1,
		text: "FINANCIAL INCLUSION",
	},
	{
		url: img2,
		text: "EDUCATIONAL ACTIVITY",
	},
	{
		url: img3,
		text: "HEALTH ABD HYGIENE",
	},
	{
		url: img2,
		text: "AWARENESS PROGRAMMS",
	},
	{
		url: img3,
		text: "WOMEN EMPOWERMENT",
	},
	{
		url: img1,
		text: "YOUTH DEVELOPMENT",
	},
	{
		url: img3,
		text: "CHILD DEVELOPMENT",
	},
	{
		url: img1,
		text: "AGRICULTURAL DEVELOPMENT",
	},
];


const HomePage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const carouselItems = [
		require('../../assets/images/rectangle4.png'),
		require('../../assets/images/rectangle7.png'),
		require('../../assets/images/rectangle8.png'),
		require('../../assets/images/rectangle10.png')
	];

	const totalSlides = carouselItems.length;

	function goToSlide(index) {
		setCurrentIndex(index);
	}

	const nextSlide = useCallback(() => {
		if (currentIndex < totalSlides - 1) {
			setCurrentIndex(currentIndex + 1);
		} else {
			setCurrentIndex(0);
		}
	}, [currentIndex, totalSlides]);

	function prevSlide() {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		} else {
			setCurrentIndex(totalSlides - 1);
		}
	}

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [currentIndex, nextSlide]);

	// const [menuOpen, setMenuOpen] = useState(false);

	// const toggleMenu = () => {
	//     setMenuOpen(!menuOpen);
	// };
	return (
		<>
			<Navbar />
			<div className="home-page">
				<div className="carousel">
					{carouselItems.map((item, index) => (
						<div
							key={index}
							className="background-image"
							style={{ backgroundImage: `url(${item})`, display: index === currentIndex ? 'block' : 'none' }}
						></div>
					))}
					<button className="prev-btn" onClick={prevSlide}>&#10094;</button>
					<button className="next-btn" onClick={nextSlide}>&#10095;</button>



					<div className="carousel-heading">Empowering Communities, Transforming Lives</div>
					<div
						className="carousel-caption"
					>
						Join Mallarpur Naisuva in our mission to break the cycle of poverty and foster inclusive development.
					</div>
					<div className="carousel-indicate">
						{Array.from({ length: totalSlides }).map((_, index) => (
							<div
								key={index}
								className={`ellipse indicator ${index === currentIndex ? 'active' : ''}`}
								onClick={() => goToSlide(index)}
							></div>
						))}
					</div>
				</div>



				<div>
					<ul className="highlight-section">
						<li>
							<h2>Compassion</h2>
							<p>Embracing empathy, fostering kindness</p>
						</li>
						<li>
							<h2>Integrity</h2>
							<p> Upholding ethics, ensuring trustworthiness</p>
						</li>
						<li>
							<h2>Empowerment</h2>
							<p>Inspiring growth, nurturing resilience</p>
						</li>
					</ul>
				</div>
				<div className="our-team-section">
					<div className="our-team-heading">About Mallarpur Naisuva</div>
					<div
						className="our-team-caption"
					>
						Empowering communities, transforming lives. Join us in breaking the cycle of poverty and fostering inclusive development.
					</div>
					<div className="our-team-container">
						<div className="our-team-img">

						</div>
						<div className="our-team-content">
							<p>
								Mallarpur Naisuva is a beacon of hope, dedicated to uplifting the most vulnerable segments of our society. Founded on principles of compassion and social responsibility, our journey began with a vision to extend a helping hand to those in dire need – the poor, elderly, sick, women, and children.
							</p>

							<p>
								Established under the West Bengal Societies Registration Act (XXI) of 1961, Mallarpur Naisuva embodies a commitment to transparency, integrity, and unwavering dedication to our cause. For over three decades, we have remained steadfast in our mission to foster a society where every individual can thrive with dignity.
							</p>

						</div>
					</div>
				</div>

				<div className="our-work-section">
					<div className="our-team-heading">Our Services</div>
					<div
						className="our-team-caption"
					>
						Empowering Communities Through Compassionate Initiatives
					</div>

				</div>
				<div className="parent">
					<Carousel
						responsive={responsive}
						autoPlay={true}
						swipeable={true}
						draggable={true}
						// showDots={true}
						infinite={true}
						partialVisible={false}
					// arrows={false}
					// dotListClass="custom-dot-list-style"
					>
						{sliderImageUrl.map((item, index) => {
							return (
								<div className="slider" key={index}>
									<img src={item.url} alt="movie" />
									<div class="overlay">
										<p class="text">{item.text}</p>
									</div>
								</div>
							);
						})}
					</Carousel>
				</div>

				<div class="our-achievement">
					<div class="our-team-heading">Vision of the Organization</div>
					<div class="our-team-caption">
						Organization aims to break the vicious cycle of poverty and social isolation and to restore hope for a better future. We believe that every person has the right to access resources and opportunities in order to live and develop with dignity and to become an active and contributing member of our society.
					</div>
					<ul>
						<li>
							<div class="our-achievement-svg">
								<img src={SVG3} alt='svg1' />
							</div>
							<h3>People's Organizations</h3>
							<p>We empower individuals and build their capacities.</p>
						</li>
						<li>
							<div class="our-achievement-svg">
								<img src={SVG2} alt='svg1' />
							</div>
							<h3>Empowering Women</h3>
							<p>We support women to reach their full potential.</p>
						</li>
						<li>
							<div class="our-achievement-svg">
								<img src={SVG1} alt='svg1' />
							</div>
							<h3>Sustainable Development</h3>
							<p>We implement sustainable models for community health and rural development.</p>
						</li>
					</ul>
				</div>


				<div className="img-section home">
					<div className="img-section-overlay"></div>
					<div className="img-section-heading">Join Us in Creating Positive Change</div>
					<span
						className="img-section-caption"
					>
						Join Mallarpur Naisuva in our mission to empower communities, uplift the vulnerable, and build a brighter future for all.
					</span>
				</div>
				<div className="brand-section">
					<div className="our-team-heading">Our Collaborative Partners</div>
					<div
						className="our-team-caption"
					>
						We are proud to collaborate with the following brands and organizations who share our commitment to positive change:
					</div>
					<div className="brand-logo-section">
						<ul>
							<li>
								<span> BRAND </span>
							</li>
							<li >
								<span> BRAND </span>
							</li>
							<li >
								<span > BRAND </span>
							</li>
							<li >
								<span > BRAND </span>
							</li>
							<li>
								<span> BRAND </span>
							</li>
							<li>
								<span> BRAND </span>
							</li>
							<li>
								<span> BRAND </span>
							</li>
							<li>
								<span> BRAND </span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage