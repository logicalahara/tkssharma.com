import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import config from '../../data/SiteConfig'
import SEO from '../components/SEO'
import html5 from '../../content/thumbnails/html5.png'

export default class PublicationsPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Published Articles – ${config.siteTitle}`} />
        <SEO />
        <div className="container bootcamp-card">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            <div className="flex" style={{ justifyContent: 'space-around'}}>
              <div>
                <img style={{height: '200px'}} src={html5} alt="" />
              </div>
              <div className="">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                  HTML5 Web development Bootcamp 🔭 🎯🎯
                </h2>
                <h4 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-3xl sm:leading-none md:text-3xl">
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

        <div className="container bootcamp-card">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
            Course Agenda <br />

            01.01 - Welcome to Introduction to HTML
            01.02 - The Evolution of HTML
            01.03 - How it Works: The "Magic" of Page Requests
            01.04 - Looking at Your Browser Options
            01.05 - Editors: How to use an editor to create an HTML file

            Browsers
            02.01 - The Document Object Model [DOM]
            02.02 - HTML5 Tags and Syntax
            02.03 - Semantic Tags
            02.04 - Template Page
            02.05 - Images
            Font Awesome Demo
            02.06 - Hyperlinks
            02.07 - Multimedia
            02.08 - Tables
            02.09 - Useful Tags

            Cheatsheets


            Module 1: HTML Review
            Module 2: Feature Detection
            What we strive for?
            Browser Detection
            Feature Detection
            Modernizr
            Polyfills

            Module 3: The HTML5 New Elements
            Structural Elements
            New Form/Input Elements
            New Attributes

            Module 4: Canvas
            Canvas - The Future of Graphics on the Web
            Simple Shapes
            Shape Styles
            Complex Shapes
            Text & Shadows
            Canvas Pitfalls
            Canvas & SVG
            WebGL

            Module 5: Video and Audio
            HTML5 & RIA
            Video and audio in the web
            How multimedia looks like to a computer?
            Video/audio formats and codecs
            Controlling your multimedia with javascript
            Code example – loop
            Video and audio lab
            Lab: Video and audio
            Summary

            Module 6: Web Storage
            Introduction
            Web Storage vs. Cookies
            Storage types
            Methods and Properties
            Events

            Module 7: Geolocation
            Introduction
            Geolocation API

            Module 8: Offline Web Pages
            What are Offline Web Pages?
            The Manifest File
            AppCache API
            Connectivity API

            Module 9: Microdata
            Web 3.0: the next revolution.
            The web is full of plain data
            The solution: Microdata
            Microdata usage
            Microdata tags
            The vocabulary
            Microdata – case study
            Other Microdata tags
            Google vocabulary
            Javascript API for microdata
            Summary
            Lab

            Module 10: HTML5 APIs
            HTML5 JavaScript APIs: overview
            Web Sockets
            Web Workers
            IndexedDB
            Drag-and-Drop
            Web Notifications
            Other APIs

            Module 11: Migrating From HTML4 to HTML5
            Migration Check List
            Migration Sample
            Module 12: CSS3
            What is CSS3 in a nutshell?
            Backgrounds
            Border
            Color
            Fonts
            Media Queries
            Namespace
            Text
            Multi-column layout
            Selectors
            Content

          </div>
        </div>
      
      </Layout>
    )
  }
}
