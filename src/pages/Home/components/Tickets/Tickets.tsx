import { Card } from "./Card";
import s from "./Tickets.module.scss";
import Slider from "react-slick";

export type User = {
  name: string;
  city: string;
};

export const Tickets = () => {
  const users: User[] = [
    { name: "Иванов Cемен 1", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 2", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 3", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 4", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 5", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 6", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 7", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 8", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 9", city: "Санкт-Петербург" },
    { name: "Иванов Cемен 10", city: "Санкт-Петербург" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect:true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <section className={s.tickets}>
      <div className={s.head}>
        <h1 className={s.head_title}>Купили билеты</h1>
        <span className={s.head_count}>
          932/ <span>1000</span>
        </span>
      </div>

      <Slider className={s.cards} {...settings}>
        {users.map((user) => (
          <Card key={user.name} name={user.name} city={user.city} />
        ))}
      </Slider>
    </section>
  );
};
