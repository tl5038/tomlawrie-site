import './App.scss';
import './boxicons/css/boxicons.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AppLayout from "./Components/layout/AppLayout";
import Cv from "./pages/Cv";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/projects' element={<Projects />}/>
            <Route path='/cv' element={<Cv />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;