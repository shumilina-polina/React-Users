import s from "./Tickets.module.scss";
import Slider from "react-slick";
import { Card } from "./Card";
import { FC } from "react";
import { User } from "../../../../types/types";

type Props = { users: User[] };

export const UsersSlider: FC<Props> = (users) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    focusOnSelect: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
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
