// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://arcg.is/0bXqvu'
let projectTitle = 'Book Assignment 2 Earthquakes'
let projectDesc = 'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

// create an array and assign six variables to positions 0 through 5
let projectArray = [
  projectId, 1
  projectUrl, 'https://arcg.is/0bXqvu'
  projectTitle, 'Book Assignment 2 Earthquakes'
  projectDesc, 'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
  projectThumb, true
  projectMapExtent, [48.51, -28.37, 2.63, -132.34]
]

// create an object and assign six variables to property names (i.e., keys)
let projectObject = {
  id: projectId, 1
  url: projectUrl, 'https://arcg.is/0bXqvu'
  title: projectTitle, 'Book Assignment 2 Earthquakes'
  desc: projectDesc, 'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.'
  thumb: projectThumb, true
  projectMapExtent: projectMapExtent [48.51, -28.37, 2.63, -132.34]
}

// logs the title from the project data array, because the title is in position 2
console.log(projectArray[2])

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
