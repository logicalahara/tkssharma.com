import React, { Component } from 'react'
import { Link } from 'gatsby'
import docker from '../../content/thumbnails/docker.png'
import node from '../../content/thumbnails/node.png'
import redux from '../../content/thumbnails/redux.png'
import react from '../../content/thumbnails/react.png'
import graphql from '../../content/thumbnails/graphql.png'

import vue from '../../content/thumbnails/vue.png'
import k8s  from '../../content/thumbnails/k8slogo.png'
import js from '../../content/thumbnails/js.png'
import css from '../../content/thumbnails/scss.png'
import sql from '../../content/thumbnails/mysql.png'
import nestjs from '../../content/thumbnails/nestjs.png'
import angular from '../../content/thumbnails/angular.png'

const manuals = [
  { name: 'React', image: react, url: '/coming-up-for-beginners' },
  { name: 'Redux', image: redux, url: '/coming-up-for-beginners' },
  { name: 'Vue', image: vue, url: '/coming-up-for-beginners' },
  { name: 'Docker', image: docker, url: '/coming-up-for-beginners' },
  { name: 'K8S', image: k8s, url: '/coming-up-for-beginners' },
  { name: 'Node', image: node, url: '/coming-up-for-beginners' },
  { name: 'Grpahql', image: graphql, url: '/coming-up-for-beginners' },
  { name: 'CSS', image: css, url: '/coming-up-for-beginners' },
  { name: 'Javascript', image: js, url: '/coming-up-for-beginners' },
  { name: 'SQL', image: sql, url: '/coming-up-for-beginners' },
  { name: 'nestjs', image: nestjs, url: '/coming-up-for-beginners' },
  { name: 'Angular', image: angular, url: '/coming-up-for-beginners' },
]
export default class ManualPage extends Component {
  render() {
    return (
      <div className="gradient-section articles">
      <div className="container">
        <h2 className="text-center">Getting starters for beginners</h2>
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
