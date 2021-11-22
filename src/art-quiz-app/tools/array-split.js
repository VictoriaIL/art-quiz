import images from "../../image-data/images";

function splitTo(arr, n) {
    let part = Math.ceil(arr.length / n);

    return arr.reduce(function (acc, el, i) {
        if (i % part === 0) acc.push([]);
        acc[acc.length - 1][i] = el;
        return acc;
    }, []);
}

let imagesParts = splitTo(images, 25);
imagesParts.pop()
export {imagesParts};
