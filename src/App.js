import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Users from "./components/Users";
import DataProvider from "./context/DataProvider";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <DataProvider>



      <div className="App">
         {/* <Page/>
         <Navbar/> */}
         <Users/>
      </div>




    </DataProvider>


  );
}

export default App;
