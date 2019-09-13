import React, { Component } from 'react';
import config from '../config'


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
      <div>
        <h1>Log</h1>
        <div>
          {this.state.posts.map(post => (
            <div key={post.id}>{post.content}</div>
          ))}

          {/* {this.props.log.map(posts => (
            <div key={posts.id}>{posts.log}</div>
          ))} */}
        </div>
      </div>
    )
  }
}

