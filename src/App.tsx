import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./hooks/redux";
import { Home } from "./pages/Home/Home";
import { UserPage } from "./pages/UserPage/UserPage";
import Header from "./shared/Header/Header";
import { RootState } from "./store/store";

function App() {
  const { name, address, id, email, phone } = useAppSelector(
    (state: RootState) => state.userClickReducer
  ).user;
  return (
    <div className="global_container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={
            <UserPage
              id={id}
              name={name}
              address={address}
              email={email}
              phone={phone}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
