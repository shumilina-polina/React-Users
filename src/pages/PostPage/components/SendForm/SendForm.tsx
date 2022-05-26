import s from "./SendForm.module.scss";

export const SendForm = () => {



  return (
    <form className={s.comment_form} onSubmit={submit}>
      <div className={s.input_wrapper}>
        <input
          type="text"
          placeholder="Имя"
          required
          pattern="^[A-Za-zА-Яа-яЁё\s]+$"
        />
        <input
          type="email"
          placeholder="Email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        />
      </div>
      <textarea
        tabIndex={1}
        placeholder="Комментарий..."
        cols={10}
        rows={1}
        required
      ></textarea>
      <input type="submit" />
    </form>
  );
};
