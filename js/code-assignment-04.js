// assign values to a set of variables representing a project's metadata
let projectId = 2
let projectUrl = 'https://www.arcgis.com/apps/View/index.html?appid=6d3a5aeada7249c99c3dcc636ace0b80&extent=-479.5312,-89.5436,-119.5312,89.9990'
let projectTitle = 'Book Assignment 2 Earthquakes'
let projectDesc = 'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
let projectThumb = true
let projectKeywords = ['USGS', 'Earthquakes', 'Book2' ]

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  2,
  'https://www.arcgis.com/apps/View/index.html?appid=6d3a5aeada7249c99c3dcc636ace0b80&extent=-479.5312,-89.5436,-119.5312,89.9990',
  'Book Assignment 2 Earthquakes',
  'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.',
  true,
  ['USGS', 'Earthquakes', 'Book2']
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: 2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=6d3a5aeada7249c99c3dcc636ace0b80&extent=-479.5312,-89.5436,-119.5312,89.9990',
  title:'Book Assignment 2 Earthquakes',
  desc:'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.',
  thumb: true,
  projectKeywords: ['USGS', 'Earthquakes', 'Book2']
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
