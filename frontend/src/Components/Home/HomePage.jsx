/* eslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import './HomePage.css';
import SVG1 from "../../assets/vectors/saveworld.svg";
import SVG2 from "../../assets/vectors/capable.svg";
import SVG3 from "../../assets/vectors/teamwork.svg";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { getHome, clearErrors } from '../../Actions/HomeActions';
import { useSelector, useDispatch } from 'react-redux';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 3 // optional, default to 1.
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
};

const HomePage = () => {
	const dispatch = useDispatch();
	const { home, homeCarousel, loading, error } = useSelector(state => state.home);

	const [currentIndex, setCurrentIndex] = useState(0);
	const totalSlides = homeCarousel.length;

	useEffect(() => {
		dispatch(getHome());
	}, [dispatch]);

	useEffect(() => {
		if (error) {
			alert(error);
			dispatch(clearErrors());
		}
	}, [error, dispatch]);

	const nextSlide = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
	}, [totalSlides]);

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
	};

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, [nextSlide]);

	// if (loading) {
	//     return <div>Loading...</div>;
	// }

	// if (!home || home.length === 0) {
	// 	return <div>No data available</div>;
	// }

	return (
		home && (
			<>
				<div className="home-page">
					<div className="carousel">
					{home.carouselImage?.map((item, index) => (
                    <div
                        key={item._id}
                        className="background-image"
                        style={{
                            backgroundImage: `url(${item.url})`,
                            display: index === currentIndex ? 'block' : 'none'
                        }}
                    ></div>
                ))}
						<button className="prev-btn" onClick={prevSlide}>&#10094;</button>
						<button className="next-btn" onClick={nextSlide}>&#10095;</button>
						<div className="carousel-heading">{home.carouselText}</div>
						<div className="carousel-caption">
						{home.carouselCaption}
						</div>
						<div className="carousel-indicate">
							{Array.from({ length: totalSlides }).map((_, index) => (
								<div
									key={index}
									className={`ellipse indicator ${index === currentIndex ? 'active' : ''}`}
									onClick={() => setCurrentIndex(index)}
								></div>
							))}
						</div>
					</div>

					<div>
						<ul className="highlight-section">
							<li>
								<h2>{home.highlightHeaderFirst}</h2>
								<p>{home.highlightCaptionFirst}</p>
							</li>
							<li>
								<h2>{home.highlightHeaderSecond}</h2>
								<p>{home.highlightCaptionSecond}</p>
							</li>
							<li>
								<h2>{home.highlightHeaderThird}</h2>
								<p>{home.highlightCaptionThird}</p>
							</li>
						</ul>
					</div>
					<div className="our-team-section">
						<div className="our-team-heading">{home.aboutHeader}</div>
						<div className="our-team-caption">{home.aboutCaption}</div>
						<div className="our-team-container">
							<div className="our-team-img">
								{home[0]?.aboutImage?.url && (
									<img src={home[0].aboutImage.url} alt="About Us" />
								)}
							</div>
							<div className="our-team-content">
								<p>{home.aboutContent}</p>
							</div>
						</div>
					</div>

					<div className="our-work-section">
						<div className="our-team-heading">{home.servicesHeader}</div>
						<div className="our-team-caption">{home.servicesCaption}</div>
					</div>
					<div className="parent">
						<Carousel
							responsive={responsive}
							autoPlay={true}
							swipeable={true}
							draggable={true}
							infinite={true}
						>
							{homeCarousel.map((item, index) => (
								<div className="slider" key={index}>
									<img src={item.image.url} alt="carousel" />
									<div className="overlay">
										<p className="text">{item.title}</p>
									</div>
								</div>
							))}
						</Carousel>
					</div>

					<div className="our-achievement">
						<div className="our-team-heading">{home.visionHeader}</div>
						<div className="our-team-caption">{home.visionCaption}</div>
						<ul>
							<li>
								<div className="our-achievement-svg">
									{home.visionImageFirst?.url && (
										<img src={home.visionImageFirst.url} alt='svg1' />
									)}
								</div>
								<h3>{home.visionHeaderFirst}</h3>
								<p>{home.visionCaptionFirst}</p>
							</li>
							<li>
								<div className="our-achievement-svg">
									{home.visionImageSecond?.url && (
										<img src={home.visionImageSecond.url} alt='svg2' />
									)}
								</div>
								<h3>{home.visionHeaderSecond}</h3>
								<p>{home.visionCaptionSecond}</p>
							</li>
							<li>
								<div className="our-achievement-svg">
									{home.visionImageThird?.url && (
										<img src={home.visionImageThird.url} alt='svg3' />
									)}
								</div>
								<h3>{home.visionHeaderThird}</h3>
								<p>{home.visionCaptionThird}</p>
							</li>
						</ul>
					</div>

					<div className="img-section home" style={{
						background: `url(${home.joinUsImage?.url}) 50% / cover no-repeat, linear-gradient(#D9D9D9, #D9D9D9)`
					}}>
						<div className="img-section-overlay"></div>
						<div className="img-section-heading">{home.joinUsHeader}</div>
						<span className="img-section-caption">{home.joinUsCaption}</span>
					</div>
					<div className="brand-section">
						<div className="our-team-heading">Our Collaborative Partners</div>
						<div className="our-team-caption">
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
	);
}

export default HomePage;
