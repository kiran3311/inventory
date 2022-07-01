
import NavBar from './components/NavBar';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Add_product from './components/Add_product';
import Home from './components/Home';
import Logout from './components/Logout';

import Product from './components/Product';
import Profile from './components/Profile';
import Update_product from './components/Update_product';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Private_components from './components/Private_components';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route element={<Private_components/>}>
      <Route path="/" element={<Product />} />
        <Route path="/addproduct" element={<Add_product />} />
        <Route path="/updateproduct" element={<Update_product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        
        </Route>
        <Route path="/signup" element={<Signup/>} />
        <Route path="login" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </>
      
    </div>
  );
}

export default App;
