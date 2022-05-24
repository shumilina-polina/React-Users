import UserBlock from "../../shared/UserBlock/UserBlock";
import { User } from "../../types/types";
import s from "./PostPage.module.scss";

export const PostPage = ({ id, name, address, email, phone }: User) => {
  return (
    <>
      <UserBlock
        id={id}
        name={name}
        address={address}
        email={email}
        phone={phone}
      />
      <section className={s.post}></section>
    </>
  );
};
