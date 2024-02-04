import React from 'react';
import '../styles/Main.css';
import { Unity, useUnityContext } from "react-unity-webgl";
import { useNavigate } from "react-router-dom";

function Main() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "build3(Keyan)/Build/build3(Keyan).loader.js",
        dataUrl: "build3(Keyan)/Build/build3(Keyan).data.unityweb",
        frameworkUrl: "build3(Keyan)/Build/build3(Keyan).framework.js.unityweb",
        codeUrl: "build3(Keyan)/Build/build3(Keyan).wasm.unityweb",
        // webglContextAttributes: {
        //     preserveDrawingBuffer: true,
        // }
    });

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `../welcome`; 
        navigate(path);
    }

    // return <Unity unityProvider={unityProvider} />;
    return (
        <div className="container">
            {/* <button className="button-19" role="button" onClick={routeChange}>View the Earth</button> */}
            <Unity unityProvider={unityProvider} style={{ width: window.innerWidth, height: window.innerHeight }}/>
            <button className="btn" role="button" onClick={routeChange}>Back</button>
            <div className="text">the true earth</div>
        </div>
    );
}

export default Main;