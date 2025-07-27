import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiMoon } from "react-icons/fi";
import { toggleTheme } from "../utlis/themeSlice";

const Theme = () => {

    const dispatch = useDispatch();
    const themeMode = useSelector((store) => store.theme.themeMode);


    useEffect(() => {
        if(themeMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [themeMode]);

    return(
            <button className='p-2 text-xl'
              onClick={() => dispatch(toggleTheme())}>  
              {themeMode ? <FiSun className="text-yellow-400 translate-x-7" /> : <FiMoon className="text-black translate-x-0" />} 
            </button>
    )
}

export default Theme;