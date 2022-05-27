import s from "./Tickets.module.scss";
import Slider from "react-slick";
import { Card } from "./Card";
import { FC, useEffect, useState } from "react";
import { User } from "../../../../types/types";
import { useMediaQuery } from "react-responsive";

type Props = { users: User[] };

export const UsersSlider: FC<Props> = (users) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 420px)" });

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 700,
    slidesToShow: isTabletOrMobile ? 2 : 4,
    slidesToScroll: isTabletOrMobile ? 2 : 4,
  };
  return (
    <>
      <Slider className={s.cards} {...settings}>
        {users.users.map((user: User) => {
          return <Card key={user.id} user={user} />;
        })}
      </Slider>
    </>
  );
};
