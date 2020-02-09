import React, { Component } from 'react'

export default class SimpleListing extends Component {

  constructor(props){
    super(props);
    this.state = {
     index : 5,
   }
  }

 SeeMore(){
   this.setState(i => {
     // eslint-disable-next-line no-param-reassign
     i.index += 5;
     return i;
   });
 }

  render() {
    const { data } = this.props

    const getImage = (post) => {
      return  post.snippet?.thumbnails?.default?.url

    }
    return (
      <section className="simple-posts">
        {data && Array.isArray(data) && data.slice(0, this.state.index).map(post => {
          return (
            <a href={`https://www.youtube.com/embed/videoseries?list=${post.id}`} key={post.snippet.title} target="_blank" rel="noopener noreferrer">
              <div className="each">
                <h2>
                  {post && <img src={getImage(post)} alt={post.snippet.title} />}
                  {post.snippet.title}
                </h2>
              </div>
            </a>
          )
        })}
        <button onClick={this.SeeMore.bind(this)}>See More</button>
      </section>
    )
  }
}
