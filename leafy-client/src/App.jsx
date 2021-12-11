import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { MyPlants } from "./pages/myplants";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft, faSeedling, faBars, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import './assets/css/App.css';

library.add(faArrowLeft, faSeedling, faBars, faPlusSquare)

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/myplants" element={<MyPlants />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
