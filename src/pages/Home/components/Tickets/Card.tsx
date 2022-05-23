import s from "./Tickets.module.scss";
import { User } from "./UsersSlider";

export const Card = ({ name, city }: User) => {
  console.log(name);
  return (
    <div className={s.card}>
      <div className={s.info}>
        <h2 className={s.name}>{name}</h2>
        <span className={s.city}>{city}</span>
      </div>
      <button className={s.card_profile}>Смотреть Профиль</button>
    </div>
  );
};
