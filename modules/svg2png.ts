/**
 * Source:
 * https://medium.com/@piccosupport/efficient-svg-to-png-conversion-in-node-js-streaming-multiple-svg-strings-using-promises-0741aa36dbe9
 */
import fs from 'node:fs'
import { Readable } from 'stream'
import sharp from 'sharp'

// Array of SVG strings

const svgStrings = [
  '<svg>...</svg>',
  '<svg>...</svg>'
// Add more SVG strings as needed
]

// Function to convert SVG string to PNG buffer
const svgToPng = (svgString) => {
  return new Promise((resolve, reject) => {
    const svgStream = new Readable()
    svgStream.push(svgString)
    svgStream.push(null)

    svgStream.pipe(sharp()
      .png()
      .toBuffer((err, buffer) => {
        if (err) {
          reject(err);
        } else {
          resolve(buffer)
        }
      })
    )
  }
  )
}
// Convert each SVG string to PNG asynchronously
const convertAllSvgToPng = async (svgStrings) => {
  const pngBuffers = await Promise.all(
    svgStrings.map(svgToPng)
  )

  return pngBuffers
}
// Usage
convertAllSvgToPng(svgStrings)
  .then((pngBuffers) => {
    // Handle PNG buffers (e.g., save to file)
    pngBuffers.forEach((buffer, index) => {
      fs.writeFileSync(`output_${index}.png`, buffer);
    })
    console.log('Conversion complete!')
  })
  .catch((err) => {
    console.error('Error converting SVG to PNG:', err)
  })
