"use client";

import DarkIcon from "@/Icons/dark-mode.svg";
import LightIcon from "@/Icons/light-mode.svg";
import LangIcon from "@/Icons/language.svg";
import { useState } from "react";

export default function NavBar() {

    const [darkMode, setDarkMode] = useState(false);
    
    const toggleTheme = () => setDarkMode(!darkMode);
    
    var isDarkMode = darkMode;
    

    return(
       <div className="absolute flex justify-between w-screen h-[10vh] bg-white bg-opacity-50 border-black border-b-2 border-solid">
        <div className="flex justify-evenly text-black">
            <div className="ml-4 flex h-full items-center space-x-2">
                <a onClick={toggleTheme} className="hover:bg-gray-400 overflow-hidden cursor-pointer relative bg-gray-300 flex h-10 w-10 items-center justify-center rounded-full">
                    {isDarkMode ? <DarkIcon className="absolute w-[28px] h-[28px]"/> : <LightIcon className="absolute w-[28px] h-[28px]"/>}
                </a>
            </div>
            <div className="flex space-x-2">
                <span>BR</span>  
                <div className="bg-gray-300 w-8 h-8 rounded-full">
                    <LangIcon className="w-10 h-10"/>
                </div>
                <span>EN</span>
            </div>
        </div>
        <ul className="h-full flex space-x-2 items-center text-black">
            <li>Profile</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
        </ul>
       </div>
    );
}