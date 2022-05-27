import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../hooks/redux";
import { userClickSlice } from "../../../../store/slices/UserClickSlice";
import { User } from "../../../../types/types";

import s from "./Tickets.module.scss";

export const Card = (user: { user: User }) => {
  const dispatch = useAppDispatch();
  const handleButton = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(userClickSlice.actions.clickCurrentUser(user.user));
    localStorage.setItem("userClick", JSON.stringify(user));
  };
  return (
    <div className={s.card}>
      <div className={s.info}>
        <h2 className={s.name}>{user.user.name}</h2>
        <span className={s.city}>{user.user.address.city}</span>
      </div>
      <button className={s.card_profile} onClick={handleButton}>
        <Link className={s.link} to="/user">
          Смотреть профиль
        </Link>
      </button>
    </div>
  );
};
