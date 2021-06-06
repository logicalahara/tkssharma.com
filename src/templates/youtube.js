import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';
import SEO from '../components/YoutubeSeo';
import UserInfo from '../components/UserInfo';
const Data = require('../../data/publications');
import VideoSlider from './slider/videoSlider';
const masterData = require('../../content/json/masterData');
const transform = (str) => {
	const title = str.replace(/\s\s+/g, ' ');
	return title.split(' ').join('-');
};

const fetchData = (id) => {
	return masterData.filter((i) => {
		return i.key === id;
	})[0];
};
export default class PublishedVideoTemplate extends Component {
	render() {
		let titleData = {};
		const { key } = this.props.pageContext;
		const result = Data.YouTube.filter((i) => {
			titleData = i.snippet.title && transform(i.snippet.title);
			return key === titleData;
		})[0];
		const masterList = fetchData(result.id);
		const playlistItems = masterList.value;

		const getStyle = (url) => {
			return {
				backgroundImage: `url(${url})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '300px',
        marginTop: '-40px',
				backgroundPosition: 'center'
			};
		};
		return (
			<Layout>
				<Helmet>
					<title>{`${result.snippet.title}`}</title>
				</Helmet>
				<SEO postPath={key} key={key} postNode={result} postSEO />
				<div className="youtube-container">
					<section style={getStyle(result.snippet.thumbnails.maxres.url)} />
          <section className="section">
          <h3 className="text-center">YouTube training Videos.</h3>
          <div className="lesson-without-playlist-holder">
            <div className="lessons-frame-holder">
              <div className="lessons-frame ">
                <section className="section text-center">
                  <div className="video-container">
                    <iframe
                      frameBorder="0"
                      width="100%"
                      height="500"
                      allow='autoplay'
                      allowFullScreen=""
                      allowFullScreen=""
                      src={`https://www.youtube.com/embed/videoseries?list=${result.id}`}
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        <VideoSlider data={playlistItems} />
        </div>
				<UserInfo config={config} />
			</Layout>
		);
	}
}
