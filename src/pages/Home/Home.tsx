import { MainPage } from "./components/MainPage/MainPage";
import { Tickets } from "./components/Tickets/Tickets";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <MainPage />
      <div className="container">
        <Tickets />
        {/* <Area /> */}
      </div>
    </>
  );
};
