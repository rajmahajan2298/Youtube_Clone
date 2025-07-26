import React  from "react";

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return(
        <div className="flex shadow-lg rounded-lg bg-gray-100 pt-2 my-2">
             <img className='h-10 cursor-pointer px-2' alt='userprofile-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' />
             <div>
               <p className="font-bold px-2">{name}</p>
               <p className="px-2">{text}</p>
             </div>
        </div>
        
    )
}

export default Comment;