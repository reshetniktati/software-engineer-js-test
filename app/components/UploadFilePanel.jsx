import { useContext, useEffect, useState } from 'react';
import { validate } from '../utils/helpers/vlidationRules.js';

import PhotoDetailsContext from '../utils/context/PhotoDetailsContext';
import ImgContext from '../utils/context/ImgContext.js';

import Message from './Message.jsx';

function UploadFilePanel() {
  const { currentImg, setCurrentImg } = useContext(ImgContext);
  const { photoDetails, setPhotoDetails } = useContext(PhotoDetailsContext);
  const [err, setErr] = useState();

  const handleFileUpload = (e) => {
    let file = e.target.files[0];
    if (!validate.img.type(file.type)) {
      setErr(true);
      return;
    }

    const reader = new FileReader();
    reader.onload = function () {
      createImageElem(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const createImageElem = (imgSrc) => {
    const currentImg = new Image();
    currentImg.src = imgSrc;
    currentImg.onload = () => {
      showImage(currentImg, currentImg.width, currentImg.height);

      const originalRatio = currentImg.height / currentImg.width;
      setPhotoDetails({
        ...photoDetails,
        width: currentImg.width,
        height: currentImg.height,
        ratio: originalRatio
      });
      setCurrentImg(currentImg);
      setErr('');
    };
  }

  const showImage = (img, width, height, x = 0, y = 0) => {
    editorCanvas.width = width;
    editorCanvas.height = height;
    const ctx = editorCanvas.getContext('2d');
    ctx.drawImage(img, x, y, width, height, 0, 0, editorCanvas.width, editorCanvas.height);
  }

  return (
    <>
      <form action="#">
        <fieldset>
          <legend>Select an Image file:</legend>
          <input
            type="file"
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
        </fieldset>
      </form>
      {err && <Message>Please, upload file in jpeg, png, jpg format</Message>}
    </>
  );
}

export default UploadFilePanel;
