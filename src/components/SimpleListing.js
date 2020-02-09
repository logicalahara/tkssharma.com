import React, { Component, Fragment } from 'react'

export default class SimpleListing extends Component {

   constructor(props){
     super(props);
     this.state = {
      index : 5,
    }
   }

  SeeMore(){
    this.setState({index: this.state.index + 5});
  }

  render() {
    const { data } = this.props

    return (
      <section className="simple-posts">
        {data.slice(0, this.state.index).map(post => {
          return (
            <Fragment>
              <a href={post.path} key={post.title} target="_blank" rel="noopener noreferrer">
                <div className="each">
                  <h2>
                    <img src={post.img} alt={post.title} />
                    {post.title}
                  </h2>
                </div>
              </a>
            </Fragment>
          )
        })}
        <button onClick={this.SeeMore.bind(this)}>See More</button>
      </section>
    )
  }
}
