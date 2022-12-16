import { useContext } from "react";
import { validation } from "../utils/helpers/vlidationRules.js";
import PhotoDetailsContext from "../utils/context/PhotoDetailsContext";
import ImgContext from "../utils/context/ImgContext.js";


function UploadFilePanel() {
    const {currentImg, setCurrentImg} = useContext(ImgContext);
    const {photoDetails, setPhotoDetails} = useContext(PhotoDetailsContext);


    function handleFileUpload(e) {
        let file = e.target.files[0];

        if(!validation.imgType(file.type)) return;

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
            showImage(currentImg, currentImg.width, currentImg.height);
            let originalRatio = currentImg.height / currentImg.width;
            setPhotoDetails({...photoDetails, width: currentImg.width, height: currentImg.height, ratio: originalRatio});
            setCurrentImg(currentImg);
        }
    }

    function showImage(img, width, height, x = 0, y = 0) {
        editorCanvas.width = width;
        editorCanvas.height = height;
        const ctx = editorCanvas.getContext('2d');
        ctx.drawImage(img, x, y, width, height, 0, 0, editorCanvas.width, editorCanvas.height);
    }



    return (
        <form action="#">
            <fieldset>
            <legend>Select an Image file:</legend>
                <input type="file" onChange={(e) => {handleFileUpload(e)}}/>
            </fieldset>
        </form>
    )
}

export default UploadFilePanel