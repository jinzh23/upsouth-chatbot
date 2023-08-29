import React from 'react';
import styles from '../Styles/YouTubeEmbed.module.css';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className={styles["youtube-embed"]}>
       <iframe 
    width="500" 
    height="400" 
    src="https://www.youtube.com/embed/UiwvGQ2614U?si=qHvFCSgxH6NY7SFr" 
    title="YouTube video player" 
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
    </div>
  );
};

export default YouTubeEmbed;





