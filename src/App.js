import {BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Navbar from './Components/Navbar/Navbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Shop /> */}




    </div>
  );
}

export default App;
