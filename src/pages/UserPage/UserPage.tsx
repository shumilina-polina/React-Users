import s from "./UserPage.module.scss";

export const UserPage = () => {
  return (
    <>
      <div className="container">
        <section className={s.user}>
          <h2 className={s.title}>Иванов Семен</h2>
          <div className={s.info}>
            <span>Санкт-Петербург</span>
            <span>ivanov@mail.com</span>
            <span>+7 (821) 311-21-32</span>
            <button className={s.message}>Написать сообщение</button>
            <button className={s.offer}>Предложить сходить на концерт</button>
          </div>
        </section>
      </div>
    </>
  );
};
