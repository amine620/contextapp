import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Users from "./components/Users";
import DataProvider from "./context/DataProvider";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";



function App() {
  return (

         <BrowserRouter>
              <DataProvider>
                  <Navbar />
                  <Routes>
                    <Route path={'/users'} element={<Users/>}  />
                    <Route path={'/form'} element={<Form/>}  />
                  </Routes>
              </DataProvider>
         </BrowserRouter>


  );
}

export default App;
