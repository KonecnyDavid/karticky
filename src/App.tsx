import React from 'react';
import './App.css';
import { CardLibrary } from './ui/CardLibrary/CardLibrary';
import { Menu } from './ui/Menu/Menu';

function App() {
  return (
    <div className="app">
        <Menu>
            <span>
                🧪 Testing site
            </span>
        </Menu>
        <div className="card-containder">
            <CardLibrary />
        </div>
      
    </div>
  );
}

export default App;
