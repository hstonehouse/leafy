import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './pages/home';
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { MyPlants } from "./pages/myplants";
import { PlantPage } from "./pages/plant";
import { PlantDirectory } from "./pages/plantdirectory";
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
          <Route path="/plant/:id" element={<PlantPage />}></Route>
          <Route path="/plantdirectory" element={<PlantDirectory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
