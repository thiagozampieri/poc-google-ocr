
const fs = require('fs')
const getWorker = require('tesseract.js-node')
;
(async () => {
  // const fileName = 'images/119088808_3589729997704461_24512464128746459_n.png'
  const fileName = 'images/01-20211716382649.png'
  const worker = await getWorker({
    tessdata: './tessdata',
    languages: ['eng', 'fin', 'por']
  })
  const text = await worker.recognize(fs.readFileSync(fileName), 'por');
  console.log('Text:')
  console.log(text)
  // detections.forEach(text => console.log(text.description))
})()