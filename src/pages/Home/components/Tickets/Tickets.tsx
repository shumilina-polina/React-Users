import s from "./Tickets.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { fetchUser } from "../../../../store/thunks/fetchUsers";
import { RootState } from "../../../../store/store";
import { UsersSlider } from "./UsersSlider";

export const Tickets = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const { users } = useAppSelector((state: RootState) => state.userReducer);

  return (
    <section className={s.tickets}>
      <div className={s.head}>
        <h1 className={s.head_title}>Купили билеты</h1>
        <span className={s.head_count}>
          10/ <span>1000</span>
        </span>
      </div>
      <UsersSlider users={users} />
    </section>
  );
};
