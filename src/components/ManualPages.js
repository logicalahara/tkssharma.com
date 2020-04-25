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
import ts from '../../content/thumbnails/typescript.png'
import rx from '../../content/thumbnails/ngrx-logo.png'
import express from '../../content/thumbnails/express.png'
import rn from '../../content/thumbnails/rn.png';
import aws from '../../content/thumbnails/aws.png'

const manuals = [
  { name: 'React', image: react, url: '/Beginners-Guide-to-ReactJS' },
  { name: 'Redux', image: redux, url: '/React-redux-handbook-styleguide' },
  { name: 'Vue', image: vue, url: '/coming-up-for-beginners' },
  { name: 'Docker', image: docker, url: '/quick-introduction-to-docker-containers' },
  { name: 'K8S', image: k8s, url: '/kubernetes-in-nutshell — tutorial-for-beginners' },
  { name: 'Node', image: node, url: '/nodejs-from-bottom-to-top-for-beginners' },
  { name: 'Grpahql', image: graphql, url: '/graphql-handbook-for-developers' },
  { name: 'CSS', image: css, url: '/css-handbook-for-developers' },
  { name: 'Javascript', image: js, url: '/javascript-handbook-for-beginners' },
  { name: 'SQL', image: sql, url: '/coming-up-for-beginners' },
  { name: 'nestjs', image: nestjs, url: '/nestjs-handbook-for-developers' },
  { name: 'Angular', image: angular, url: '/angular-handbook-for-developers' },
  { name: 'Typescript', image: ts, url: '/javascript-handbook-for-beginners' },
  { name: 'NgRx', image: rx, url: '/javascript-handbook-for-beginners' },
  { name: 'Express', image: express, url: '/javascript-handbook-for-beginners' },
  { name: 'Patterns', image: ts, url: '/javascript-handbook-for-beginners' },
  { name: 'RN', image: rn, url: '/javascript-handbook-for-beginners' },
  { name: 'AWS', image: aws, url: '/javascript-handbook-for-beginners' },


]
export default class ManualPage extends Component {
  render() {
    return (
      <div className="gradient-section articles">
      <div className="container">
        <h2 className="text-center">Getting started : for beginners</h2>
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
