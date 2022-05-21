import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.wrapper}>
          <p className={s.logo}>concert club</p>
          <div className={s.buttons}>
            <button className={s.button_version}>
              Версия для слабовидящих
            </button>
            <button className={s.button_profile}>Мой профиль</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
