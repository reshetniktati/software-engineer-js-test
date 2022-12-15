const validation = {
    
    imgType: function(imgType) {
        const imgTypeRegEx = new RegExp('image/(?:jpg|jpeg|png)');
        return imgTypeRegEx.test(imgType);
    }
}

export { validation }