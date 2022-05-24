import { User } from "../../types/types";
import s from "./UserBlock.module.scss";

const UserBlock = ({ name, address, email, phone }: User) => {
  return (
    <section className={s.user}>
      <div className={s.wrapper}>
        <div className="container">
          <h2 className={s.user_title}>{name}</h2>
          <div className={s.info}>
            <span>{address.city}</span>
            <span>{email}</span>
            <span>{phone}</span>
            <button>Написать сообщение</button>
            <button>Предложить сходить на концерт</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBlock;
