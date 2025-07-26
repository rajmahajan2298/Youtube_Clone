import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utlis/config';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-2'>
      {videos.map(video =>
       <Link key={video.id} to = {"/watch?v=" + video.id}> 
        <VideoCard info={video} />
       </Link>
        )}
    </div>
  )
}

export default VideoContainer;
