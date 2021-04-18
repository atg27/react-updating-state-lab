import React, { Component } from 'react'

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

      handleClickBit = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
          });
      }

      handleClickRes = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              video: {
                  ...this.state.video,
                  resolution: "720p"
              }
            }
          });
      }

    render() {
        return (
            <div>
                <button onClick={this.handleClickBit} className="bitrate">change bitrate</button>
                <button onClick={this.handleClickRes} className="resolution">change resolution</button>
            </div>
        )
    }
}

