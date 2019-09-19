import React, { Component } from 'react';
import config from '../config'
import './Log.css'


export default class Log extends Component {
  state = {posts : [] };

  //state for posts
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/posts`)

      .then(res => res.json())
      .then(posts => this.setState({ posts }))
      .then(posts => console.log(posts))
  }


  render() {
    return(
      <div className="page">
        <div >
          {this.state.posts.map(post => (
            <div className="post" key={post.id}>{post.content}</div>
          ))}

          {/* {this.props.log.map(posts => (
            <div key={posts.id}>{posts.log}</div>
          ))} */}
        </div>
      </div>
    )
  }
}

