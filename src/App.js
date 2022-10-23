import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home, About, Policy, Terms, Contact, NotFound } from "./pages";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="policy" element={<Policy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
