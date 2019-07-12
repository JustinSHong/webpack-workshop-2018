const makeImage = (url, width = 100, height = 100) => {
    const image = document.createElement("img");
    image.src = url;
    image.width = width;
    image.height = height;
    return image;
};

export default makeImage;
