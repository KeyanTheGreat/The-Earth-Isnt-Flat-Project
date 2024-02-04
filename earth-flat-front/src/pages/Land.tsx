import React from 'react';
import '../styles/Land.css';
import { useNavigate } from "react-router-dom";
// console.log("fish0")

// import { SparklesCore } from "../fancy/sparkles"
// console.log(SparklesCore)

function Land() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `../home`; 
        navigate(path);
    }

    return (
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

        <div className="stars"></div>
        <div className="twinkling"></div>

        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          The Earth Is Flat!
        </h1>

        {/* <div id="stars-group-3"></div>
        <div id="stars-group-4"></div> */}

        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
   
          {/* Core component */}
          {/* <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          /> */}
   
          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          {/* <button className="button"> View the Flat Earth! </button> */}
          {/* <button className="button-64" role="button"><span className="text">Button 64</span></button> */}
          <button className="button-19" role="button" onClick={routeChange}>View the Earth</button>
        </div>

      </div>
    );
  }

  export default Land;
// function Land() {
//     // return (
//     //     <div className="Main">
//     //         <p className="Main-Head">
//     //             <h1>Main</h1>
//     //         </p>
//     //     </div>
//     // );
//     return (
//         <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//           <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
//             Aceternity
//           </h1>
//           <div className="w-[40rem] h-40 relative">
//             {/* Gradients */}
//             <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
//             <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
//             <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
//             <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
     
//             {/* Core component */}
//             <SparklesCore
//               background="transparent"
//               minSize={0.4}
//               maxSize={1}
//               particleDensity={1200}
//               className="w-full h-full"
//               particleColor="#FFFFFF"
//             />
     
//             {/* Radial Gradient to prevent sharp edges */}
//             <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
//           </div>
//         </div>
//     );
// }

// export default Land;
