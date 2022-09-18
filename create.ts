import sharp from "sharp";

const blueImageFileName = 'blueImage.jpeg'
const redImageFileName = 'redImage.jpeg'
const greenImageFileName = 'greenImage.jpeg'
const canvasImageFileName = 'canvas.jpeg'

const blueImage = sharp({
    create: {
        width: 500,
        height: 500,
        background: { r: 0, g: 0, b: 255, alpha: 0 },
        channels: 3
    }
}).toFile(blueImageFileName)

const red = sharp({
    create: {
        width: 500,
        height: 500,
        background: { r: 255, g: 0, b: 0, alpha: 0 },
        channels: 3
    }
}).toFile(redImageFileName)

const green = sharp({
    create: {
        width: 500,
        height: 500,
        background: { r: 0, g: 255, b: 0, alpha: 0 },
        channels: 3
    }
}).toFile(greenImageFileName)


const canvas = sharp({
    create: {
        width: 20000,
        height: 20000,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
        channels: 3
    },
    limitInputPixels: false
}).toFile(canvasImageFileName)