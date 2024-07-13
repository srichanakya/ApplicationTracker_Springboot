import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import AddApplication from "./Components/Pages/AddApplication";
import FindApplication from "./Components/Pages/FindApplication";
import ViewApplication from "./Components/Pages/ViewApplication";
import EditApplication from "./Components/Pages/EditApplication";
import DeleteApplication from "./Components/Pages/DeleteApplication";
import AllApplications from "./Components/Pages/AllApplications";
import Homepage from "./Components/Pages/Homepage";
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
<Routes>
  <Route exact path="/" element={<Homepage />}/>
  <Route exact path="/dashboard" element={<Dashboard />}/>
  <Route exact path="/add" element={<AddApplication/>}/>
  <Route exact path="/find" element={<FindApplication/>}/>
  <Route exact path="/view/:id" element={<ViewApplication/>}/>
  <Route exact path="/update/:id" element={<EditApplication/>}/>
  <Route exact path="/delete/:id" element={<DeleteApplication/>}/>
  <Route exact path="/all" element={<AllApplications/>}/>
</Routes>

      </Router>
    </div>
  );
}

export default App;
