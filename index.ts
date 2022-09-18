import sharp from "sharp";
import fs from 'fs'
import path from 'path'
const blueImageFileName = 'blueImage.jpeg'
const redImageFileName = 'redImage.jpeg'
const greenImageFileName = 'greenImage.jpeg'
const canvasImageFileName = 'canvas.jpeg'
let counter = 0;
sharp.cache(false);
function getRndFn(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomXYPixels() {
    return getRndFn(0, 19500)
}

function shuffle<T>(array: Array<T>) {
    array.sort(() => Math.random() - 0.5);
}

async function runTest(fileName: string) {
    console.log(`${fileName}`);
    const blueImage = await sharp(blueImageFileName).toBuffer()
    const redImage = await sharp(redImageFileName).toBuffer();
    const greenImage = await sharp(greenImageFileName).toBuffer();

    const blueArray = Array(getRndFn(100, 500)).fill(blueImage);
    const redArray = Array(getRndFn(100, 500)).fill(redImage);
    const greenArray = Array(getRndFn(100, 500)).fill(greenImage);
    const combinedArray = [...blueArray, ...redArray, ...greenArray]
    shuffle<Buffer>([...blueArray, ...redArray, ...greenArray]);
    const imageArray = combinedArray.map(ele => {
        return {
            input: ele,
            top: getRandomXYPixels(),
            left: getRandomXYPixels()
        }
    })

    const path1 = path.join(__dirname, 'output', `${fileName}_${counter++}.jpeg`)

    const newImage = await sharp(canvasImageFileName, { limitInputPixels: false }).composite(imageArray).toFile(path1);
    console.log('task complete!!!')
    setTimeout(() => runTest(fileName), 100);
}



async function readFileImg() {
    await sharp(blueImageFileName).metadata()
    await sharp(redImageFileName).metadata()
    await sharp(greenImageFileName).metadata()
    await sharp(canvasImageFileName, { limitInputPixels: false }).metadata()
    console.log('readFileImg completed')
    setTimeout(readFileImg, 100);
}

for (let x = 0; x < 10; x++) {
    readFileImg()
}

//loadImages 


