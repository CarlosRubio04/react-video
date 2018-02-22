import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-players-controls'; 
import Progressbar from '../components/progress-bar'

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: this.video.duration
		});
	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: this.video.currentTime
		})
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}
	render() {
		return(
			<VideoPlayerLayout>
				<Title
					title="El titulo va aca!"
				/>

				<Controls>
					<PlayPause
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer 
						duration={this.state.duration}
						currentTime={this.state.currentTime}
					/>
					<Progressbar
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
				</Controls>
	
				
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;