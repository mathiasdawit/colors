import './App.css';
import Content from './Content'
import { useState, useEffect } from "react";


function App() {
  
  const [color, setColor] = useState(''); 

  const setAndSaveColor = (newColor) => {
    setColor(newColor); // set color
    localStorage.setItem('color', newColor); // save color
  }

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setAndSaveColor(newColor);
  }

  return (
    <div className="App">
      <Content
        color={color}
        handleColorChange={handleColorChange}      
      />
    </div>
  );
}

export default App;
