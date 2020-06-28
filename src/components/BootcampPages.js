import React, { Component } from 'react'
import { Link } from 'gatsby'
import docker from '../../content/thumbnails/docker.png'
import node from '../../content/thumbnails/node.png'
import redux from '../../content/thumbnails/redux.png'
import react from '../../content/thumbnails/react.png'
import html5 from '../../content/thumbnails/html5.png'

import js from '../../content/thumbnails/js.png'
import css from '../../content/thumbnails/scss.png'

const manuals = [
  { name: 'React', image: react, url: '/react-js-bootcamp' },
  { name: 'Redux', image: redux, url: '/redux-bootcamp'},
  { name: 'Node', image: node, url: '/node-js-bootcamp' },
  { name: 'CSS', image: css, url:'/css-bootcamp' },
  { name: 'Javascript', image: js, url: '/javascript-bootcamp' },
  { name: 'html5', image: html5, url: '/html5-bootcamp' },
]
export default class ManualPage extends Component {
  render() {
    return (
      <div className="gradient-bootcamp-section articles">
      <div className="container">
        <h2 className="text-center">Bootcamp For Developers | Keep Learning </h2>
        <div className="instruction-manuals">
          {manuals.map(manual => (
            <Link to={manual.url}>
              <img src={manual.image} alt={manual.name} />
              <h3>{manual.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
    )
  }
}
