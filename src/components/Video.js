import React from "react";
import "./Video.css";
import YouTube from "react-youtube";

function Video({ title, artist, video }) {
	return (
		<div className="video">
			<div className="video__container">
				<h2>Rene & Angela</h2>
				<h3>I'll Be Good</h3>
				<div clasName="video__player">
					<YouTube videoId="VVj1m8uy5AM" />
				</div>
			</div>
			<div className="video__container">
				<h2>Michael Jackson</h2>
				<h3>Billy Jean</h3>
				<div clasName="video__player">
					<YouTube videoId="Zi_XLOBDo_Y" />
				</div>
			</div>
			<div className="video__container">
				<h2>Sade</h2>
				<h3>Hang On To Your Love</h3>
				<div clasName="video__player">
					<YouTube videoId="kxNJV83EMJw" />
				</div>
			</div>
		</div>
	);
}

export default Video;
