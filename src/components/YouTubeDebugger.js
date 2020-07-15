import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  handleResClick = () => {
    // let newState = this.state
    // newState.settings.video.resolution = '720p'
    // this.setState(newState)
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return(
      <div>
        <button className="bitrate" onClick={this.handleClick}></button>
        <button className="resolution" onClick={this.handleResClick}></button>
      </div>
    )
  }
}