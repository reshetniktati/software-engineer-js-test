import React, { useState } from 'react';
import Editor from '../components/Editor.jsx';
import UploadFilePanel from '../components/UploadFilePanel.jsx';
import PhotoDetailsContext from '../utils/context/PhotoDetailsContext';
import ImgContext from '../utils/context/ImgContext.js';

function App() {
  const canvasDetails = {
    width: 0,
    height: 0,
    x: 0,
    y: 0
  };

  const [photoDetails, setPhotoDetails] = useState(canvasDetails);
  const [currentImg, setCurrentImg] = useState();

  return (
    <>
      <h1>Create Your Canvas!</h1>
      <ImgContext.Provider value={{ currentImg, setCurrentImg }}>
        <PhotoDetailsContext.Provider value={{ photoDetails, setPhotoDetails }}>
          <UploadFilePanel />
          <Editor />
        </PhotoDetailsContext.Provider>
      </ImgContext.Provider>
    </>
  );
}

export default App;
