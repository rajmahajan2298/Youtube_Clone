import React from 'react'

const VideoCard = ( {info} ) => {
    const { snippet, statistics } = info;
    const { channelTitle, thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 w-72 h-[340px] shadow-lg'>
      <img className='rounded-lg cursor-pointer' alt='thumbnail' src={thumbnails.medium.url} />
      <ul>
        <li className='font-bold py-2 cursor-pointer'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views | {statistics.likeCount} Likes</li>
      </ul>
    </div>
  )
}

export default VideoCard;
