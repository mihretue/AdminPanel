import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Adminpanel from "./component/adminpanelbuttons";


function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' index element={<Adminpanel/>}/>
      
    </Routes>
    </Router> 
  );
}

export default App;
