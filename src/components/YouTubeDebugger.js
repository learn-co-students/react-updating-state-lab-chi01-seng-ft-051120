// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super();
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

    changeBitrate = () => {
        let newBitrate = 12;
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: newBitrate
            }
        })
    }

    changeResolution = () => {
        let newResolution = '720p'
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: newResolution
                }
            }
        })
    }
    
    render() {
        return <div>
            <button className="bitrate" onClick={this.changeBitrate}></button>
            <button className="resolution" onClick={this.changeResolution}></button>
        </div>
    }
}