import React from 'react'
import { FiHome, FiVideo, FiMusic } from "react-icons/fi";
import { FaFire, FaBroadcastTower, FaFutbol, FaGamepad, FaFilm, FaGraduationCap, FaRegNewspaper, FaPodcast, FaShoppingCart, FaUserCircle} from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const location = useLocation();

  const isWatchPage = location.pathname.startsWith("/watch");
  // Early Return Pattern

  // if(!isMenuOpen) return null;


  if(!isMenuOpen) {
    return(
    <div className="w-16 p-2 m-2 flex flex-col items-center space-y-6 shadow-lg">
      {!isWatchPage && (
        <div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <FiHome className="text-xl" />
          <span className="text-xs"><Link to="/">Home</Link></span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <FaFire className="text-xl" />
          <span className="text-xs">Shorts</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <FiVideo className="text-xl" />
          <span className="text-xs">Subs</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2">
          <FaUserCircle className="text-xl" />
          <span className="text-xs">You</span>
        </div>
        </div>)}
      </div>
    )
  }

  return(
    <div className='w-44 p-5 shadow-lg'>
      <ul>
        <li className='flex items-center'><FiHome /><span className= 'px-5 mx-2 cursor-pointer bg-gray-200 rounded-md hover:bg-gray-300'><Link to="/">Home</Link></span></li>
        <li className='flex items-center'><FiVideo /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Vidoes</span></li>
        <li className='flex items-center'><FaFire /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'>Shorts</span></li>
        <li className='flex items-center'><FaBroadcastTower /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'>Live</span></li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li className='flex items-center'><FiMusic /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Music</span></li>
        <li className='flex items-center'><FaFutbol /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Sports</span></li>
        <li className='flex items-center'><FaGamepad /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Gaming</span></li>
        <li className='flex items-center'><FaFilm /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Movies</span></li>
      </ul>

      
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='flex items-center'><FiMusic /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Music</span></li>
        <li className='flex items-center'><FaFutbol /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Sports</span></li>
        <li className='flex items-center'><FaGamepad /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Gaming</span></li>
        <li className='flex items-center'><FaFilm /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Movies</span></li>
      </ul>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li className='flex items-center'><FaShoppingCart /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'>Shopping</span></li>
        <li className='flex items-center'><FaPodcast /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'>Podcast</span></li>
        <li className='flex items-center'><FaRegNewspaper /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'>News</span></li>
        <li className='flex items-center'><FaGraduationCap /><span className='px-5 mx-2 cursor-pointer rounded-md hover:bg-gray-300'> Courses</span></li>
      </ul>
    </div>
  )
}

export default Sidebar;
