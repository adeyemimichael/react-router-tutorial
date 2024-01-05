
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./tick.json";

const Success = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
  };

  const { View } = useLottie(options);

  // Define the width and height for the Lottie animation container
  const lottieContainerStyle = {
    width: "200px", // Set your desired width
    height: "200px", // Set your desired height
  };

  return (
    <div
      className="flex flex-col font-bold absolute md:w-[50%] md:h-[90%] w-fit h-fit  pl-6 pr-6 pt-4 pb-4 border-b-2 border-b-[#000038] bg-white text-[#000038] rounded-lg text-center justify-center items-center shadow-md"
      
    >
      <div style={lottieContainerStyle}>{View}</div>
      Form submitted successfully!
    </div>
  );
};

export default Success;
