import React, { useEffect, useState } from "react"
import BaseBtn from "../components/BaseBtn.jsx"
import Editor from "../components/Editor.jsx"
import UploadFilePanel from "../components/UploadFilePanel.jsx"
import ResizeInput from "../components/ResizeInput.jsx"



function App() {
    const [photo, setPhoto] = useState();
    const [imgWidth, setImgWidth] = useState(0);
    const [imgHeight, setImgHeight] = useState(0);
    
    const canvasWidth = 15;
    const canvasHeight = 10;

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


    useEffect(() => {
        
    }, [imgWidth, imgHeight]);
    
    function handleWidthChange(value) {
        console.log('widdddth', value);
        setImgWidth(value);
    }

    function handleHeightChange(value) {
        setImgHeight(value);
    }

    function handleFileUpload(file) {
        const reader = new FileReader();
        reader.onload = function() {
            createImageElem(reader.result);
        };
        reader.readAsDataURL(file);
    }

    function createImageElem(imgSrc) {
        let currentImg = new Image();
        currentImg.src = imgSrc;
        currentImg.onload = function() {
            resizeImage(currentImg, currentImg.width, currentImg.height);
            // originalWidthToHeightRatio = currentImg.width / currentImg.height;
        }
    }

    function resizeImage(currentImg, width, height, x = 0, y = 0) {
        // editorCanvas.width = width;
        // editorCanvas.height = height;
        editorCanvas.width = 700;
        editorCanvas.height = 700 * height / width;
        const ctx = editorCanvas.getContext('2d');
        ctx.drawImage(currentImg, x, y, width, height, 0, 0, editorCanvas.width, editorCanvas.height);
    }

   


    return (    
        <>
            <h1>Create Your Canvas</h1>
            
            <UploadFilePanel onFileUpload={handleFileUpload}/>
            
            <fieldset>
                <legend>Change the image size:</legend>
                <ResizeInput side="width" size={imgWidth} onSizeChange={handleWidthChange}></ResizeInput>
                <ResizeInput side="height" size={imgHeight} onSizeChange={handleHeightChange}></ResizeInput>
            </fieldset>

            <Editor></Editor>
            <BaseBtn>Save</BaseBtn>
        </>
    )
}

export default App