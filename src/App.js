import logo from './logo.svg';
import './App.css';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import AllCustomer from './pages/AllCustomer';
import Home from './pages/Home';
import Bar from './pages/Bar';
import UpdateCustomer from './pages/UpdateCustomer';
import DeleteCustomer from './pages/DeleteCustomer';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/allcustomer" element={<AllCustomer />} />
        <Route path="/Updatecustomer" element={<UpdateCustomer />} />
        <Route path="/deletecustomer" element={<DeleteCustomer />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
