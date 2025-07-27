import React from 'react';
import Comment from "./Comment";

const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment}/>
          <div className='pl-5 ml-5 border-l border-l-black dark:border-l-white bg-white dark:bg-black text-black dark:text-white'>
            <CommentList comments={comment.replies} />
          </div>
        </div>
    ))
}

export default CommentList;