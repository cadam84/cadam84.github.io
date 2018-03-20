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

projectData[2] = {
  id: 3,
  url: 'https://christaladams.maps.arcgis.com/apps/GeoForm/index.html?appid=59dd4085fc9e4dbc9948ab5fbf434fef',
  title:'Book Assignment 3 Incidents Map',
  desc:'This is an up to date webapp of incidents on and around LSU\'s campus.',
  thumb: true,
  keywords: ['USGS', 'Incidents Map', 'Book3']
}

projectData[3] = {
  id: 4,
  url: 'https://christaladams.maps.arcgis.com/apps/webappviewer/index.html?id=5fde3b0be2a04cb98f8424f3c70cb50a',
  title:'Book Assignment 5 EBR Churches Webapp Builder',
  desc:'This is a webapp with several different widgets to help you familiarize yourself with EBR churches.',
  thumb: true,
  keywords: ['USGS', 'churches', 'Book5']
}

projectData[4] = {
  id: 5,
  url: 'https://christaladams.maps.arcgis.com/apps/webappviewer/index.html?id=b479f60ce2b54071b2aa50368db7e02c',
  title:'Book Assignment 6 US Population Growth',
  desc:'This is a webapp with a time widget to help show US population growth.',
  thumb: true,
  keywords: ['USGS', 'population growth', 'Book6']
}


for (let i = 0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
}
function createTitle (title) {
  console.log('Title: ' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('pictures/ss-project-' + id + ' .png')
  } else {
    console.log('pitures/no-image.png')
  }
}
