import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-players-controls'; 
import Progressbar from '../components/progress-bar';
import Spiner from '../components/spiner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0,
		loading: false,
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
	handleSeeking = event => {
		this.setState({
			loading: true
		})
	}
	handleSeeked = event => {
		this.setState({
			loading: false
		})
	}
	handleVolumeChange = event => {
		this.video.volume = event.target.value
	}
	handleFullScreen = event => {
		if (!document.webkitIsFullScreen){
			this.player.webkitRequestFullScreen()
		}else {
			document.webkitExitFullscreen()
		}
	}
	setRef = element => {
		this.player = element
	}
	render() {
		return(
			<VideoPlayerLayout 
				setRef={this.setRef}
			>
				<Title
					title={this.props.title}
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
					<Volume
						handleVolumeChange={this.handleVolumeChange}
					/>
					<FullScreen
						handleFullScreen={this.handleFullScreen}
					/>
				</Controls>
				

				
				<Video 
					autoplay={this.props.autoplay}
					pause={this.state.pause}
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					cover={this.props.cover}
					src={this.props.src}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
				/>
				<Spiner
					active={this.state.loading}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;