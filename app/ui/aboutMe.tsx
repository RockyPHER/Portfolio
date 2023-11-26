"use client";

import NextIcon from "@/TechIcons/nextjs2.svg";
import TailCssIcon from "@/TechIcons/tailwind1.svg";
import DockerIcon from "@/TechIcons/docker.svg";
import { useState } from "react";

interface AboutMeProps {
    toggleHandler : () => void
}

export default function AboutMe() {

    const [aboutMe, setAboutMe] = useState(false);

    var toggleAboutMe = aboutMe;

    const toggleAbout = () => setAboutMe(!aboutMe);

    return(

        <>
            {toggleAboutMe ? <Davidson toggleHandler={toggleAbout} /> : <Rocky toggleHandler={toggleAbout}/>}
        </>
    );
}

export function Rocky({ toggleHandler } : AboutMeProps){
    return(
        <div className="flex justify-center items-center">
            <a onClick={toggleHandler} className="cursor-pointer m-10 hover:brightness-50">
                <img className="w-[250px] h-[250px] rounded-full" src="https://avatars.githubusercontent.com/u/132969260?v=4"/>
            </a>
            <div className="flex flex-col">
                <h1 className="text-8xl text-black">RockyPher</h1>
                <div className="flex justify-between mt-2">
                    <h2 className="translate-x-1 text-3xl w-full text-black">Software Developer</h2>
                    <div className="flex w-1/2 justify-evenly">
                        <NextIcon className="w-10 h-10" />
                        <TailCssIcon className="w-10 h-10" />
                        <DockerIcon className="w-10 h-10" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export function Davidson({ toggleHandler } : AboutMeProps) {
    return(
        <div className="flex justify-center items-center">
            <a onClick={toggleHandler} className="cursor-pointer m-10 hover:brightness-50">
                <img className="w-[250px] h-[250px] rounded-full" src="https://media.licdn.com/dms/image/D4D03AQGt3-slEfWkTg/profile-displayphoto-shrink_800_800/0/1699419876823?e=1706745600&v=beta&t=F9Kt7g4nu7xmZcXcFdwv88iQ5B2ojyoVHpJmOoNg8cs"/>
            </a>
            <div className="flex flex-col">
                <h1 className="text-6xl text-black">Davidson Amaro Jr.</h1>
                <div className="flex justify-between mt-2">
                    <h2 className="translate-x-1 text-3xl w-full text-black">Software Developer</h2>
                    <div className="flex w-1/2 justify-evenly">
                        <NextIcon className="w-10 h-10" />
                        <TailCssIcon className="w-10 h-10" />
                        <DockerIcon className="w-10 h-10" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}