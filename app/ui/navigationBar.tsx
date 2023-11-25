export default function NavBar() {
    return(
       <div className="absolute flex justify-between w-screen h-[10vh] bg-white bg-opacity-50 border-black border-b-2 border-solid">
        <div className="flex justify-evenly text-black">
            <span>InterruptorIcon</span>
            <span>PT-BR</span>
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