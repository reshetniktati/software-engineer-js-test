import { useContext, useEffect, useState } from "react";

import BaseNavBtn from "./BaseNavBtn.jsx";
import ResizeInput from "./ResizeInput.jsx";
import BaseBtn from "./BaseBtn.jsx";

import PhotoDetailsContext from "../utils/context/PhotoDetailsContext.js";
import ImgContext from "../utils/context/ImgContext.js";
import {MINCanvasSize, step, UP, DOWN, LEFT, RIGHT} from "../utils/const";


function Editor() {
    const {photoDetails, setPhotoDetails} = useContext(PhotoDetailsContext);
    const {currentImg} = useContext(ImgContext);
    const [canvasSize, setCanvasSize] = useState({});

    useEffect(() => {
        if (currentImg !== undefined) {
            imgSizeCheck();  // img width/height shouldn't be less than MINCanvasSize
        }
    }, [currentImg]);

    const imgSizeCheck = () => {
        if (currentImg?.width < MINCanvasSize || currentImg?.height < MINCanvasSize) {
            imgSizeCorection();
        }
    }

    const imgSizeCorection = () => {
        let width, height;
        if (currentImg?.width > currentImg?.height) {
                height = MINCanvasSize;
                width = parseInt(height / photoDetails.ratio);
        } else {
            width = MINCanvasSize;
            height = parseInt(width * photoDetails.ratio);
        }
        resizeImage(width, height);
        setPhotoDetails({...photoDetails, width: width, height: height});
    }

    const resizeImage = (width, height, x = 0, y = 0, img = currentImg) => {
        editorCanvas.width = width;
        editorCanvas.height = height;
        setCanvasSize({...canvasSize, width: width, height: height})
        const ctx = editorCanvas.getContext('2d');
        ctx.drawImage(img, x, y, img.width, img.height, 0, 0, editorCanvas.width, editorCanvas.height);
    }

    const handleWidthChange = (width) => {
        let height = parseInt(width * photoDetails.ratio);
        handleSizeChanging(width, height);
    }

    const handleHeightChange = (height) => {
        let width = parseInt(height / photoDetails.ratio);
        handleSizeChanging(width, height);
    }

    const handleSizeChanging = (width, height) => {
        setPhotoDetails({...photoDetails, width: width, height: height});
        resizeImage(width, height);
    }

    const UP = 'up';
    const RIGHT = 'right';
    const DOWN = 'down';
    const LEFT = 'left';

    const direction = [
        UP,
        DOWN,
        LEFT,
        RIGHT,
    ];

    function handlePositionChange(direction) {
        switch(direction) {
            case UP:
            case DOWN:
                imgMovePostionY(direction);
                break;
            case LEFT:
            case RIGHT:
                imgMovePostionX(direction);
                break;
        }
       
    }

    const imgMovePostionX = (direction) => {
        let x;
        switch(direction) {
            case LEFT:
                x = photoDetails.x + step;
                break;
            case RIGHT:
                x = photoDetails.x - step;
                break;
        }
        setPhotoDetails({...photoDetails, x: x});
        resizeImage(currentImg.width, currentImg.height, x, photoDetails.y );
    }

    const imgMovePostionY = (direction) => {
        let y;
        switch(direction) {
            case UP:
                y = photoDetails.y + step;
                break;
            case DOWN:
                y = photoDetails.y - step;
                break;
        }
        setPhotoDetails({...photoDetails, y: y})
        resizeImage(currentImg.width, currentImg.height, photoDetails.x, y)
    }

    const saveCanvas = () => {
        let canvas = {
            width: canvasSize.width,
            height: canvasSize.height,
            photo : {
                id: 'fileName',
                width: currentImg.width,
                height: currentImg.height,
                x: photoDetails.x,
                y: photoDetails.y,
            }
        };

        console.info(JSON.stringify(canvas)); //Json object
    }

    const resetModification = () => {
        resizeImage(currentImg.width, currentImg.height, 0, 0, currentImg);
        setPhotoDetails({});
    }
 

    return (
        <>
            {currentImg && (
                <section className="resize-nav">
                    <fieldset>
                        <legend>Change the image size:</legend>
                        <ResizeInput side="width" min={MINCanvasSize} size={photoDetails.width} onSizeChange={handleWidthChange} />
                        <ResizeInput side="height" min={MINCanvasSize} size={photoDetails.height} onSizeChange={handleHeightChange} />
                    </fieldset>
                </section>
            )}

            <section className="direction-nav">
                <div className="preview">
                    <canvas id="editorCanvas"></canvas>
                </div>

                {direction.map((dir) => 
                    <BaseNavBtn key={dir} dir={dir} onImgMove={handlePositionChange}></BaseNavBtn>
                )}
            </section>
            <BaseBtn onClick={saveCanvas}>Save</BaseBtn>
            <BaseBtn onClick={resetModification}>Reset</BaseBtn>
        </>

    )
}

export default Editor