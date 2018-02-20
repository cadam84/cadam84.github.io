// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://arcg.is/0bXqvu'
let projectTitle = 'Book Assignment 2 Earthquakes'
let projectDesc = 'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

let projectArray = [
  1,
  'https://arcg.is/0bXqvu',
  'Book Assignment 2 Earthquakes',
  'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.',
  true
  ['earthquakes','USGS']
]

let projectObject = {
  id: 1,
  url: 'https://arcg.is/0bXqvu'
  title: 'Map of Recent Earthquakes'
  description:'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
  hasThumbnail: true
  keywords: ['earthquakes', 'USGS']
}

// display messages in the browser's developer console, combining the values with text
console.log(projectObject)
