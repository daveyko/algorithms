const fs = require('fs')
const path = require('path')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

let filesToOpen = []

function shuffleArr(arr){
  let randIdx, currIdx, temp
  currIdx = arr.length - 1
  while(currIdx > 0){
    randIdx = Math.floor(Math.random() * currIdx)
    temp = arr[currIdx]
    arr[currIdx] = arr[randIdx]
    arr[randIdx] = temp
    currIdx--
  }
  return arr
}

async function openFiles(dir, file){
  await exec(`subl ${path.join(__dirname, dir, file)}`)
  console.log('files opened!')
}

fs.readdir(__dirname, (err, files) => {
  let file
  let cmd
  let directories = shuffleArr(files.filter(file => {
    return (fs.lstatSync(path.join(__dirname, file)).isDirectory() && (file[0] !== '.'))
  }))
  for (let i = 0; i < 3; i++){
    fs.readdir(path.join(__dirname, directories[i]), (err, files) => {
      file = shuffleArr(files)[0]
      openFiles(directories[i], file)
    })
  }
})
