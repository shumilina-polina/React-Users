import { MainPage } from "./components/MainPage/MainPage";
import { Tickets } from "./components/Tickets/Tickets";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <MainPage />
      <div className="container">
        <Tickets />
        <section className={s.area}>
          <div className={s.info}>
            <h2 className={s.title}>О площадке</h2>

            <div className={s.wrapper_border}>
              <div className={s.wrapper}>
                <div className={s.scroll_wrapper}>
                  <h3 className={s.info_title}>
                    Современная площадка для проведения концертов и других
                    мероприятий любой сложности.
                  </h3>
                  <p className={s.info_content}>
                    Мы предоставляем всю необходимую для организаторов
                    инфраструктуру и готовые решения под все основные задачи
                    любого события, а также современное оборудование,
                    соответствующее самым высоким мировым стандартам.
                  </p>
                  <h3 className={s.info_title}>
                    Современная площадка для проведения концертов и других
                    мероприятий любой сложности.
                  </h3>
                  <p className={s.info_content}>
                    Мы предоставляем всю необходимую для организаторов
                    инфраструктуру и готовые решения под все основные задачи
                    любого события, а также современное оборудование,
                    соответствующее самым высоким мировым стандартам.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.bid}>
            <div className={s.bid_wrapper}>
              <h3 className={s.bid_title}>
                Оставить заявку на проведение концерта
              </h3>
              <form>
                <textarea
                  tabIndex={1}
                  placeholder="Расскажите о вашем предложении"
                  className={s.bid_textarea}
                  cols={10}
                  rows={1}
                ></textarea>
              </form>
            </div>
            <button className={s.bid_button}>отправить</button>
          </div>
        </section>
        <section className={s.group}>
          <h3 className={s.group_title}>О группе</h3>
          <p className={s.group_text}>
            Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо.
            Группа образовалась в 2009 году и на данный момент состоит из
            Тайлера Джозефа и Джоша Дана. Коллектив самостоятельно выпустил два
            альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.
          </p>
        </section>
      </div>
    </>
  );
};
