import { Card } from "./Card";
import s from "./Tickets.module.scss";

export type User = {
  name: string;
  city: string;
};

export const Tickets = () => {
  const users: User[] = [
    { name: "Иванов Cемен", city: "Санкт-Петербург" },
    { name: "Иванов Cемен", city: "Санкт-Петербург" },
    { name: "Иванов Cемен", city: "Санкт-Петербург" },
    { name: "Иванов Cемен", city: "Санкт-Петербург" },
  ];

  return (
    <section className={s.tickets}>
      <div className={s.head}>
        <h1 className={s.head_title}>Купили билеты</h1>
        <span className={s.head_count}>
          932/ <span>1000</span>
        </span>
      </div>
      <div className={s.cards}>
        {users.map((user) => (
          <Card name={user.name} city={user.city} />
        ))}
      </div>
    </section>
  );
};
