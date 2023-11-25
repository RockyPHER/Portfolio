import DarkIcon from "@/Icons/dark-mode.svg";
import LightIcon from "@/Icons/light-mode.svg";
import LangIcon from "@/Icons/lang.svg";

export default function NavBar() {
    return(
       <div className="absolute flex justify-between w-screen h-[10vh] bg-white bg-opacity-50 border-black border-b-2 border-solid">
        <div className="flex justify-evenly text-black">
            <div>
                <DarkIcon className="w-6 h-6"/>
                <LightIcon className="w-6 h-6"/>
            </div>
            <div>
                <span>PT-BR</span>  
                <LangIcon className="w-6 h-6"/>
                <span>EN-US</span>
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