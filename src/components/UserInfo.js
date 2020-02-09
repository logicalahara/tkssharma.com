import React, { Component } from 'react'
import patreon from '../../content/thumbnails/patreon.png'
import tks from '../../content/images/profile.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={tks} alt="Tania Rascia" />
            </div>
            <div>
              <p>
              I am Publisher, Trainer Developer, working on Enterprise and open source Technologies JavaScript frameworks (React Angular 2.x), I work with client side and server side javascript programming which includes node js or any other frameworks Currently working with JavaScript framework React & Node js 🚀 with Graphql 🎉
                <strong>
                I am passionate Javascript developer writing end to end application using javascript using React, Angular 🅰️, Vue JS with Node JS
                </strong>
              </p>

              <div className="flex">
                <a
                  className="patreon-button"
                  href="https://www.patreon.com/tkssharma"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" alt="Patreon" /> Become a Patron
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
