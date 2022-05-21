import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { UserPage } from "./pages/UserPage/UserPage";
import Header from "./shared/Header/Header";

function App() {
  return (
    <div className="global_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
