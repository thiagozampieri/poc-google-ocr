require('dotenv').config()
const { Storage } = require('@google-cloud/storage')
const vision = require('@google-cloud/vision')

const projectId = process.env.GOOGLE_PROJECT_ID
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS

new Storage({ projectId, keyFilename })
const client = new vision.ImageAnnotatorClient()
;
(async () => {
  // const fileName = 'images/119088808_3589729997704461_24512464128746459_n.png'
  const fileName = 'images/01-20211716382649.png'
  const [result] = await client.textDetection(fileName)
  const detections = result.textAnnotations
  console.log('Text:')
  detections.forEach(text => console.log(text.description))
})()