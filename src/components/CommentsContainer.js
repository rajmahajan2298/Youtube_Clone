import React from 'react'
import CommentList from './CommentList';

const CommentsContainer = () => {

  const commentsData = [
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: [
      {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: [
      {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: [
      {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: [
      {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    ]
    },
    ]
    },
    ]
    },
    ]
    },
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    {
    name: 'Raj Mahajan',
    text: "Namaste Raj From The World",
    replies: []
    },
    
]

  return (
    <div className='px-3 mt-5'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;