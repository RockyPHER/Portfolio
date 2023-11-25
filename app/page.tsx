import AboutMe from "./ui/aboutMe";
import NavBar from "./ui/navigationBar";

export default function Home() {
  return(

    <div className="relative flex flex-col w-screen h-[600vh]">
      
      <div className="absolute z-10 w-2 h-[450vh] top-[95vh] left-1/2 bg-black "></div>

      <div className="bg-gray-200 w-screen h-[200vh] bg-gradient-to-b from-white to-blue-900">
        <NavBar />
        <div className="flex justify-center items-center w-full h-1/2">
          <AboutMe />
        </div>
      </div>

      <div className="bg-gray-300 w-screen h-[200vh]"></div>
      
      <div className="bg-gray-600 w-screen h-[200vh]"></div>
    </div>

  );
}