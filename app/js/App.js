import React, { useEffect, useState } from "react"
import BaseBtn from "../components/BaseBtn.jsx"
import Editor from "../components/Editor.jsx"
import UploadFilePanel from "../components/UploadFilePanel.jsx"
import ResizeInput from "../components/ResizeInput.jsx"
import PhotoDetailsContext from "../utils/context/PhotoDetailsContext"
import ImgContext from "../utils/context/ImgContext.js"



function App() {

    let canvasDetails = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    }

    const [photoDetails, setPhotoDetails] = useState(canvasDetails);
    const [currentImg, setCurrentImg] = useState();
    
    // let canvas = {
    //     width: canvasWidth,
    //     height: canvasHeight,
    //     photo : {
    //         id: 'fileName',
    //         width: imgWidth,
    //         height: imgHeight,
    //         x: 0,
    //         y: 0,
    //     }
    // }



    return (    
        <>
            <h1>Create Your Canvas!</h1>
            <ImgContext.Provider value={{currentImg, setCurrentImg}}>
                <PhotoDetailsContext.Provider value={{photoDetails, setPhotoDetails}}>
                    <UploadFilePanel />
                    <Editor />
                    <BaseBtn>Save</BaseBtn>
                </PhotoDetailsContext.Provider>
            </ImgContext.Provider>
        </>
    )
}

export default App