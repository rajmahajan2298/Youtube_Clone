import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utlis/appSlice';
import { cacheResults } from "../utlis/searchSlice";
import { YOUTUBE_SEARCH_API } from '../utlis/config';

const Head = () => {
     
    const [searchQuery, setSearchQuery] = useState("");
    const [search, setSearch] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const searchCache = useSelector(store => store.search);

    useEffect(() => {
      const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSuggestions();
        }
      }, 200); 
    
      return () => {
        clearTimeout(timer);
      }
    }, [searchQuery]);

    const getSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(cacheResults({
        [searchQuery]: json[1],
      }));
    }

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-3 m-2 shadow-lg'>
        {/** Logo Section */} 
        <div className='flex col-span-1'>
          <img onClick= {()=> toggleMenuHandler()} className='h-8 cursor-pointer hover:bg-gray-300 rounded-full' alt='menu' src='https://www.svgrepo.com/show/312300/hamburger-menu.svg' />
          <img className='w-32 h-7 mx-4' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png' />
        </div>

        {/** Search Section */}
        <div className='col-span-10 px-8'>
          <div>
           <input className='w-1/2 border border-gray-400 rounded-l-full p-1 pl-5' 
           type='text' 
           placeholder='Search'
           value={searchQuery}
           onChange={(e) => {setSearchQuery(e.target.value)}}
           onFocus={() => setSearch(true)}
           onBlur={() => setSearch(false)}
           />
           <button className='border border-gray-400 px-4 py-1 rounded-r-full text-gray-100 bg-gray-100 hover:bg-gray-300'>🔍</button>
          </div>
          {search && suggestions.length > 0 && (
          <div className='absolute w-[450px] bg-white px-6 py-2 rounded-lg shadow-lg'>
            <ul>
              {suggestions.map((items, index) => (
                <li key={index} className='px-2 py-2 border border-gray-100 rounded-lg shadow-sm hover:bg-gray-300'>{items}</li>
              ))}
            </ul>
          </div>
          )}
        </div> 

        {/** User-Profile Section */}
        <div className='col-span-1'>
          <img className='h-8 cursor-pointer' alt='userprofile-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s' />
        </div> 
    </div>
  )
}

export default Head;
