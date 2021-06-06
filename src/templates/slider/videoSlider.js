import React, { Component } from 'react'
import Slider from "react-slick";
import tks from '../../../content/images/profile.png'
const VideoSlider = ({ data }) => {
	const settings = {
	  dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	const template = data.map(function(item, index) {
		return (
			<div key={index}>
				<Video data={item} />
			</div>
		);
	});
	return (
		<div className="carousel">
			<div className="news">
				<Slider {...settings}>{template}</Slider>
			</div>
		</div>
	);
};

const Video = ({ data }) => {
	var image = data.snippet.thumbnails.medium.url,
		imageAlt =  data.snippet.title,
		imageTitle = data.snippet.title,
		imageSocial = data.snippet.thumbnails.default.url,
		imageSocialAlt =  data.snippet.title,
		imageSocialTitle = data.snippet.title,
		title = data.snippet.title,
		subTitle = data.snippet.description.substr(0,50),
		text = data.snippet.title,
		link = ''
	return (
		<figure className="card-container">
			<div className="card">
				<img className="card-hero-img" src={image} alt={imageAlt} title={imageTitle} />
				<div className="card-heading-container">
					<img className="card-social-icon" src={tks} alt={imageSocialAlt} title={imageSocialTitle} />
					<div className="card-title-container">
						<h3 className="card-title">{title}</h3>
						<p className="card-sub-title">{subTitle}</p>
					</div>
				</div>
				<div className="card-text-container">
					<p className="card-text">{text}</p>
				</div>
				<div className="icon-container">
					<i className="far fa-heart heart-icon" />
					<p className="heart-liked-text">Liked +1</p>
				</div>
			</div>
			<a href={link} target="_blank" />
		</figure>
	);
};

export default VideoSlider;
