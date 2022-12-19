const validate = {
  img: {
    type: function (imgType) {
      const imgTypeRegEx = /image\/(?:jpg|jpeg|png)/;
      return imgTypeRegEx.test(imgType);
    }
  }
};

export { validate };
