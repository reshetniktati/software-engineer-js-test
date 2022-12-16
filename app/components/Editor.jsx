import { useContext } from "react";

import BaseNavBtn from "./BaseNavBtn.jsx";
import ResizeInput from "./ResizeInput.jsx";
import PhotoDetailsContext from "../utils/context/PhotoDetailsContext.js";
import ImgContext from "../utils/context/ImgContext.js";


function Editor() {
    const {photoDetails, setPhotoDetails} = useContext(PhotoDetailsContext);
    const {currentImg, setCurrentImg} = useContext(ImgContext);

    function resizeImage(width, height, x = 0, y = 0) {
        editorCanvas.width = width;
        editorCanvas.height = height;
        const ctx = editorCanvas.getContext('2d');
        ctx.drawImage(currentImg, x, y, currentImg.width, currentImg.height, 0, 0, editorCanvas.width, editorCanvas.height);
    }

    function handleWidthChange(width) {
        let height = parseInt(width * photoDetails.ratio);
        setPhotoDetails({...photoDetails, width: width, height: height});
        resizeImage(width, height);
    }

    function handleHeightChange(height) {
        let width = parseInt(height / photoDetails.ratio);
        setPhotoDetails({...photoDetails, height: height, width: width});
        resizeImage(width, height);
    }

    function handleImgPosition(direction) {
        let x, y;
        switch(direction) {
            case 'up':
                y = photoDetails.y + 50;
                setPhotoDetails({...photoDetails, y: y})
                break;
            case 'down': 
                y = photoDetails.y - 50;
                setPhotoDetails({...photoDetails, y: y})
                break;
            case 'left':
                x = photoDetails.x - 50;
                setPhotoDetails({...photoDetails, x: x})
                break;
            case 'right':
                x = photoDetails.x + 50;
                setPhotoDetails({...photoDetails, x: x})
        }
        resizeImage(currentImg.width, currentImg.height, x, y )
    }
 

    return (
        <>
            {currentImg && (<section className="resize-nav">
                <fieldset>
                    <legend>Change the image size:</legend>
                    <ResizeInput side="width" size={photoDetails.width} onSizeChange={handleWidthChange} />
                    <ResizeInput side="height" size={photoDetails.height} onSizeChange={handleHeightChange} />
                </fieldset>
            </section>)}

            <section className="editor">
                <div className="preview">
                    <canvas id="editorCanvas"></canvas>
                </div>
                <BaseNavBtn dir="left" onMoveHandler={handleImgPosition}></BaseNavBtn>
                <BaseNavBtn dir="right" onMoveHandler={handleImgPosition}></BaseNavBtn>
                <BaseNavBtn dir="up" onMoveHandler={handleImgPosition}></BaseNavBtn>
                <BaseNavBtn dir="down" onMoveHandler={handleImgPosition}></BaseNavBtn>
            </section>
        
        </>

    )
}

export default Editor