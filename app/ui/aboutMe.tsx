import NextIcon from "@/TechIcons/nextjs2.svg";
import TailCssIcon from "@/TechIcons/tailwind1.svg";
import DockerIcon from "@/TechIcons/docker.svg";

export default function AboutMe() {
    return(
        <div className="flex justify-center items-center">
            <a className="m-10">
                <img className="w-[250px] h-[250px] rounded-full" src="https://avatars.githubusercontent.com/u/132969260?v=4"/>
            </a>
            <div className="flex flex-col">
                <h1 className="text-8xl text-black">RockyPher</h1>
                <div className="flex justify-between">
                    <h2 className="text-3xl w-full text-black">Software Developer</h2>
                    <div className="flex justify-center">
                        <NextIcon className="w-10 h-10" />
                        <TailCssIcon className="w-10 h-10" />
                        <DockerIcon className="w-10 h-10" />
                    </div>
                </div>
                
            </div>
        </div>
    );
}