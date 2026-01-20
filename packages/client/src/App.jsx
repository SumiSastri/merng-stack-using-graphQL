import React from 'react';
import './App.css';

// components
import PageRouting from './routing/PageRouting';
import DisplayHeader from "./common/DisplayHeader";
import DisplayImage from "./common/DisplayImage";

//assets
import bookImage from "./assets/annie-spratt-gl7joOaABlI-unsplash-books-pile.jpg";

const App = () => {
  return (  
    <div className="App">   
   <DisplayHeader
      className="app-header">
        <h1>GraphQL & MongoDB App</h1>

    <DisplayImage
          src={bookImage}
          alt="Annie-spratt"
          className="book-image-styles"
        />
      </DisplayHeader>
      <PageRouting />
    </div>
  );
}

export default App;






