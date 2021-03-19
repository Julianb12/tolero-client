import React, { Component } from 'react';
import config from '../config'
import './Log.css'


export default class Log extends Component {
  state = { posts: [] };

  //state for posts
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/posts`)

      .then(res => res.json())
      .then(posts => this.setState({ posts }))

  }


  render() {
    return (
      <div className="page">
        <div>
          {this.state.posts.map((post, index) => (
            <div className="post" key={index}>{post.content}</div>
          ))}


        </div>
      </div>
    )
  }
}

