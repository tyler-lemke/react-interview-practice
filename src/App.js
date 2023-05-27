import React from 'react';
import './style.css';

export default function App() {
  // get the data from this api - https://picsum.photos/v2/list
  //hint: use useEffect to grab the data
  // push that data into a Image List Component (do this in ImageList.js)

  // each image component (Image.js) will display the author name and the image itself
  // in Image.js - add event handlers that remove the image if you click on it or click on a button
  return (
    <div>
      <ImageList />
    </div>
  );
}
