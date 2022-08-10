import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Crew from './pages/Crew'
import Technology from './pages/Technology';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Destination from './pages/Destination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="destination" element={<Destination/>}/>
      <Route path="crew" element={<Crew/>}/>
      <Route path="technology" element={<Technology/>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
