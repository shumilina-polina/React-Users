import { Post } from "./components/Post/Post";
import { Publication } from "./components/Publication/Publication";
import s from "./UserPage.module.scss";

type PostType = {
  title: string;
  date: string;
  content: string;
  id: number;
};
type PublicationType = {
  title: string;
  id: number;
};

export const UserPage = () => {
  const posts: PostType[] = [
    {
      id: 1,
      title: "Twenty One Pilots",
      date: "12.01.22",
      content:
        "Просто шикарный альбом, Пилоты после Blurryface решили не идти проторенной дорожкой, и сделали что то новое. На мой взгляд у них на 100% получилось, альбом слушается на одном дыхании, каждая песня чем то запоминается, естественно нужно понимать тексты, чтобы вникнуть до конца во весь сюжет и атмосферу альбома.... ",
    },
    {
      id: 2,
      title: "Twenty One Pilots",
      date: "12.01.22",
      content: "Просто шикарный альбом, ",
    },
  ];

  const publications: PublicationType[] = [
    {
      id: 1,
      title: "Twenty One Pilots",
    },
    {
      id: 2,
      title: "Twenty One Pilots",
    },
    {
      id: 3,
      title: "Twenty One Pilots",
    },
    {
      id: 4,
      title: "Twenty One Pilots",
    },
    {
      id: 5,
      title: "Twenty One Pilots",
    },
    {
      id: 6,
      title: "Twenty One Pilots",
    },
  ];

  return (
    <>
      <section className={s.user}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.user_title}>Иванов Семен</h2>
            <div className={s.info}>
              <span>Санкт-Петербург</span>
              <span>ivanov@mail.com</span>
              <span>+7 (821) 311-21-32</span>
              <button>Написать сообщение</button>
              <button>Предложить сходить на концерт</button>
            </div>
          </div>
        </div>
      </section>
      <section className={s.posts}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.posts_title}>Посты</h2>
            <div className={s.posts_wrapper}>
              {posts.map((post) => (
                <Post
                  key={post.id}
                  title={post.title}
                  date={post.date}
                  content={post.content}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={s.public}>
        <div className={s.wrapper}>
          <div className="container">
            <h2 className={s.public_title}>Публикации</h2>
            <div className={s.public_wrapper}>
              {publications.map((publication) => (
                <Publication key={publication.id} title={publication.title} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
