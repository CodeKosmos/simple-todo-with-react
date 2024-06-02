import React from 'react'; /* Import the React library */
import ReactDOM from 'react-dom/client'; /* Import the ReactDOM client */
import './index.css'; /* Import the CSS file for global styles */
import App from './App'; /* Import the main App component */

/* Create a root element and render the App component into the root DOM element */
const root = ReactDOM.createRoot(document.getElementById('root')); /* Get the root element by its ID */
root.render(
  <React.StrictMode> 
    
    <App /> {/* Render the App component */} 
  </React.StrictMode>
);
