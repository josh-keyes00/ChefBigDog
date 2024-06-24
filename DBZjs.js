function completed(element, color, color2) {
        if (element.style.color = color) {
            element.style.color = color2
        }
        if (element.style.color = color2) {
            element.style.color = color
        }

}
//DRAGONBALL
// List of video sources
const videoSources = [
    'idk.mp4',
    'idk2.mp4',
    'DBs1d1.mp4', 'DBs1d2.mp4', 'DBs1d3.mp4', 'DBs1d4.mp4', 'DBs1d5.mp4', 'DBs1d6.mp4', 'DBs2d1.mp4', 'DBs2d2.mp4', 'DBs2d3.mp4', 'DBs2d4.mp4', 
  ];
  
  // Index to keep track of the current video source
  let currentSourceIndex = 0;
  
  // Function to change the video source to the next source in the list
  function changeVideoSource() {
    const videoElement = document.getElementById('video'); // Change 'video' to your video element's ID
    if (currentSourceIndex < videoSources.length - 1) {
      currentSourceIndex++;
      videoElement.src = videoSources[currentSourceIndex];
      videoElement.load();
      videoElement.play();
    } else {
      // You've reached the end of the sources, you can handle it as needed
      console.log('All videos played.');
    }
  }
  
  // Add an event listener to the video element to detect the end of the video

  // DRAGONBALLZ

  // List of video sources
const videoSourcesDBZ = [
    'idk.mp4',
    'idk2.mp4',
    'DBZs1d1.mp4', 'DBZs1d2.mp4', 'DBZs1d3.mp4', 'DBZs1d4.mp4', 'DBZs1d5.mp4', 'DBZs1d6.mp4'
  ];
  
  // Index to keep track of the current video source
  let currentSourceIndexDBZ = 0;
  
  // Function to change the video source to the next source in the list
  function changeVideoSourceDBZ() {
    const videoElement = document.getElementById('DBZ'); // Change 'video' to your video element's ID
    if (currentSourceIndex < videoSourcesDBZ.length - 1) {
      currentSourceIndexDBZ++;
      videoElement.src = videoSourcesDBZ[currentSourceIndexDBZ];
      videoElement.load();
      videoElement.play();
    } else {
      // You've reached the end of the sources, you can handle it as needed
      console.log('All videos played.');
    }
  }
  
  // Add an event listener to the video element to detect the end of the video


  //DRAGONBALL SUPER

  // List of video sources
const videoSourcesS = [
    'idk.mp4',
    'idk2.mp4',
    'DBSs1d1.mp4', 'DBSs1d2.mp4', 'DBSs1d3.mp4', 'DBSs1d4.mp4', 'DBSs1d5.mp4', 'DBSs1d6.mp4' 
  ];
  
  // Index to keep track of the current video source
  let currentSourceIndexS = 0;
  
  // Function to change the video source to the next source in the list
  function changeVideoSourceS() {
    const videoElement = document.getElementById('SUPER'); // Change 'video' to your video element's ID
    if (currentSourceIndex < videoSourcesS.length - 1) {
      currentSourceIndexS++;
      videoElement.src = videoSources[currentSourceIndexS];
      videoElement.load();
      videoElement.play();
    } else {
      // You've reached the end of the sources, you can handle it as needed
      console.log('All videos played.');
    }
  }
  
  // Add an event listener to the video element to detect the end of the video
