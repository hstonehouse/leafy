import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faSeedling } from '@fortawesome/free-solid-svg-icons'
import './assets/images/css/App.css';

library.add(faArrowLeft, faSeedling)

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
