import { User } from "../../types/types";
import s from "./UserBlock.module.scss";

const UserBlock = ({ name, address, email, phone, website, company }: User) => {
  return (
    <section className={s.user}>
      <div className={s.wrapper}>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th className={s.user_title}>{name}</th>
              </tr>
            </thead>
            <tbody>
              <tr className={s.info}>
                <td>
                  <span>{address.city}</span>
                </td>
                <td>
                  <span>{email}</span>
                </td>
                <td>
                  <span>{phone}</span>
                </td>
                <td>
                  <span>{website}</span>
                </td>
                <td className={s.company}>
                  <span>{company.name}</span>
                  <span>{company.bs}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={s.buttons}>
            <button>Написать сообщение</button>
            <button>Предложить сходить на концерт</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBlock;
