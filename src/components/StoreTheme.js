import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../utlis/themeSlice";

const StoreTheme = () => {
    
 const dispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    dispatch(setDarkMode(storedTheme === 'dark'));
  }, [dispatch])

  return null;
}

export default StoreTheme;
  