import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Input from "./input";
import My_profile from "./profile";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/my_profile" element={<Input />} />
          <Route path="/my_profile_" element={<My_profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
