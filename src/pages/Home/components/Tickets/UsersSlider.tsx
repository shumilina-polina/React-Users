import s from "./Tickets.module.scss";
import Slider from "react-slick";
import { Card } from "./Card";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useEffect, useState } from "react";
import { fetchUser } from "../../../../store/thunks/fetchUsers";
import { RootState } from "../../../../store/store";

export type User = {
  name: string;
  city: string;
};

export const UsersSlider = ({ users }: any) => {
  console.log(users);
  console.log("hi");

  const staticUsers: User[] = [
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
    focusOnSelect: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  //со слайдером не работает api
  return (
    <>
      <Slider className={s.cards} {...settings}>
        {users.map((user: any) => {
          return (
            // <Card key={user.name} name={user.name} city={user.city} />
            <Card key={user.name} name={user.name} city={user.address.city} />
          );
        })}
      </Slider>
    </>
  );
};
