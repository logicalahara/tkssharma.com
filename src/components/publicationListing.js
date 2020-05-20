import React, { Component } from 'react'
import { Link } from 'gatsby';
import { transform } from '../utils/global';

export default class SimpleListing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 5,
    }
  }

  SeeMore() {
    this.setState(i => {
      // eslint-disable-next-line no-param-reassign
      i.index += 5;
      return i;
    });
  }

  render() {
    const { data } = this.props

    /* const getImage = (post) => {
      return post.snippet?.thumbnails?.default?.url
    } */
    return (
      <section className="simple-posts">
        {data && Array.isArray(data) && data.slice(0, this.state.index).map(post => {
          const key = post.snippet.title && transform(post.snippet.title);
          return (
            <Link key={key} to={`/publications/${key}`} target="_blank" rel="noopener noreferrer">
              <div className="each">
                <h2>
                  {post && '🚀⚛'}
                  {post.snippet.title}
                </h2>
              </div>
            </Link>
          )
        })}
        <button onClick={this.SeeMore.bind(this)}>See More</button>
      </section>
    )
  }
}
