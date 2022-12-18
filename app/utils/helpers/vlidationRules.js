const validate = {

    img: {
        type: function(imgType) {
            const imgTypeRegEx = new RegExp('image/(?:jpg|jpeg|png)');
            return imgTypeRegEx.test(imgType);
        },
    },
}

export { validate }