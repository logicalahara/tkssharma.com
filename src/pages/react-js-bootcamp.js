import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import SEO from '../components/SEO'
import react from '../../content/thumbnails/react.png'

export default class PublicationsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Published Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="container bootcamp-card">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="flex display-drection" style={{ justifyContent: 'space-around'}}>
              <div>
                <img style={{height: '200px'}} src={react} alt="" />
              </div>
              <div className="">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  React JS Bootcamp 🔭 🎯🎺
                </h2>
                <h4 className="mt-2 text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-3xl">
                  A Free online training program
                </h4>
                <p className="max-w-md mx-auto text-base text-gray-500 sm:text-lg  md:text-xl md:max-w-3xl">
                  Grow your skills. Become a better developer. <br />Get ready for your first coding job.
                </p>

                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <div className="mt-3  sm:mt-0 sm:ml-3">
                    <span href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md  focus:outline-none focus:shadow-outline-blue transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                      Starting May 25, 2020
                    </span>
                  </div>
              
                </div>
              </div>             
            </div>
          </div>
        </div>
        <div className="video-container container bootcamp-card">
          <iframe
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
            src={`https://www.youtube.com/embed/videoseries?list=PLIGDNOJWiL199L4vixrgMgmvLJXA-n_0q`}
          />
        </div>
      </Layout>
    )
  }
}
