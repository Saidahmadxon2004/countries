import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about/:name" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
