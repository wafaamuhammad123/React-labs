import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Error from "./components/error/error";
import Details from "./components/details/details";
import Home from "./components/home/home/home";
import Profile from "./components/profile/profile";
import 'bootstrap/dist/css/bootstrap.css';
function App(){

  return (
      <div>
          <div className="allComp">
              <BrowserRouter>
                   <div className="header">
                       <Header/>
                   </div>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/details/:id" element={<Details/>}/>
                      <Route path="*" element={<Error/>}/>
                      <Route path="/profile" element={<Profile/>}/>
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
  )
}

export default App;