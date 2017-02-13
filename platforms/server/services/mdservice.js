import fs from 'fs'

const regMetaSplit = /\n-----+\n/ // use ----- split artical metadata and contents

export function readFile (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) reject(error)
      resolve(data)
    })
  })
}

export function readDir (path) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (error, data) {
      if (error) reject(error)
      data = data.filter((file) => {
        return /\.md$/.test(file)
      })
      resolve(data)
    })
  })
}

export function getMarkdownData (mdstr) {
  if (!mdstr.match(regMetaSplit)) {
    console.warn('md file must have metadata')
    return { content: mdstr, metaData: null }
  }
  let data = mdstr.split(regMetaSplit)
  let metaDataArr
  let metaData = {}
  let lastKey

  if (data[0]) {
    metaDataArr = data[0].split(/[\n]+/)
    metaDataArr.forEach((item) => {
      let key, value, itemData
      if (/\S/.test(item)) {
        itemData = item.split(':')
        value = itemData[1]
        key = itemData[0].replace(/(^\s*)|(\s*$)/g, '')
        if (!value && lastKey) {
          value = Array.isArray(metaData[lastKey]) ? metaData[lastKey].push(value) : [metaData[lastKey], key]
          key = lastKey
        } else if (value) {
          lastKey = key
        }
        if (value.indexOf && value.indexOf('|') > -1) { // split Tags:  markdown | blog
          value = value.split('|')
        }
        metaData[key] = value
      }
    })
  }
  for (let key in metaData) {
    if (Array.isArray(metaData[key])) {
      metaData[key] = metaData[key].map((item) => {
        return item.replace(/(^\s*)|(\s*$)/g, '')
      })
    } else {
      metaData[key] = metaData[key].replace(/(^\s*)|(\s*$)/g, '')
    }
  }
  if (data[1]) {
    let desc = data[1].replace(/^\s*/, '').split(/[\n]{2,}/)[0] // first paragraph is description
    metaData.Desc = desc || ''
  }

  return { content: data[1] || mdstr, metaData: metaData || null }
}
