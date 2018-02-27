let projectData = []

projectData[0] = {
  id: 1,
  url: 'http://arcg.is/2n7m5PD',
  title:'Book Assignment 1 Nashville',
  desc:'This is a story map tour of Nashville, Tennesse.',
  thumb: true,
  keywords: ['Nashville', 'story', 'map']
}

projectData[1] = {
  id: 2,
  url: 'https://www.arcgis.com/apps/View/index.html?appid=6d3a5aeada7249c99c3dcc636ace0b80&extent=-479.5312,-89.5436,-119.5312,89.9990',
  title:'Book Assignment 2 Earthquakes',
  desc:'This is an up to date map of earthquakes across the world, magnitude 2.5+ provided by the USGS website.',
  thumb: false,
  keywords: ['USGS', 'Earthquakes', 'Book2']
}

for (let i = 0; i < projectData.length; i++) {
  console.log('Images of Project' + projectData[i].id + ".png")
}
